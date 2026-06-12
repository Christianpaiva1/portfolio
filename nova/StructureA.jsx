/* ============================================================
   ESTRUTURA A — Cinemática / Editorial
   Compõe com os componentes do Digital Experiences DS.
   ============================================================ */
const DS_A = window.DigitalExperiencesDesignSystem_c7d186 || {};
const { Button: ButtonA, Tag: TagA, Badge: BadgeA, Divider: DividerA } = DS_A;
const PF = window.PF;

const ArrowA = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11L11 3M5 3h6v6" /></svg>
);

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.pf-reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

function TopBarA() {
  return (
    <header className="pf-top">
      <a href="#top" className="pf-brand"><span className="mark">CP</span>{PF.profile.name}</a>
      <nav className="pf-topnav">
        <a href="#sobre" className="hide-sm">Sobre</a>
        <a href="#trabalho" className="hide-sm">Trabalho</a>
        <a href="#experiencia" className="hide-sm">Experiência</a>
        <a href="#contato">Contato <ArrowA /></a>
      </nav>
    </header>
  );
}

function HeroA() {
  return (
    <section className="a-hero pf-wrap" id="top">
      <div className="a-status">
        <BadgeA tone="signal" dot>{PF.profile.availability}</BadgeA>
        <BadgeA tone="violet">{PF.profile.city}</BadgeA>
        <BadgeA tone="neutral">{PF.profile.seniority}</BadgeA>
      </div>
      <h1 className="a-display">
        Designer<br />
        <span className="accent">UX</span><span className="soft">/</span><span className="accent">UI</span><br />
        <span className="soft">partindo do</span> problema.
      </h1>
      <div className="a-hero-row">
        <div className="a-hero-aside">
          <p className="pf-lead" style={{ maxWidth: '34ch' }}>
            Pesquisa, fluxo e interface — <strong>antes de abrir qualquer ferramenta.</strong>
          </p>
          <div className="a-hero-cta">
            <ButtonA variant="primary" size="lg" iconRight={<ArrowA />} onClick={() => location.assign('#trabalho')}>Ver trabalho</ButtonA>
            <ButtonA variant="secondary" size="lg" onClick={() => location.assign('#contato')}>Vamos conversar</ButtonA>
          </div>
        </div>
        <div className="a-hero-aside" style={{ alignItems: 'flex-start' }}>
          <span className="pf-eyebrow muted"><span className="dash" />{PF.profile.years}</span>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: 'var(--text-body-md)', maxWidth: '40ch', textWrap: 'pretty' }}>
            {PF.profile.about}
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutA() {
  return (
    <section className="a-about pf-wrap pf-section pf-reveal" id="sobre">
      <div className="a-about-portrait pf-glass" style={{ padding: 0 }}>
        <img src={PF.profile.photo} alt={PF.profile.name} />
        <span className="ring" />
      </div>
      <div>
        <span className="pf-eyebrow"><span className="dash" />Sobre mim</span>
        <p className="pf-lead" style={{ marginTop: 22, marginBottom: 28, fontSize: 'clamp(22px, 2.6vw, 32px)' }}>
          Sou atraído pela <strong>funcionalidade das coisas</strong> — por que algo funciona, ou por que frustra.
        </p>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '54ch', textWrap: 'pretty' }}>
          {PF.profile.about}
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 28 }}>
          <TagA>{PF.profile.city}</TagA>
          <span style={{ color: 'var(--text-disabled)' }}>—</span>
          <TagA color="var(--text-secondary)">{PF.profile.years}</TagA>
        </div>
      </div>
    </section>
  );
}

function CaseA({ c, i }) {
  const flip = i % 2 === 1;
  const duo = c.id === 'carneiro';
  return (
    <article className={'a-case pf-reveal' + (flip ? ' flip' : '')}>
      <div className="a-case-visual pf-glass">
        <span className="scene" />
        {duo ? (
          <React.Fragment>
            <div className="a-case-shot"><img src={c.desktop} alt={c.name + ' — desktop'} /></div>
            <div className="a-case-phone"><img src={c.mobile} alt={c.name + ' — mobile'} /></div>
          </React.Fragment>
        ) : (
          <div className="a-case-shot" style={{ width: '88%', boxShadow: 'none' }}><img src={c.desktop} alt={c.name} /></div>
        )}
      </div>
      <div className="a-case-body pf-glass">
        <div>
          <div className="a-case-num">{c.index}</div>
          <span className="pf-eyebrow" style={{ marginTop: 14, display: 'inline-flex' }}>{c.role}</span>
          <h3 className="a-case-title">{c.name}</h3>
          <p className="a-case-desc">{c.desc}</p>
          <div className="a-case-tags">
            {c.tags.map((t) => <BadgeA key={t} tone="neutral">{t}</BadgeA>)}
          </div>
        </div>
        <div>
          <DividerA style={{ margin: '0 0 18px' }} />
          <div className="a-case-foot">
            <span className="a-case-meta"><b>{c.year}</b> · Estudo de caso</span>
            <ButtonA variant="link" iconRight={<ArrowA />} onClick={() => location.assign(c.href)}>Abrir case</ButtonA>
          </div>
        </div>
      </div>
    </article>
  );
}

function WorkA() {
  return (
    <section className="pf-wrap pf-section" id="trabalho">
      <div className="pf-head pf-reveal">
        <div>
          <span className="pf-eyebrow"><span className="dash" />Trabalho selecionado</span>
          <h2>Cases</h2>
        </div>
        <span className="pf-count">{String(PF.cases.length).padStart(2, '0')} projetos</span>
      </div>
      <div className="a-work-list">
        {PF.cases.map((c, i) => <CaseA key={c.id} c={c} i={i} />)}
      </div>
    </section>
  );
}

function SkillsA() {
  return (
    <section className="pf-wrap pf-section" id="skills">
      <div className="pf-head pf-reveal">
        <div>
          <span className="pf-eyebrow"><span className="dash" />Como eu trabalho</span>
          <h2>Hard skills</h2>
        </div>
      </div>
      <p className="pf-lead pf-reveal" style={{ maxWidth: '30ch', margin: '28px 0 0', fontSize: 'clamp(24px, 3vw, 40px)', color: 'var(--text-muted)', fontWeight: 'var(--fw-light)' }}>
        Do <strong>discovery contínuo</strong> ao processo <strong>end-to-end</strong>, partindo do problema antes da ferramenta.
      </p>
      <div className="a-timeline" style={{ marginTop: 'clamp(32px, 5vw, 56px)' }}>
        {PF.skills.map((s, i) => (
          <div className="a-tl-item pf-reveal" key={s.name}>
            <div className="a-tl-year" style={{ color: 'transparent', WebkitTextStroke: '1px var(--border-violet)' }}>{String(i + 1).padStart(2, '0')}</div>
            <div className="a-tl-c">
              <h4>{s.name}</h4>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
                {s.items.map((it) => <BadgeA key={it} tone="neutral">{it}</BadgeA>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TimelineA() {
  return (
    <section className="pf-wrap pf-section" id="experiencia">
      <div className="pf-head pf-reveal">
        <div>
          <span className="pf-eyebrow"><span className="dash" />Trajetória</span>
          <h2>Experiência</h2>
        </div>
        <span className="pf-count">2022 — 2026</span>
      </div>
      <div className="a-timeline">
        {PF.timeline.map((t) => (
          <div className="a-tl-item pf-reveal" key={t.year}>
            <div className="a-tl-year">{t.year}</div>
            <div className="a-tl-c">
              <h4>{t.title}{t.placeholder && <BadgeA tone="violet" style={{ marginLeft: 12, verticalAlign: 'middle' }}>exemplo</BadgeA>}</h4>
              <p>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactA() {
  return (
    <section className="pf-wrap pf-section a-contact" id="contato">
      <div className="pf-reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span className="pf-eyebrow"><span className="dash" />Contato</span>
        <h2>Quer melhorar seu produto?</h2>
        <div className="a-contact-cta">
          <ButtonA variant="primary" size="lg" iconRight={<ArrowA />} onClick={() => location.assign('mailto:' + PF.profile.email)}>Vamos conversar</ButtonA>
          <ButtonA variant="secondary" size="lg" onClick={() => window.open(PF.profile.linkedin, '_blank')}>LinkedIn</ButtonA>
        </div>
      </div>
      <div className="a-bigname pf-reveal" aria-hidden="true">{PF.profile.name}</div>
    </section>
  );
}

function FooterA() {
  const d = new Date();
  const date = d.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' });
  return (
    <footer className="pf-foot">
      <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
        <a href={'mailto:' + PF.profile.email}>{PF.profile.email}</a>
        <span className="pf-dot" />
        <a href={PF.profile.linkedin} target="_blank" rel="noopener">LinkedIn</a>
      </div>
      <div>© 2026 {PF.profile.name} · <span style={{ color: 'var(--text-disabled)' }}>{date}</span></div>
    </footer>
  );
}

function PortfolioA() {
  useReveal();
  return (
    <div className="pf-shell">
      <div className="pf-well" />
      <canvas className="pf-grid-canvas" data-de-grid></canvas>
      <div className="pf-veil" />
      <TopBarA />
      <HeroA />
      <AboutA />
      <WorkA />
      <SkillsA />
      <TimelineA />
      <ContactA />
      <FooterA />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PortfolioA />);
