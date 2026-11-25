import assert from "node:assert/strict";
import test from "node:test";
import { createQuotationUrl, validateQuotation } from "../src/lib/quotation.ts";

const details = {
  name: "  Cliente de teste Á & +  ",
  establishment: "  Cozinha #1  ",
  customerType: "Empresa",
  products: "Tomate: 2 kg\nAlface & rúcula: 3 maços",
};

test("required fields reject empty and whitespace-only values", () => {
  assert.deepEqual(Object.keys(validateQuotation({ name: "  ", establishment: "", customerType: "", products: "\n " })), ["name", "customerType", "products"]);
});

test("both customer types accept an optional empty establishment", () => {
  for (const customerType of ["Empresa", "Residencial"]) {
    const value = { ...details, customerType, establishment: " " };
    assert.deepEqual(validateQuotation(value), {});
    const message = new URL(createQuotationUrl(value)).searchParams.get("text");
    assert.ok(!message.includes("Estabelecimento:"));
    assert.ok(message.includes(`Tipo de cliente: ${customerType}`));
  }
});

test("length limits accept boundaries and reject excess or an unknown customer type", () => {
  assert.deepEqual(validateQuotation({ ...details, name: "a".repeat(100), establishment: "a".repeat(150), products: "a".repeat(2000) }), {});
  assert.equal(Object.keys(validateQuotation({ ...details, name: "a".repeat(101), establishment: "a".repeat(151), products: "a".repeat(2001), customerType: "Other" })).length, 4);
});

test("encoded text preserves Unicode, reserved characters, and line breaks at the fixed destination", () => {
  const url = new URL(createQuotationUrl(details));
  assert.equal(url.origin + url.pathname, "https://wa.me/5517996569780");
  assert.equal(url.searchParams.size, 1);
  assert.equal(url.searchParams.get("text"), `Olá, Oliveiras Hortifruti! Gostaria de solicitar um orçamento.\n\nNome: Cliente de teste Á & +\nEstabelecimento: Cozinha #1\nTipo de cliente: Empresa\n\nProdutos e quantidades desejados:\n${details.products}`);
});

test("user markup and query-like text remain inert message content", () => {
  const products = '<script>alert("test")</script> &phone=000 #fragment ?text=other 🥬';
  const url = new URL(createQuotationUrl({ ...details, products }));
  assert.equal(url.searchParams.size, 1);
  assert.equal(url.hash, "");
  assert.ok(url.searchParams.get("text").endsWith(products));
});

test("an incomplete UTF-16 character cannot crash URL encoding", () => {
  const url = new URL(createQuotationUrl({ ...details, products: "Alface \uD800" }));
  assert.ok(url.searchParams.get("text").endsWith("Alface �"));
});
