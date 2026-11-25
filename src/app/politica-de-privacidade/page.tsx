import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { whatsappDestination } from "@/lib/quotation";
import { allowIndexing } from "@/lib/site";
import styles from "./privacy.module.css";

const description = "Como a Oliveiras Hortifruti trata os dados de orçamentos e pedidos pelo WhatsApp, seus prazos de conservação e direitos de privacidade.";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description,
  alternates: { canonical: "/politica-de-privacidade/" },
  robots: { index: allowIndexing, follow: allowIndexing },
  openGraph: {
    title: "Política de Privacidade | Oliveiras Hortifruti",
    description,
    url: "/politica-de-privacidade/",
    type: "website",
    locale: "pt_BR",
    siteName: "Oliveiras Hortifruti",
  },
  twitter: { card: "summary", title: "Política de Privacidade | Oliveiras Hortifruti", description },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader homePage={false} />
      <main id="conteudo" tabIndex={-1} className={`container ${styles.main}`}>
        <article aria-labelledby="privacy-title">
          <header className={styles.introduction}>
            <p className={styles.eyebrow}>PRIVACIDADE</p>
            <h1 id="privacy-title">Política de Privacidade</h1>
            <p className={styles.version}>V1 · Atualizada em <time dateTime="2026-11-24">24 de novembro de 2026</time></p>
            <p className={styles.draft}>Esta política explica como as informações fornecidas no site e nas conversas pelo WhatsApp são utilizadas no atendimento da Oliveiras Hortifruti, como funciona a conservação das conversas e como exercer seus direitos.</p>
          </header>

          <section aria-labelledby="privacy-identity">
            <h2 id="privacy-identity">1. Quem atende você</h2>
            <p>Esta política apresenta as práticas informadas pela Oliveiras Hortifruti, que atende empresas e clientes residenciais em São José do Rio Preto e região — SP. O canal para assuntos de privacidade é o WhatsApp <a href={whatsappDestination} target="_blank" rel="noopener noreferrer">+55 17 99656-9780 (abre em nova aba)</a>.</p>
            <p>Oliveiras Hortifruti é a identificação comercial utilizada neste site. O WhatsApp é o único canal de mensagens da empresa para atendimento a clientes. Para esclarecimentos e solicitações sobre seus dados, utilize o WhatsApp +55 17 99656-9780.</p>
          </section>

          <section aria-labelledby="privacy-information">
            <h2 id="privacy-information">2. Informações que você fornece e suas finalidades</h2>
            <p>No formulário de orçamento, você informa nome, tipo de cliente (Empresa ou Residencial) e os produtos e quantidades desejados. O nome do estabelecimento é opcional; para pedidos residenciais, pode ficar em branco.</p>
            <p>Essas informações são usadas para preparar sua solicitação e, após o envio por você, permitir o atendimento de orçamentos e pedidos pelo WhatsApp. Na conversa, a empresa também recebe seu número de WhatsApp e as informações que você decidir compartilhar para esse atendimento.</p>
            <p>As informações são utilizadas para responder a solicitações de orçamento, tratar pedidos e combinar os detalhes de atendimento e entrega pelo WhatsApp. Registros comerciais, contábeis e fiscais podem exigir conservação para cumprimento de obrigações legais.</p>
            <p>Envie apenas informações necessárias ao atendimento. O formulário não solicita dados pessoais sensíveis, documentos de identificação ou dados de pagamento.</p>
          </section>

          <section aria-labelledby="privacy-whatsapp">
            <h2 id="privacy-whatsapp">3. Formulário e redirecionamento ao WhatsApp</h2>
            <p>A mensagem é preparada localmente no seu navegador. A aplicação do site não mantém uma base de dados de solicitações de orçamento e não envia os campos a um backend de atendimento.</p>
            <p>Ao escolher continuar no WhatsApp, os dados preenchidos são incluídos no endereço de redirecionamento e disponibilizados à plataforma para preparar a mensagem. Esse tratamento pela plataforma pode começar na abertura do link, antes da confirmação do envio. A mensagem para a empresa só é enviada quando você a confirma no WhatsApp.</p>
            <p>O link de conversa direta dispensa o formulário, mas o uso do WhatsApp continua sujeito às práticas da plataforma. Consulte a <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Política de Privacidade do WhatsApp (abre em nova aba)</a>. O WhatsApp integra o grupo Meta e possui condições próprias de tratamento, compartilhamento e conservação de dados, inclusive quanto ao processamento em outros países.</p>
            <p>A ausência de uma base de solicitações no site não significa ausência de registros no navegador, na hospedagem ou em serviços de terceiros.</p>
          </section>

          <section aria-labelledby="privacy-retention">
            <h2 id="privacy-retention">4. Mensagens temporárias e conservação de registros</h2>
            <p>A Oliveiras Hortifruti utiliza mensagens temporárias do WhatsApp, ativadas por padrão para novas conversas, com duração de 90 dias. O prazo é contado individualmente para cada mensagem, a partir de seu envio, conforme o funcionamento do WhatsApp. Essa configuração não corresponde à exclusão integral de uma conversa a cada 90 dias.</p>
            <p>O desaparecimento das mensagens está sujeito às condições e limitações do recurso, incluindo situações em que mensagens ou cópias sejam mantidas. Não há garantia de exclusão completa de backups da empresa ou de terceiros, dos sistemas do WhatsApp/Meta, dos dispositivos dos clientes ou de cópias encaminhadas, salvas ou capturadas por participantes. A configuração padrão para novas conversas não assegura a exclusão de mensagens anteriores.</p>
            <p>Registros comerciais, contábeis e fiscais podem ter obrigações próprias de guarda e ser conservados separadamente pelos prazos legais aplicáveis. A duração de 90 dias das mensagens temporárias não determina os prazos desses registros nem afasta obrigações de conservação previstas em lei.</p>
          </section>

          <section aria-labelledby="privacy-hosting">
            <h2 id="privacy-hosting">5. Hospedagem, cookies e outros serviços</h2>
            <p>Na versão atual, o código da aplicação não integra ferramentas de análise de audiência, pixels publicitários ou scripts de rastreamento. O formulário prepara a mensagem no navegador e não grava cookies, dados em armazenamento persistente do navegador ou solicitações em uma base de dados da aplicação.</p>
            <p>O site utilizará hospedagem compartilhada Hostinger Premium. A ausência de rastreamento implementado na aplicação não constitui uma afirmação de inexistência de registros técnicos, cookies ou outros tratamentos na infraestrutura de hospedagem e em serviços de terceiros. Informações sobre esses tratamentos podem ser solicitadas pelo canal de privacidade indicado nesta política.</p>
          </section>

          <section aria-labelledby="privacy-rights">
            <h2 id="privacy-rights">6. Seus direitos e como fazer uma solicitação</h2>
            <p>Nos termos da LGPD e conforme as condições legais aplicáveis, você pode solicitar:</p>
            <ul>
              <li>Confirmação do tratamento, acesso e correção dos seus dados.</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados irregularmente.</li>
              <li>Portabilidade, observados os limites legais e regulamentares.</li>
              <li>Informações sobre compartilhamento e, quando houver consentimento, sobre a possibilidade de recusá-lo e suas consequências.</li>
              <li>Revogação do consentimento e eliminação dos dados tratados com essa base, ressalvadas as hipóteses legais de conservação.</li>
              <li>Oposição ao tratamento em desconformidade com a lei e, quando aplicável, revisão de decisões exclusivamente automatizadas que afetem seus interesses.</li>
            </ul>
            <p>Envie sua solicitação ao WhatsApp <a href={whatsappDestination} target="_blank" rel="noopener noreferrer">+55 17 99656-9780 (abre em nova aba)</a>, indicando que se trata de privacidade. O exercício desses direitos é gratuito. A análise pode exigir confirmação proporcional de identidade para proteger seus dados; serão observados os prazos e requisitos legais.</p>
            <p>Você também pode recorrer à <a href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares" target="_blank" rel="noopener noreferrer">ANPD (abre em nova aba)</a> e aos órgãos competentes para a proteção dos seus direitos.</p>
          </section>

          <section aria-labelledby="privacy-updates">
            <h2 id="privacy-updates">7. Atualizações desta política</h2>
            <p>Esta política pode ser atualizada para refletir mudanças nas práticas de tratamento de dados ou nos serviços utilizados pela Oliveiras Hortifruti. A data de atualização será indicada nesta página.</p>
          </section>
          <Link href="/#contato" prefetch={false} className={styles.returnLink}>Voltar ao contato</Link>
        </article>
      </main>
      <SiteFooter homePage={false} />
    </>
  );
}
