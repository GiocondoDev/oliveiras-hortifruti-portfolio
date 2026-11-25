import Image from "next/image";
import styles from "./about.module.css";

export function About() {
  return (
    <section
      id="sobre"
      className={styles.section}
      aria-labelledby="about-title"
      tabIndex={-1}
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>NOSSA HISTÓRIA · DESDE 1990</p>
          <h2 id="about-title">De geração em geração, cultivando confiança.</h2>
          <div className={styles.story}>
            <p>
              Tudo começou em 1990, quando nosso pai iniciou sua trajetória no
              setor de hortifrúti.
            </p>
            <p>
              Décadas depois, essa experiência continua viva na Oliveiras
              Hortifruti, agora conduzida em família, com a participação dos
              filhos e o mesmo envolvimento com o trabalho que faz parte da nossa
              história.
            </p>
            <p>
              Hoje, unimos a experiência de quem conhece o setor há décadas à
              dedicação de uma nova geração para atender restaurantes, hotéis,
              cozinhas profissionais e clientes residenciais em São José do Rio
              Preto e região.
            </p>
          </div>
          <ol className={styles.timeline} aria-label="Marcos da trajetória familiar e da empresa">
            <li>
              <time dateTime="1990">1990</time>
              <span className={styles.milestone}>Início da trajetória familiar</span>
            </li>
            <li>
              <time dateTime="2026">2026</time>
              <span className={styles.milestone}>Nova fase com a Oliveiras Hortifruti</span>
              <span className={styles.legalNote}>Formalização da empresa atual.</span>
            </li>
          </ol>
        </div>

        <figure className={styles.visual}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/about-produce-kampus.webp"
              alt="Mãos segurando uma caixa de hortaliças, com folhas de alface em destaque."
              fill
              sizes="(min-width: 1024px) 464px, (min-width: 656px) 576px, calc(100vw - 40px)"
              className={styles.photograph}
            />
          </div>
          <figcaption className={styles.caption}>
            <span>Imagem ilustrativa; não retrata a família Oliveiras.</span>
            <span>Fotografia: Kampus Production / Pexels</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
