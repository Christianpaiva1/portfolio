/* Hero — display decorado + retrato com anel giratório, blobs e adornos. */
const { Button: HBtn, Tag: HTag } = window.ColeMartinDesignSystem_3d34e7;

const StarGlyph = ({ cls }) =>
<svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 1.5c.4 5.2 1.3 9.1 10.5 10.5C13.3 13.4 12.4 17.3 12 22.5c-.4-5.2-1.3-9.1-10.5-10.5C10.7 10.6 11.6 6.7 12 1.5Z" />
  </svg>;


const ArrowDR = () =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10M7 17 17 7" /></svg>;


const PinIcon = () =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;


function Hero({ onNav }) {
  const CP = window.CP;
  const p = CP.profile;
  return (
    <section className="cp-hero" id="top" data-screen-label="Hero">
      <span className="cp-wash lav"></span>
      <span className="cp-wash amb"></span>

      <div className="cp-hero-inner">
        {/* ---- coluna de texto ---- */}
        <div className="cp-hero-left">
          <span className="cp-greet reveal" style={{ '--d': '60ms' }}>
            {p.greeting} <span className="wave">👋</span>
          </span>

          <h1 className="cp-title">
            <span className="ln"><span style={{ '--d': '120ms' }}>CHRIS<em className="cp-amber" style={{ fontStyle: 'normal' }}>T</em>IAN</span></span>
            <span className="ln"><span style={{ '--d': '240ms' }}>
              P
              <span className="cp-orb"><span className="cp-orb-a">A</span></span>
              IVA
            </span></span>
          </h1>

          <div className="cp-rolepill reveal" style={{ '--d': '300ms' }}>
            <span className="t">{p.role}</span>
            <span className="knob"><ArrowDR /></span>
          </div>

          <p className="cp-lead reveal" style={{ '--d': '360ms' }}>{p.statement}</p>

          <div className="cp-cta-row reveal" style={{ '--d': '440ms', marginTop: 28 }}>
            <HBtn variant="invert" size="lg"
            iconRight={<i data-lucide="arrow-up-right" style={{ width: 15, height: 15, strokeWidth: 1.5 }} />}
            onClick={() => onNav('trabalho')}>
              Veja meus trabalhos
            </HBtn>
            <a className="cp-scrollcue" href="#trabalho" onClick={(e) => {e.preventDefault();onNav('trabalho');}}>
              Role para explorar
              <span className="arr"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg></span>
            </a>
          </div>

          <div className="cp-hero-tags reveal" style={{ '--d': '520ms' }}>
            {CP.tags.map((t, i) =>
            <HTag key={t} variant={['lavender', 'amber', 'sage', 'outline', 'outline'][i % 5]}>{t}</HTag>
            )}
          </div>
        </div>

        {/* ---- retrato + adornos ---- */}
        <div className="cp-portrait-stage">
          <div className="cp-portrait">
            <img src={p.photo} alt={p.name} />
          </div>

          {/* anel giratório */}
          <div className="cp-ringbadge">
            <span className="disc"></span>
            <svg className="spinner" viewBox="0 0 100 100">
              <defs>
                <path id="cpRingPath" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text><textPath href="#cpRingPath" startOffset="0">{p.ring + p.ring}</textPath></text>
            </svg>
            <StarGlyph cls="star" />
          </div>

          {/* blobs */}
          <div className="cp-blob amber"><StarGlyph /> {p.availability}</div>
          <div className="cp-blob sage"><PinIcon /> {p.city}</div>

          {/* adornos */}
          <StarGlyph cls="cp-spark" />
          <StarGlyph cls="cp-spark amber" />
          <svg className="cp-squiggle" viewBox="0 0 80 16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M2 8c6-8 12 8 18 0s12 8 18 0 12 8 18 0 12 8 18 0" />
          </svg>
        </div>
      </div>
    </section>);

}

window.Hero = Hero;