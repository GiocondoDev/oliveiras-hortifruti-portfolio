import Image from "next/image";
import { productCategories } from "@/content/products";
import styles from "./products.module.css";

export function Products() {
  return (
    <section
      id="produtos"
      className={styles.section}
      aria-labelledby="products-title"
      tabIndex={-1}
    >
      <div className="container">
        <div className={styles.introduction}>
          <p className={styles.eyebrow}>NOSSO HORTIFRÚTI</p>
          <h2 id="products-title">Nossos produtos</h2>
          <p className={styles.description}>
            Uma seleção de frutas, verduras e legumes para abastecer restaurantes,
            hotéis, cozinhas profissionais e também a sua casa.
          </p>
        </div>

        <ul className={styles.grid} aria-label="Categorias de hortifrúti">
          {productCategories.map((category) => (
            <li key={category.id}>
              <article className={styles.card} aria-labelledby={`category-${category.id}`}>
                <div className={styles.imageFrame}>
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(min-width: 1440px) 322px, (min-width: 1152px) 23vw, (min-width: 640px) 46vw, calc(100vw - 40px)"
                    className={styles.photograph}
                  />
                </div>
                <div className={styles.cardCopy}>
                  <h3 id={`category-${category.id}`}>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className={styles.availability}>
          Fotografias ilustrativas. Variedades e disponibilidade sob consulta.
        </p>
      </div>
    </section>
  );
}
