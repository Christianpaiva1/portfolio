/* Menu — topo de vidro fixo, indicador ativo deslizante. */
const { Button: CMButton, StatusPill: CMStatusPill } = window.ColeMartinDesignSystem_3d34e7;

function Menu({ active, onNav }) {
  const CP = window.CP;
  const navRef = React.useRef(null);
  const indRef = React.useRef(null);
  const linkRefs = React.useRef({});

  const moveTo = (id) => {
    const link = linkRefs.current[id];
    const ind = indRef.current;
    const nav = navRef.current;
    if (!link || !ind || !nav) return;
    const lr = link.getBoundingClientRect();
    const nr = nav.getBoundingClientRect();
    ind.style.left = (lr.left - nr.left + lr.width / 2) + 'px';
    ind.style.width = Math.min(lr.width, 22) + 'px';
    ind.classList.add('show');
  };

  React.useEffect(() => { moveTo(active); }, [active]);
  React.useEffect(() => {
    const onResize = () => moveTo(active);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  return (
    <header className="cp-menu" data-screen-label="Menu">
      <a href="#top" className="cp-brand" onClick={(e) => { e.preventDefault(); onNav('top'); }}>
        <span className="mark">CP</span>
        <span className="who">{CP.profile.name}</span>
      </a>

      <nav className="cp-nav" ref={navRef}
        onMouseLeave={() => moveTo(active)}>
        {CP.nav.map(([id, label]) => (
          <a key={id} href={'#' + id}
            ref={(el) => { linkRefs.current[id] = el; }}
            className={active === id ? 'active' : ''}
            onMouseEnter={() => moveTo(id)}
            onClick={(e) => { e.preventDefault(); onNav(id); }}>
            {label}
          </a>
        ))}
        <span className="ind" ref={indRef}></span>
      </nav>

      <div className="cp-menu-right">
        <span className="cp-statuspill-sm">
          <CMStatusPill tone="sage" style={{ whiteSpace: 'nowrap' }}>{CP.profile.availability}</CMStatusPill>
        </span>
        <CMButton variant="invert" size="sm"
          iconRight={<i data-lucide="arrow-up-right" style={{ width: 14, height: 14, strokeWidth: 1.5 }} />}
          onClick={() => onNav('contato')}>
          Vamos conversar
        </CMButton>
      </div>
    </header>
  );
}

window.Menu = Menu;
