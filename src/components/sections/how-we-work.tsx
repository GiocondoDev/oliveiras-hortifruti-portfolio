import styles from "./how-we-work.module.css";

const steps = [
  {
    number: "01",
    icon: "message",
    title: "Pedido pelo WhatsApp",
    description:
      "O cliente envia sua lista de produtos e quantidades diretamente pelo WhatsApp.",
  },
  {
    number: "02",
    icon: "preparation",
    title: "Separação dos produtos",
    description:
      "Nossa equipe organiza e prepara os produtos conforme cada pedido.",
  },
  {
    number: "03",
    icon: "delivery",
    title: "Entrega",
    description:
      "Os produtos seguem para entrega conforme as condições combinadas com cada cliente.",
  },
] as const;

function StepIcon({ name }: { name: (typeof steps)[number]["icon"] }) {
  return (
    <svg
      className={styles.icon}
      width="36"
      height="36"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {name === "message" ? (
        <>
          <path d="M27 15a11 11 0 0 1-16.5 9.5L5 26l1.5-5.5A11 11 0 1 1 27 15Z" />
          <path d="M11 12h10M11 17h6" />
        </>
      ) : name === "preparation" ? (
        <>
          <path d="m5 11 11-5 11 5v14L16 30 5 25V11Z" />
          <path d="m5 11 11 5 11-5M16 16v14M10.5 8.5l11 5" />
          <path d="m20 5 2 2 5-5" />
        </>
      ) : (
        <>
          <path d="M3 8h16v16H3V8ZM19 14h6l4 5v5h-4M19 24h-7M25 14v5h4" />
          <circle cx="8" cy="24" r="3" />
          <circle cx="22" cy="24" r="3" />
        </>
      )}
    </svg>
  );
}

export function HowWeWork() {
  return (
    <section
      id="como-trabalhamos"
      className={styles.section}
      aria-labelledby="how-we-work-title"
      tabIndex={-1}
    >
      <div className="container">
        <div className={styles.introduction}>
          <p className={styles.eyebrow}>COMO TRABALHAMOS</p>
          <h2 id="how-we-work-title">
            Do pedido à entrega, com atenção em cada etapa.
          </h2>
        </div>
        <ol className={styles.steps} aria-label="Etapas do atendimento">
          {steps.map((step) => (
            <li key={step.number} className={styles.step}>
              <div className={styles.stepHeading}>
                <span className={styles.number} aria-hidden="true">
                  {step.number}
                </span>
                <StepIcon name={step.icon} />
              </div>
              <div className={styles.copy}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
