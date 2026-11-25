"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  createQuotationUrl,
  validateQuotation,
  whatsappDestination,
  type QuotationDetails,
  type QuotationErrors,
} from "@/lib/quotation";
import styles from "./contact.module.css";

export function Contact() {
  const [details, setDetails] = useState<QuotationDetails>({
    name: "",
    establishment: "",
    customerType: "",
    products: "",
  });
  const [errors, setErrors] = useState<QuotationErrors>({});
  const [preparedUrl, setPreparedUrl] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function update(field: keyof QuotationDetails, value: string) {
    setDetails((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
    setPreparedUrl("");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateQuotation(details);
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      formRef.current?.querySelector<HTMLElement>(`#contact-${firstError}`)?.focus();
      setPreparedUrl("");
      return;
    }
    const url = createQuotationUrl(details);
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className={styles.section} aria-labelledby="contact-title" tabIndex={-1}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.introduction}>
          <p className={styles.eyebrow}>CONTATO</p>
          <h2 id="contact-title">Vamos conversar sobre o seu pedido.</h2>
          <p className={styles.description}>
            Para sua empresa ou sua casa, conte o que você precisa. Prepare sua
            lista e solicite um orçamento à Oliveiras Hortifruti pelo WhatsApp.
          </p>
          <div className={styles.directContact}>
            <p>Prefere conversar diretamente?</p>
            <a href={whatsappDestination} target="_blank" rel="noopener noreferrer">
              Conversar pelo WhatsApp <span className={styles.newTab}>(abre em nova aba)</span>
            </a>
            <p className={styles.phone}>+55 17 99656-9780</p>
          </div>
        </div>

        <form ref={formRef} className={styles.form} onSubmit={submit} noValidate aria-labelledby="quotation-title" aria-describedby="quotation-note quotation-privacy">
          <h3 id="quotation-title">Solicite seu orçamento</h3>
          <p className={styles.formIntroduction}>Os campos com * são obrigatórios.</p>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="contact-name">Nome <span aria-hidden="true">*</span></label>
              <input id="contact-name" autoComplete="name" required maxLength={100} value={details.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />
              {errors.name && <p id="contact-name-error" className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-establishment">Nome do estabelecimento <span className={styles.optional}>(opcional)</span></label>
              <input id="contact-establishment" autoComplete="organization" maxLength={150} value={details.establishment} onChange={(event) => update("establishment", event.target.value)} aria-invalid={Boolean(errors.establishment)} aria-describedby={`contact-establishment-hint${errors.establishment ? " contact-establishment-error" : ""}`} />
              <p id="contact-establishment-hint" className={styles.hint}>Se o pedido é para sua casa, deixe este campo em branco.</p>
              {errors.establishment && <p id="contact-establishment-error" className={styles.error}>{errors.establishment}</p>}
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-customerType">Tipo de cliente <span aria-hidden="true">*</span></label>
              <select id="contact-customerType" required value={details.customerType} onChange={(event) => update("customerType", event.target.value)} aria-invalid={Boolean(errors.customerType)} aria-describedby={errors.customerType ? "contact-customerType-error" : undefined}>
                <option value="">Selecione uma opção</option>
                <option value="Empresa">Empresa</option>
                <option value="Residencial">Residencial</option>
              </select>
              {errors.customerType && <p id="contact-customerType-error" className={styles.error}>{errors.customerType}</p>}
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-products">Produtos e quantidades desejados <span aria-hidden="true">*</span></label>
              <textarea id="contact-products" required rows={5} maxLength={2000} value={details.products} onChange={(event) => update("products", event.target.value)} aria-invalid={Boolean(errors.products)} aria-describedby={`contact-products-hint${errors.products ? " contact-products-error" : ""}`} />
              <p id="contact-products-hint" className={styles.hint}>Informe cada produto e sua quantidade. Até 2.000 caracteres.</p>
              {errors.products && <p id="contact-products-error" className={styles.error}>{errors.products}</p>}
            </div>
          </div>
          <p id="quotation-note" className={styles.note}>
            Ao continuar, o WhatsApp abrirá em uma nova aba com sua mensagem
            preenchida. Revise e confirme o envio por lá. O formulário não grava
            solicitações em uma base de dados do site nem envia a mensagem automaticamente.
          </p>
          <p id="quotation-privacy" className={styles.privacyNotice}>
            Ao continuar, os dados serão disponibilizados ao WhatsApp para preparar sua mensagem.
            Saiba mais na <a href="/politica-de-privacidade/" target="_blank" rel="noopener noreferrer">Política de Privacidade (abre em nova aba)</a>.
          </p>
          <button type="submit" className={`button button-primary ${styles.submit}`}>Continuar no WhatsApp</button>
          <div aria-live="polite" aria-atomic="true" className={styles.feedback}>
            {Object.values(errors).some(Boolean) && <p className={styles.error}>Confira os campos indicados para continuar.</p>}
            {preparedUrl && <p>Mensagem preparada. O envio precisa ser confirmado no WhatsApp. Se a nova aba não abriu, <a href={preparedUrl} target="_blank" rel="noopener noreferrer">abra a mensagem no WhatsApp</a>.</p>}
          </div>
          <noscript><p>Ative o JavaScript para preparar a mensagem ou use o link direto do WhatsApp.</p></noscript>
        </form>
      </div>
    </section>
  );
}
