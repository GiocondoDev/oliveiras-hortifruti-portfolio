export const whatsappDestination = "https://wa.me/5517996569780";

export type QuotationDetails = {
  name: string;
  establishment: string;
  customerType: string;
  products: string;
};

export type QuotationErrors = Partial<Record<keyof QuotationDetails, string>>;

export function validateQuotation(details: QuotationDetails): QuotationErrors {
  const errors: QuotationErrors = {};
  if (!details.name.trim()) errors.name = "Informe seu nome.";
  else if (details.name.trim().length > 100) errors.name = "Use até 100 caracteres para o nome.";
  if (details.establishment.trim().length > 150) {
    errors.establishment = "Use até 150 caracteres para o estabelecimento.";
  }
  if (!["Empresa", "Residencial"].includes(details.customerType)) {
    errors.customerType = "Selecione Empresa ou Residencial.";
  }
  if (!details.products.trim()) errors.products = "Informe os produtos e as quantidades desejados.";
  else if (details.products.trim().length > 2000) {
    errors.products = "Use até 2.000 caracteres para os produtos e quantidades.";
  }
  return errors;
}

export function createQuotationUrl(details: QuotationDetails): string {
  const message = [
    "Olá, Oliveiras Hortifruti! Gostaria de solicitar um orçamento.",
    "",
    `Nome: ${details.name.trim()}`,
    ...(details.establishment.trim()
      ? [`Estabelecimento: ${details.establishment.trim()}`]
      : []),
    `Tipo de cliente: ${details.customerType}`,
    "",
    "Produtos e quantidades desejados:",
    details.products.trim(),
  ].join("\n");
  return `${whatsappDestination}?text=${encodeURIComponent(message.toWellFormed())}`;
}
