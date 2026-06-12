/* Work — grid de cases, capas com wash tonal e links para os estudos. */
const { Tag: WTag } = window.ColeMartinDesignSystem_3d34e7;

function Work() {
  const CP = window.CP;
  return (
    <section className="cp-section" id="trabalho" data-screen-label="Trabalho" style={{ paddingTop: 24 }}>
      <div className="cp-wrap">
        <div className="cp-head reveal">
          <div>
            <span className="cp-eyebrow"><span className="ix">02</span><span className="dash"></span>Trabalho selecionado</span>
            <h2>Cases</h2>
          </div>
          <span className="cp-count">{String(CP.cases.length).padStart(2, '0')} projetos · 2024—2025</span>
        </div>

        <div className="cp-work-grid">
          {CP.cases.map((c, i) => (
            <a key={c.id} className="cp-case reveal" style={{ '--d': (i * 90) + 'ms' }} href={c.href}>
              <div className={'cp-case-cover ' + c.tone + ' fit-' + c.fit}>
                <span className="cp-case-num">{c.index}</span>
                <span className="cp-case-open"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10M7 17 17 7" /></svg></span>
                <img src={c.cover} alt={c.name} loading="lazy" />
              </div>
              <div className="cp-case-foot">
                <div>
                  <h3 className="cp-case-title">{c.name}</h3>
                  <p className="cp-case-desc">{c.desc}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 14 }}>
                    {c.tags.map((t) => <WTag key={t} variant="outline">{t}</WTag>)}
                  </div>
                </div>
                <div className="cp-case-meta">
                  <span className="yr">{c.year}</span>
                  <span className="rl">{c.role}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Work = Work;
