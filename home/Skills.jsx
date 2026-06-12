/* Skills — Hard skills em lista editorial (rótulo + frase + linhas). */
function Skills() {
  const CP = window.CP;
  return (
    <section className="cp-section" id="skills" data-screen-label="Skills">
      <div className="cp-wrap">
        <div className="cp-skills-grid">
          <div className="cp-skills-aside reveal">
            <span className="cp-eyebrow"><span className="ix">03</span><span className="dash"></span>Hard Skills</span>
          </div>

          <div className="cp-skills-main">
            <p className="cp-skills-headline reveal">
              Do <strong>discovery contínuo</strong> ao processo <strong>end-to-end</strong>, partindo do problema antes da ferramenta.
            </p>

            <div className="cp-skill-rows">
              {CP.skills.map((s, i) => (
                <div className="cp-skill-row reveal" key={s.name} style={{ '--d': (i * 70) + 'ms' }}>
                  <span className="cp-skill-ic"><i data-lucide={s.icon}></i></span>
                  <span className="cp-skill-name">{s.name}</span>
                  <span className="cp-skill-items">
                    {s.items.map((it) => <span key={it}>{it}</span>)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Skills = Skills;
