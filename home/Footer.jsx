/* Footer — banda de inversão (contato) + rodapé com nome de fundo. */
const { Button: FBtn, StatusPill: FStatus } = window.ColeMartinDesignSystem_3d34e7;

function Footer() {
  const CP = window.CP;
  const p = CP.profile;
  const d = new Date();
  const wd = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'][d.getDay()];
  const pad = (n) => String(n).padStart(2, '0');
  const date = `${wd}, ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;

  return (
    <footer className="cp-foot" id="contato" data-screen-label="Contato">
      <div className="cp-foot-inner">
        <div className="reveal">
          <span className="cp-eyebrow eyebrow-inv"><span className="dash"></span>Contato</span>
          <h2>Quer melhorar seu produto<span className="dot">?</span></h2>
          <div style={{ marginBottom: 28 }}><FStatus tone="sage">{p.availability}</FStatus></div>
          <div className="cp-foot-cta">
            <FBtn variant="primary" size="lg"
            iconRight={<i data-lucide="arrow-up-right" style={{ width: 15, height: 15, strokeWidth: 1.5 }} />}
            onClick={() => location.assign('mailto:' + p.email)}>
              Vamos conversar
            </FBtn>
            <FBtn variant="glass" size="lg" onClick={() => window.open(p.linkedin, '_blank', 'noopener')}>
              LinkedIn
            </FBtn>
            <FBtn variant="link" size="lg"
            style={{ color: 'var(--cm-white)', marginLeft: 4 }}
            iconRight={<i data-lucide="arrow-down-to-line" style={{ width: 14, height: 14, strokeWidth: 1.5 }} />}
            onClick={() => window.open(p.cv, '_blank', 'noopener')}>
              Currículo
            </FBtn>
          </div>
        </div>

        <div className="cp-foot-div"></div>

        <div className="cp-foot-row">
          <div className="links">
            <a href={'mailto:' + p.email}>
              <i data-lucide="mail" style={{ width: 14, height: 14, strokeWidth: 1.5 }}></i>{p.email}
            </a>
            <a href={p.linkedin} target="_blank" rel="noopener">
              <i data-lucide="linkedin" style={{ width: 14, height: 14, strokeWidth: 1.5 }}></i>LinkedIn
            </a>
          </div>
          <div>© 2026 {p.name} · <span style={{ opacity: 0.7 }}>{date}</span></div>
        </div>
      </div>

      <div className="cp-foot-bigname" aria-hidden="true">{p.name}</div>
    </footer>);

}

window.Footer = Footer;