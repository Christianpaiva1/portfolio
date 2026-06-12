/* About — bloco "Sobre" editorial com painel de fatos em vidro. */
const { GlassPanel: ABGlass, Tag: ABTag } = window.ColeMartinDesignSystem_3d34e7;

function About() {
  const CP = window.CP;
  const p = CP.profile;
  return (
    <section className="cp-section" id="sobre" data-screen-label="Sobre">
      <div className="cp-wrap">
        <div className="cp-about-inner">
          <div className="reveal">
            <span className="cp-eyebrow"><span className="ix">01</span><span className="dash"></span>Sobre mim</span>
            <p className="cp-about-statement">
              Sou movido por <strong>curiosidade</strong>. Gosto de entender por que algo funciona, ou por que deixa a gente na mão.
            </p>
            <p className="cp-about-body" style={{ marginTop: 22, maxWidth: '52ch' }}>{p.about}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 26 }}>
              <ABTag variant="lavender">{p.role}</ABTag>
              <ABTag variant="outline">{p.seniority}</ABTag>
            </div>
          </div>

          <div className="reveal" style={{ '--d': '120ms' }}>
            <ABGlass radius="lg" innerStyle={{ padding: '30px 32px' }}>
              <div className="cp-about-facts">
                <div className="cp-fact"><span className="k">Localização</span><span className="v">{p.city}</span></div>
                <div className="cp-fact"><span className="k">Experiência</span><span className="v">{p.years}</span></div>
                <div className="cp-fact"><span className="k">Foco</span><span className="v">Pesquisa · Fluxo · UI</span></div>
                <div className="cp-fact"><span className="k">Disponibilidade</span><span className="v">{p.availability}</span></div>
              </div>
            </ABGlass>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
