import { whatsappDestination } from "@/lib/quotation";
import styles from "./site-footer.module.css";

const footerLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Como Trabalhamos", href: "#como-trabalhamos" },
  { label: "Contato", href: "#contato" },
] as const;

export function SiteFooter({ homePage = true }: { homePage?: boolean }) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brandBlock}>
            <a href={`${homePage ? "" : "/"}#inicio`} className={styles.brand} aria-label="Oliveiras Hortifruti — início">
              <span className={styles.logo} aria-hidden="true" />
              <span className={styles.brandName}>Oliveiras<span>Hortifruti</span></span>
            </a>
            <p className={styles.description}>Tradição familiar no hortifrúti desde 1990.</p>
          </div>

          <nav aria-label="Navegação do rodapé" className={styles.navigation}>
            <h2 className={styles.label}>Navegue</h2>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}><a href={`${homePage ? "" : "/"}${link.href}`}>{link.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className={styles.contact}>
            <h2 className={styles.label}>Contato</h2>
            <p>São José do Rio Preto e região — SP</p>
            <a href={whatsappDestination} target="_blank" rel="noopener noreferrer">
              <span>WhatsApp · +55 17 99656-9780</span>
              <span className={styles.newTab}>Abre em nova aba</span>
            </a>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p>© 2026 Oliveiras Hortifruti. Todos os direitos reservados.</p>
          <a href="/politica-de-privacidade/" aria-current={homePage ? undefined : "page"}>Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
