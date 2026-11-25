import Image from "next/image";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section id="inicio" className={`container ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <p className={styles.eyebrow}><span aria-hidden="true" />Hortifrúti para empresas</p>
        <h1 id="hero-title">
          Frescor e qualidade <span>para o seu <em>negócio.</em></span>
        </h1>
        <p className={styles.description}>
          Abastecimento de hortifrúti para restaurantes, hotéis e cozinhas
          profissionais em São José do Rio Preto e região.
        </p>
        <div className={styles.actions}>
          <a href="#contato" className="button button-primary">Solicitar orçamento</a>
          <a href="#produtos" className="button button-secondary">
            Conhecer produtos
          </a>
        </div>
        <p className={styles.previewNote}>Prepare sua lista e solicite um orçamento pelo WhatsApp.</p>
        <div className={styles.audience}>
          <p>Do seu negócio à sua casa.</p>
          <ul aria-label="Público atendido">
            <li>Restaurantes</li>
            <li>Hotéis</li>
            <li>Cozinhas profissionais</li>
          </ul>
          <p className={styles.residential}>Também atendemos clientes residenciais.</p>
        </div>
      </div>

      <figure className={styles.visual} aria-labelledby="photography-caption">
        <div className={styles.imageFrame}>
          <Image
            src="/images/produce-crates-jennifer-yung.webp"
            alt="Caixas de madeira com cenouras, batatas, cebolas, berinjelas, frutas cítricas e verduras."
            fill
            preload
            sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, (min-width: 616px) 576px, calc(100vw - 40px)"
            className={styles.photograph}
          />
        </div>
        <figcaption id="photography-caption" className={styles.caption}>
          <span>Imagem ilustrativa.</span>
          <span>Fotografia: Jennifer Yung / Unsplash</span>
        </figcaption>
      </figure>
    </section>
  );
}
