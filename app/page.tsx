export default function Home() {
  const basePath =
    process.env.NODE_ENV === "production"
      ? "/trelu-brand-foundry-landing-page"
      : "";

  return (
    <main className="site">
      <header className="header">
        <div className="brand">
          {/* The original transparent brand asset is intentionally served directly. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/trelu-brand-foundry-logo.png`}
            alt="Trelu Brand Foundry"
            width="3300"
            height="1582"
          />
        </div>

        <p className="foundry-status">
          <span aria-hidden="true" />
          THE FOUNDRY IS ACTIVE.
        </p>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="headline-wrap">
          <h1
            id="hero-title"
            aria-label="FORGE A POSITION THE MARKET CAN’T IGNORE."
          >
            <span>FORGE A</span>
            <span>POSITION THE</span>
            <span>MARKET CAN’T</span>
            <span>IGNORE.</span>
          </h1>
        </div>

        <div className="shaping-field" aria-hidden="true">
          <span className="shape shape-back" />
          <span className="shape shape-front" />
          <i />
        </div>
      </section>

      <section className="lower" aria-label="About Trelu">
        <div className="body-copy">
          <p>
            <span>
              Trelu is an entrepreneur-led brand and growth foundry for complex
              businesses entering pivotal change.
            </span>
            <span>
              We forge the clarity, position, brand, and market systems required
              to outposition competitors and reshape industries.
            </span>
          </p>
        </div>

        <div className="contact">
          <p className="supporting-line">Our full website is taking shape.</p>
          <a className="cta" href="mailto:hello@trelu.com">
            <span>START A CONVERSATION</span>
            <span className="cta-mark" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
