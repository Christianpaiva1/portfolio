/* @ds-bundle: {"format":3,"namespace":"DigitalExperiencesDesignSystem_c7d186","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"83f2d41ae3cd","components/core/Button.jsx":"d394035436d1","components/core/Card.jsx":"7f39adf1d355","components/core/Divider.jsx":"12888aef1d1f","components/core/Input.jsx":"c65fb5bc862d","components/core/Tag.jsx":"362af4511797","ui_kits/feature-section/sections.jsx":"3f6b6bc311f3","ui_kits/feature-section/shims.jsx":"2b0ccece8414","webgl/grid-field.js":"b6b57fe8746c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DigitalExperiencesDesignSystem_c7d186 = window.DigitalExperiencesDesignSystem_c7d186 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small glass/accent pill for status and metadata.
 * Pill geometry, hairline or accent border, optional leading dot.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      color: 'var(--text-secondary)',
      borderColor: 'var(--glass-border)',
      background: 'var(--glass-fill-strong)',
      dot: 'var(--text-muted)'
    },
    violet: {
      color: 'var(--violet-300)',
      borderColor: 'var(--border-violet)',
      background: 'rgba(139,92,246,0.10)',
      dot: 'var(--violet-400)'
    },
    blue: {
      color: 'var(--blue-300)',
      borderColor: 'var(--border-blue)',
      background: 'rgba(59,130,246,0.10)',
      dot: 'var(--blue-400)'
    },
    signal: {
      color: 'var(--magenta-400)',
      borderColor: 'var(--border-signal)',
      background: 'rgba(217,70,239,0.10)',
      dot: 'var(--magenta-500)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: t.color,
      background: t.background,
      border: `1px solid ${t.borderColor}`,
      borderRadius: 'var(--radius-full)',
      padding: '5px 11px',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.dot,
      boxShadow: tone === 'signal' ? 'var(--shadow-signal-glow)' : 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Digital Experiences primary control.
 * Pill geometry, glass/violet variants, expressive hover (color + glow,
 * subtle press scale). Geometry mostly holds still per brand motion rules.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 12
    },
    md: {
      padding: '12px 22px',
      fontSize: 13
    },
    lg: {
      padding: '15px 28px',
      fontSize: 14
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-full)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-hover), transform var(--dur-instant) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard)',
    transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
    opacity: disabled ? 0.4 : 1,
    outline: 'none',
    whiteSpace: 'nowrap',
    ...sizes[size]
  };
  const variants = {
    primary: {
      backgroundColor: hover && !disabled ? 'var(--accent-strong)' : 'var(--accent)',
      color: 'var(--text-primary)',
      borderColor: 'transparent',
      boxShadow: hover && !disabled ? 'var(--shadow-violet-glow)' : 'none'
    },
    secondary: {
      backgroundColor: 'var(--glass-fill-strong)',
      color: 'var(--text-primary)',
      borderColor: hover && !disabled ? 'var(--accent-soft)' : 'var(--glass-border)',
      backdropFilter: 'blur(var(--blur-sm))',
      boxShadow: 'var(--shadow-inset-soft)'
    },
    signal: {
      backgroundColor: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--accent-signal)',
      borderWidth: 2,
      boxShadow: hover && !disabled ? 'var(--shadow-signal-glow)' : 'none'
    },
    link: {
      backgroundColor: 'transparent',
      color: hover && !disabled ? 'var(--text-primary)' : 'var(--text-link)',
      borderColor: 'transparent',
      borderRadius: 0,
      padding: 0,
      letterSpacing: '0.04em',
      textTransform: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — Digital Experiences glass surface.
 * Low-alpha fill, hairline border, generous radius, backdrop blur, inset
 * top highlight. Set `shell` for the premium 145° violet gradient frame.
 * Optional subtle 3D tilt on hover (the one geometry exception the brand allows).
 */
function Card({
  children,
  shell = false,
  tilt = false,
  padding = 'var(--pad-card-lg)',
  radius = 'var(--radius-xl)',
  style = {},
  ...rest
}) {
  const [t, setT] = React.useState({
    x: 0,
    y: 0
  });
  const handleMove = e => {
    if (!tilt) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({
      x: py * -6,
      y: px * 6
    });
  };
  const surface = {
    position: 'relative',
    background: 'var(--glass-fill)',
    border: '1px solid var(--glass-border)',
    borderRadius: radius,
    backdropFilter: 'blur(var(--blur-md))',
    WebkitBackdropFilter: 'blur(var(--blur-md))',
    boxShadow: 'var(--shadow-card)',
    padding,
    color: 'var(--text-primary)',
    transition: 'transform var(--dur-slow) var(--ease-emphasized), box-shadow var(--dur-expressive) var(--ease-emphasized)',
    transform: tilt ? `perspective(900px) rotateX(${t.x}deg) rotateY(${t.y}deg)` : 'none',
    transformStyle: 'preserve-3d',
    ...style
  };
  const inner = /*#__PURE__*/React.createElement("div", _extends({
    onMouseMove: handleMove,
    onMouseLeave: () => setT({
      x: 0,
      y: 0
    }),
    style: surface
  }, rest), children);
  if (!shell) return inner;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid transparent',
      borderRadius: `calc(${radius} + 3px)`,
      background: 'var(--shell-bg)',
      padding: 2
    }
  }, React.cloneElement(inner, {
    style: {
      ...surface,
      boxShadow: 'var(--shadow-inset-soft)'
    }
  }));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — a thin sheen line that fades in from the edges.
 * The brand's divider treatment (transparent → light → transparent),
 * available in neutral white or violet.
 */
function Divider({
  tone = 'neutral',
  vertical = false,
  style = {},
  ...rest
}) {
  const bg = tone === 'violet' ? 'var(--sheen-violet)' : 'var(--sheen-horizontal)';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: vertical ? {
      width: 1,
      alignSelf: 'stretch',
      background: `linear-gradient(180deg, transparent, ${tone === 'violet' ? 'var(--violet-300)' : 'rgba(255,255,255,0.2)'}, transparent)`,
      ...style
    } : {
      height: 1,
      width: '100%',
      background: bg,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — glass text field.
 * Hairline border that brightens to violet on focus; magenta signal glow
 * for the active/focused edge. 16px radius keeps it in the control DNA.
 */
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label-md)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 'var(--fw-light)',
      color: 'var(--text-primary)',
      background: 'var(--glass-fill)',
      border: `1px solid ${focus ? 'var(--accent-soft)' : 'var(--glass-border)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '13px 16px',
      outline: 'none',
      backdropFilter: 'blur(var(--blur-sm))',
      boxShadow: focus ? 'var(--shadow-signal-glow)' : 'var(--shadow-inset-soft)',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-expressive) var(--ease-emphasized)',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — the wide-tracked uppercase eyebrow label.
 * The brand's signature small-caps marker; often paired with an index
 * numeral ("01 — Structure"). Inline text, not a chip.
 */
function Tag({
  children,
  color = 'var(--text-accent)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-md)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 'var(--lh-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/feature-section/sections.jsx
try { (() => {
/* Feature Section — screen composition.
   Reads UI primitives from window.__DE_UI (real DS bundle when present,
   shims otherwise). Pure cosmetic recreation of the product surface. */
(function () {
  const R = window.React;
  const {
    useState,
    useEffect
  } = R;
  const h = R.createElement;
  const UI = window.__DE_UI;
  const {
    Button,
    Card,
    Tag,
    Badge,
    Input,
    Divider
  } = UI;
  const icons = () => {
    if (window.lucide) window.lucide.createIcons();
  };
  const Icon = (name, props = {}) => h('i', {
    'data-lucide': name,
    ...props
  });

  /* ---------------- Nav ---------------- */
  function Nav() {
    const links = ['Capabilities', 'System', 'Pricing', 'Docs'];
    return h('nav', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 40px',
        position: 'relative',
        zIndex: 5
      }
    }, h('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, h('div', {
      style: {
        width: 26,
        height: 26,
        borderRadius: 8,
        background: 'var(--shell-bg)',
        border: '1px solid transparent',
        display: 'grid',
        placeItems: 'center'
      }
    }, h('div', {
      style: {
        width: 9,
        height: 9,
        borderRadius: 3,
        background: 'var(--accent)',
        boxShadow: 'var(--shadow-violet-glow)'
      }
    })), h('span', {
      style: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
        fontSize: 16,
        color: 'var(--text-primary)'
      }
    }, 'Digital'), h('span', {
      style: {
        fontWeight: 300,
        letterSpacing: '-0.02em',
        fontSize: 16,
        color: 'var(--text-secondary)'
      }
    }, 'Experiences')), h('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 28
      }
    }, ...links.map(l => h(NavLink, {
      key: l,
      label: l
    }))), h('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, h(Badge, {
      tone: 'violet'
    }, 'Alpha'), h(Button, {
      variant: 'secondary',
      size: 'sm'
    }, 'Sign in'), h(Button, {
      variant: 'primary',
      size: 'sm'
    }, 'Get access')));
  }
  function NavLink({
    label
  }) {
    const [hover, setHover] = useState(false);
    return h('a', {
      href: '#',
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: '0.01em',
        textDecoration: 'none',
        color: hover ? 'var(--text-primary)' : 'var(--text-secondary)',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, label);
  }

  /* ---------------- Hero ---------------- */
  function Hero() {
    return h('header', {
      style: {
        position: 'relative',
        overflow: 'hidden',
        minHeight: 560,
        display: 'flex',
        flexDirection: 'column'
      }
    },
    // WebGL field
    h('div', {
      className: 'hero-field'
    }, h('canvas', {
      'data-de-grid': true,
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%'
      }
    })), h('div', {
      style: {
        position: 'relative',
        zIndex: 2,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px 24px 72px',
        maxWidth: 980,
        margin: '0 auto'
      }
    }, h(Badge, {
      tone: 'signal',
      dot: true,
      style: {
        marginBottom: 24
      }
    }, 'Premium Studio · v Alpha'), h('h1', {
      style: {
        fontSize: 'clamp(48px, 9vw, 120px)',
        lineHeight: 0.94,
        fontWeight: 700,
        letterSpacing: '-0.03em',
        margin: 0,
        color: 'var(--text-primary)'
      }
    }, 'Designed to highlight ', h('span', {
      className: 'grad'
    }, 'what matters')), h('p', {
      style: {
        fontSize: 18,
        fontWeight: 300,
        lineHeight: 1.5,
        color: 'var(--text-secondary)',
        maxWidth: 560,
        marginTop: 24
      }
    }, 'Reusable structure, responsive behavior, and production-ready presentation — built for component libraries and responsive product interfaces.'), h('div', {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 36
      }
    }, h(Button, {
      variant: 'primary',
      size: 'lg',
      iconRight: Icon('arrow-up-right')
    }, 'Explore the system'), h(Button, {
      variant: 'secondary',
      size: 'lg'
    }, 'See it in motion'))));
  }

  /* ---------------- Capabilities ---------------- */
  const CAPS = {
    Structure: [{
      i: '01',
      icon: 'layout-grid',
      t: 'Reusable structure',
      b: 'Composable sections that snap to a strict 4px grid and a full-bleed frame.'
    }, {
      i: '02',
      icon: 'layers',
      t: 'Layered depth',
      b: 'Glass surfaces, hairline borders, and inset light read as one material system.'
    }, {
      i: '03',
      icon: 'frame',
      t: 'Gradient shell',
      b: 'A 145° violet frame gives every hero card a premium hairline edge.'
    }],
    Responsive: [{
      i: '01',
      icon: 'monitor-smartphone',
      t: 'Fluid by default',
      b: 'Type and spacing scale from the same tokens across every breakpoint.'
    }, {
      i: '02',
      icon: 'move',
      t: 'Expressive motion',
      b: 'Layout and text transitions cluster at 550–700ms with emphasized easing.'
    }, {
      i: '03',
      icon: 'pointer',
      t: 'Pointer-aware',
      b: 'Subtle drift and tilt respond to the cursor without stealing focus.'
    }],
    Production: [{
      i: '01',
      icon: 'package-check',
      t: 'Production-ready',
      b: 'Tokens, components, and recipes ship as one indexed library.'
    }, {
      i: '02',
      icon: 'shield-check',
      t: 'Accessible motion',
      b: 'Everything degrades to a static poster frame under reduced-motion.'
    }, {
      i: '03',
      icon: 'git-branch',
      t: 'Versioned',
      b: 'Semantic aliases keep product code stable as the palette evolves.'
    }]
  };
  function Capabilities() {
    const tabs = Object.keys(CAPS);
    const [tab, setTab] = useState(tabs[0]);
    useEffect(icons, [tab]);
    return h('section', {
      style: {
        padding: '88px 40px',
        maxWidth: 1180,
        margin: '0 auto'
      }
    }, h('div', {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 24,
        marginBottom: 40
      }
    }, h('div', null, h(Tag, null, 'What\u2019s inside'), h('h2', {
      style: {
        fontSize: 'clamp(32px, 5vw, 56px)',
        fontWeight: 700,
        letterSpacing: '-0.025em',
        margin: '12px 0 0',
        color: 'var(--text-primary)'
      }
    }, 'Capabilities')), h('div', {
      style: {
        display: 'flex',
        gap: 8,
        background: 'var(--glass-fill)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-full)',
        padding: 4,
        backdropFilter: 'blur(var(--blur-sm))'
      }
    }, ...tabs.map(tname => h('button', {
      key: tname,
      onClick: () => setTab(tname),
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        padding: '9px 16px',
        borderRadius: 'var(--radius-full)',
        border: '1px solid transparent',
        transition: 'var(--transition-hover)',
        color: tab === tname ? 'var(--text-primary)' : 'var(--text-muted)',
        background: tab === tname ? 'var(--glass-fill-strong)' : 'transparent',
        boxShadow: tab === tname ? 'var(--shadow-inset-soft)' : 'none'
      }
    }, tname)))), h('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 14
      }
    }, ...CAPS[tab].map(c => h(CapCard, {
      key: c.i,
      ...c
    }))));
  }
  function CapCard({
    i,
    icon,
    t,
    b
  }) {
    return h(Card, {
      tilt: true,
      style: {
        minHeight: 260,
        display: 'flex',
        flexDirection: 'column'
      }
    }, h('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, h('div', {
      style: {
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-sm)',
        background: 'var(--glass-fill-strong)',
        border: '1px solid var(--glass-border)',
        display: 'grid',
        placeItems: 'center',
        color: 'var(--accent-soft)'
      }
    }, Icon(icon, {
      style: {
        width: 20,
        height: 20
      }
    })), h('span', {
      style: {
        fontSize: 40,
        fontWeight: 700,
        letterSpacing: '-0.04em',
        color: 'var(--glass-border)',
        lineHeight: 1
      }
    }, i)), h('h3', {
      style: {
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: '-0.01em',
        margin: '28px 0 0',
        color: 'var(--text-primary)'
      }
    }, t), h('p', {
      style: {
        fontSize: 14,
        fontWeight: 300,
        lineHeight: 1.55,
        color: 'var(--text-secondary)',
        marginTop: 10
      }
    }, b), h('div', {
      style: {
        flex: 1
      }
    }), h(Button, {
      variant: 'link',
      iconRight: Icon('arrow-right', {
        style: {
          width: 15,
          height: 15
        }
      })
    }, 'Learn more'));
  }

  /* ---------------- Metrics ---------------- */
  function Metrics() {
    const stats = [['134', 'Design tokens'], ['6', 'Core primitives'], ['40px', 'Max radius'], ['550ms', 'Signature timing']];
    return h('section', {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '0 40px'
      }
    }, h(Divider, {
      tone: 'violet'
    }), h('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 14,
        padding: '48px 0'
      }
    }, ...stats.map(([n, l]) => h('div', {
      key: l
    }, h('div', {
      style: {
        fontSize: 'clamp(40px, 6vw, 72px)',
        fontWeight: 700,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        color: 'var(--text-primary)'
      }
    }, n), h('div', {
      style: {
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginTop: 14
      }
    }, l)))), h(Divider));
  }

  /* ---------------- CTA ---------------- */
  function CTA() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);
    return h('section', {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '88px 40px 96px'
      }
    }, h(Card, {
      shell: true,
      radius: 'var(--radius-2xl)',
      padding: '64px 48px',
      style: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, h(Tag, null, 'Request access'), h('h2', {
      style: {
        fontSize: 'clamp(34px, 5vw, 64px)',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        margin: '14px 0 0',
        color: 'var(--text-primary)'
      }
    }, 'Built to ship.'), h('p', {
      style: {
        fontSize: 17,
        fontWeight: 300,
        color: 'var(--text-secondary)',
        maxWidth: 460,
        marginTop: 16
      }
    }, 'Join the alpha and put the system in front of your team this week.'), sent ? h('div', {
      style: {
        marginTop: 36,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: 'var(--grid-green)'
      }
    }, Icon('check-circle'), h('span', {
      style: {
        fontWeight: 500
      }
    }, 'You\u2019re on the list \u2014 watch your inbox.')) : h('form', {
      onSubmit: e => {
        e.preventDefault();
        if (email.trim()) setSent(true);
      },
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 36,
        width: '100%',
        maxWidth: 460
      }
    }, h('div', {
      style: {
        flex: 1
      }
    }, h(Input, {
      placeholder: 'you@studio.com',
      type: 'email',
      value: email,
      onChange: e => setEmail(e.target.value)
    })), h(Button, {
      variant: 'primary',
      size: 'lg'
    }, 'Join alpha'))));
  }

  /* ---------------- Footer ---------------- */
  function Footer() {
    return h('footer', {
      style: {
        borderTop: '1px solid var(--glass-border)',
        padding: '32px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16
      }
    }, h('span', {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        letterSpacing: '0.02em'
      }
    }, '\u00A9 2026 Digital Experiences \u2014 Premium Studio'), h('div', {
      style: {
        display: 'flex',
        gap: 18,
        color: 'var(--text-muted)'
      }
    }, ...['github', 'twitter', 'figma'].map(s => h('a', {
      key: s,
      href: '#',
      style: {
        color: 'inherit'
      }
    }, Icon(s, {
      style: {
        width: 18,
        height: 18
      }
    })))));
  }
  function App() {
    useEffect(icons, []);
    return h('div', {
      style: {
        fontFamily: 'var(--font-sans)'
      }
    }, h(Nav), h(Hero), h(Capabilities), h(Metrics), h(CTA), h(Footer));
  }
  window.__DE_FeatureSection = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/feature-section/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/feature-section/shims.jsx
try { (() => {
/* Fallback primitives for the Feature Section kit.
   In the Design System tab and in consuming projects the real components
   load from window.DigitalExperiencesDesignSystem_c7d186 (the compiled
   bundle). These compact shims only activate if that namespace is absent
   (e.g. a standalone preview), so the kit always renders. They mirror the
   real component styling. */
(function () {
  const R = window.React;
  function Button({
    children,
    variant = 'primary',
    size = 'md',
    disabled,
    iconRight,
    style = {},
    ...rest
  }) {
    const [h, setH] = R.useState(false);
    const sizes = {
      sm: {
        padding: '8px 16px',
        fontSize: 12
      },
      md: {
        padding: '12px 22px',
        fontSize: 13
      },
      lg: {
        padding: '15px 28px',
        fontSize: 14
      }
    };
    const variants = {
      primary: {
        background: h ? 'var(--accent-strong)' : 'var(--accent)',
        color: '#fff',
        boxShadow: h ? 'var(--shadow-violet-glow)' : 'none',
        border: '1px solid transparent'
      },
      secondary: {
        background: 'var(--glass-fill-strong)',
        color: '#fff',
        border: `1px solid ${h ? 'var(--accent-soft)' : 'var(--glass-border)'}`,
        backdropFilter: 'blur(var(--blur-sm))',
        boxShadow: 'var(--shadow-inset-soft)'
      },
      signal: {
        background: 'transparent',
        color: '#fff',
        border: '2px solid var(--accent-signal)',
        boxShadow: h ? 'var(--shadow-signal-glow)' : 'none'
      },
      link: {
        background: 'transparent',
        color: h ? '#fff' : 'var(--text-link)',
        border: '1px solid transparent',
        borderRadius: 0,
        padding: 0,
        letterSpacing: '0.04em',
        textTransform: 'none'
      }
    };
    return R.createElement('button', {
      type: 'button',
      disabled,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-full)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'var(--transition-hover)',
        whiteSpace: 'nowrap',
        ...sizes[size],
        ...variants[variant],
        ...style
      },
      ...rest
    }, children, iconRight);
  }
  function Card({
    children,
    shell,
    tilt,
    padding = 'var(--pad-card-lg)',
    radius = 'var(--radius-xl)',
    style = {},
    ...rest
  }) {
    const [t, setT] = R.useState({
      x: 0,
      y: 0
    });
    const surface = {
      position: 'relative',
      background: 'var(--glass-fill)',
      border: '1px solid var(--glass-border)',
      borderRadius: radius,
      backdropFilter: 'blur(var(--blur-md))',
      boxShadow: shell ? 'var(--shadow-inset-soft)' : 'var(--shadow-card)',
      padding,
      color: 'var(--text-primary)',
      transition: 'transform var(--dur-slow) var(--ease-emphasized)',
      transform: tilt ? `perspective(900px) rotateX(${t.x}deg) rotateY(${t.y}deg)` : 'none',
      ...style
    };
    const move = e => {
      if (!tilt) return;
      const r = e.currentTarget.getBoundingClientRect();
      setT({
        x: ((e.clientY - r.top) / r.height - 0.5) * -6,
        y: ((e.clientX - r.left) / r.width - 0.5) * 6
      });
    };
    const inner = R.createElement('div', {
      onMouseMove: move,
      onMouseLeave: () => setT({
        x: 0,
        y: 0
      }),
      style: surface,
      ...rest
    }, children);
    if (!shell) return inner;
    return R.createElement('div', {
      style: {
        border: '1px solid transparent',
        borderRadius: `calc(${radius} + 3px)`,
        background: 'var(--shell-bg)',
        padding: 2
      }
    }, inner);
  }
  function Tag({
    children,
    color = 'var(--text-accent)',
    style = {}
  }) {
    return R.createElement('span', {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-label-md)',
        fontWeight: 600,
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color,
        ...style
      }
    }, children);
  }
  function Badge({
    children,
    tone = 'neutral',
    dot,
    style = {}
  }) {
    const tones = {
      neutral: {
        color: 'var(--text-secondary)',
        bc: 'var(--glass-border)',
        bg: 'var(--glass-fill-strong)',
        d: 'var(--text-muted)'
      },
      violet: {
        color: 'var(--violet-300)',
        bc: 'var(--border-violet)',
        bg: 'rgba(139,92,246,0.10)',
        d: 'var(--violet-400)'
      },
      blue: {
        color: 'var(--blue-300)',
        bc: 'var(--border-blue)',
        bg: 'rgba(59,130,246,0.10)',
        d: 'var(--blue-400)'
      },
      signal: {
        color: 'var(--magenta-400)',
        bc: 'var(--border-signal)',
        bg: 'rgba(217,70,239,0.10)',
        d: 'var(--magenta-500)'
      }
    }[tone];
    return R.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: tones.color,
        background: tones.bg,
        border: `1px solid ${tones.bc}`,
        borderRadius: 'var(--radius-full)',
        padding: '5px 11px',
        ...style
      }
    }, dot && R.createElement('span', {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: tones.d
      }
    }), children);
  }
  function Input({
    label,
    placeholder,
    type = 'text',
    value,
    onChange,
    style = {}
  }) {
    const [f, setF] = R.useState(false);
    return R.createElement('label', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontFamily: 'var(--font-sans)'
      }
    }, label && R.createElement('span', {
      style: {
        fontSize: 'var(--text-label-md)',
        fontWeight: 600,
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--text-secondary)'
      }
    }, label), R.createElement('input', {
      type,
      value,
      placeholder,
      onChange,
      onFocus: () => setF(true),
      onBlur: () => setF(false),
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 300,
        color: '#fff',
        background: 'var(--glass-fill)',
        border: `1px solid ${f ? 'var(--accent-soft)' : 'var(--glass-border)'}`,
        borderRadius: 'var(--radius-sm)',
        padding: '13px 16px',
        outline: 'none',
        boxShadow: f ? 'var(--shadow-signal-glow)' : 'var(--shadow-inset-soft)',
        transition: 'var(--transition-hover)',
        ...style
      }
    }));
  }
  function Divider({
    tone = 'neutral',
    vertical,
    style = {}
  }) {
    const bg = tone === 'violet' ? 'var(--sheen-violet)' : 'var(--sheen-horizontal)';
    return R.createElement('div', {
      role: 'separator',
      style: vertical ? {
        width: 1,
        alignSelf: 'stretch',
        background: `linear-gradient(180deg, transparent, ${tone === 'violet' ? 'var(--violet-300)' : 'rgba(255,255,255,0.2)'}, transparent)`,
        ...style
      } : {
        height: 1,
        width: '100%',
        background: bg,
        ...style
      }
    });
  }
  window.DEKitShims = {
    Button,
    Card,
    Tag,
    Badge,
    Input,
    Divider
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/feature-section/shims.jsx", error: String((e && e.message) || e) }); }

// webgl/grid-field.js
try { (() => {
/* ============================================================
   Digital Experiences — WebGL Perspective Grid Field
   Signature ambient motif: an inset 3D accent. A green-on-black
   perspective grid receding into depth, breathing on a slow
   pulse, drifting subtly toward the pointer.

   Usage — load the Three.js UMD global first, then this script:
     <canvas data-de-grid></canvas>
     <script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
     <script src="grid-field.js"></script>

   Three.js is read from the global `window.THREE` (no ESM import, so the
   design-system bundler never has to resolve the package). If THREE or
   WebGL is unavailable the canvas keeps any CSS background you set
   (provide a DOM fallback).
   ============================================================ */

(function () {
  const THREE = window.THREE;
  const GRID_GREEN = 0x1fe0a0;
  function initGridField(canvas) {
    // ---- Capability / dependency / motion guards ----
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!THREE) {
      canvas.setAttribute('data-de-grid-fallback', '');
      return; // Three.js global missing — DOM/CSS fallback remains visible
    }
    let gl;
    try {
      gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    } catch (e) {
      gl = null;
    }
    if (!gl) {
      canvas.setAttribute('data-de-grid-fallback', '');
      return; // DOM/CSS fallback remains visible
    }
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 14, 46);
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / Math.max(1, canvas.clientHeight), 0.1, 1000);
    camera.position.set(0, 6, 24);
    camera.lookAt(0, 0, -6);
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    function resize() {
      const w = canvas.clientWidth || canvas.parentElement.clientWidth;
      const h = canvas.clientHeight || canvas.parentElement.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / Math.max(1, h);
      camera.updateProjectionMatrix();
    }

    // ---- Build the grid as line segments on the XZ plane ----
    const EXTENT = 40; // half-width / depth in world units
    const SPACING = 2; // sparse spacing
    const positions = [];
    for (let i = -EXTENT; i <= EXTENT; i += SPACING) {
      // lines running along Z (depth)
      positions.push(i, 0, -EXTENT, i, 0, EXTENT);
      // lines running along X (width)
      positions.push(-EXTENT, 0, i, EXTENT, 0, i);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const mat = new THREE.LineBasicMaterial({
      color: GRID_GREEN,
      transparent: true,
      opacity: 0.55
    });
    const grid = new THREE.LineSegments(geo, mat);
    grid.position.y = -2;
    scene.add(grid);

    // A second, fainter elevated grid for layered depth
    const grid2 = new THREE.LineSegments(geo, mat.clone());
    grid2.material.opacity = 0.12;
    grid2.position.y = 6;
    grid2.rotation.x = Math.PI; // mirror overhead
    scene.add(grid2);

    // ---- Pointer drift (subtle) ----
    const pointer = {
      x: 0,
      y: 0
    };
    const target = {
      x: 0,
      y: 0
    };
    function onMove(e) {
      const r = canvas.getBoundingClientRect();
      const cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      const cy = (e.touches ? e.touches[0].clientY : e.clientY) - r.top;
      target.x = (cx / r.width - 0.5) * 2;
      target.y = (cy / r.height - 0.5) * 2;
    }
    window.addEventListener('pointermove', onMove, {
      passive: true
    });

    // ---- Animation: slow breathing pulse + drift ----
    const clock = new THREE.Clock();
    let raf;
    function frame() {
      const t = clock.getElapsedTime();
      // breathing: opacity + gentle vertical bob
      const breath = (Math.sin(t * 0.8) + 1) / 2; // 0..1, ~8s-ish feel
      grid.material.opacity = 0.35 + breath * 0.30;
      grid.position.y = -2 + Math.sin(t * 0.5) * 0.3;
      if (!reduceMotion) {
        pointer.x += (target.x - pointer.x) * 0.04;
        pointer.y += (target.y - pointer.y) * 0.04;
        camera.position.x = pointer.x * 2.2;
        camera.position.y = 6 - pointer.y * 1.4;
        camera.lookAt(0, 0, -6);
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    }
    resize();
    window.addEventListener('resize', resize);
    if (reduceMotion) {
      renderer.render(scene, camera); // static poster frame
    } else {
      frame();
    }

    // Pause when offscreen / tab hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduceMotion) {
        frame();
      }
    });
  }
  function boot() {
    document.querySelectorAll('canvas[data-de-grid]').forEach(initGridField);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
  window.initGridField = initGridField;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "webgl/grid-field.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

})();
