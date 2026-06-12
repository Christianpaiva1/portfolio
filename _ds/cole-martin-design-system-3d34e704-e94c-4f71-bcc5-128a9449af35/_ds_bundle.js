/* @ds-bundle: {"format":3,"namespace":"ColeMartinDesignSystem_3d34e7","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"GlassPanel","sourcePath":"components/surfaces/GlassPanel.jsx"}],"sourceHashes":{"components/core/Button.jsx":"80ca62ec60a5","components/core/IconButton.jsx":"71a6fb5cd231","components/core/StatusPill.jsx":"93d122ee70d7","components/core/Tag.jsx":"f2b72f328cf8","components/forms/Input.jsx":"e3a37c8c4942","components/surfaces/Card.jsx":"f4b2201b9723","components/surfaces/GlassPanel.jsx":"23de1f8e8c8b","ui_kits/portfolio/Approach.jsx":"65b60d9a852d","ui_kits/portfolio/Contact.jsx":"fcbe476775cf","ui_kits/portfolio/Header.jsx":"acbd6ae01629","ui_kits/portfolio/Hero.jsx":"daf6b3b9d225","ui_kits/portfolio/WorkGrid.jsx":"d24883318860"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ColeMartinDesignSystem_3d34e7 = window.ColeMartinDesignSystem_3d34e7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Cole Martin Design System
 * Mono label, controlled radius. Primary is a white pill on the warm
 * canvas; link is an underline-on-hover text action; invert is for
 * black inversion sections.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  disabled = false,
  onClick,
  type = "button",
  style = {},
  ...rest
}) {
  const pads = {
    sm: "8px 16px",
    md: "12px 22px",
    lg: "16px 28px"
  };
  const fontSizes = {
    sm: "11px",
    md: "12px",
    lg: "13px"
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "var(--font-mono)",
    fontWeight: 700,
    fontSize: fontSizes[size] || "12px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    lineHeight: 1,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    border: "1px solid transparent",
    transition: "background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), opacity var(--dur-base) var(--ease-standard)",
    whiteSpace: "nowrap",
    textDecoration: "none"
  };
  const variants = {
    primary: {
      ...base,
      padding: pads[size],
      borderRadius: "var(--radius-full)",
      background: "var(--cm-white)",
      color: "#111827",
      boxShadow: "var(--shadow-sm)"
    },
    invert: {
      ...base,
      padding: pads[size],
      borderRadius: "var(--radius-full)",
      background: "var(--cm-ink)",
      color: "var(--cm-white)"
    },
    glass: {
      ...base,
      padding: pads[size],
      borderRadius: "var(--radius-full)",
      background: "var(--glass-bg)",
      borderColor: "rgba(255,255,255,0.7)",
      color: "var(--cm-ink)",
      backdropFilter: "blur(var(--blur-glass))",
      WebkitBackdropFilter: "blur(var(--blur-glass))",
      boxShadow: "var(--shadow-soft)"
    },
    link: {
      ...base,
      padding: "0",
      borderRadius: "var(--radius-md, 0px)",
      background: "transparent",
      color: "#111827",
      borderBottom: "1px solid currentColor",
      paddingBottom: "2px"
    }
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === "primary") e.currentTarget.style.background = "var(--cm-paper)";else if (variant === "invert") e.currentTarget.style.background = "#2A2A2A";else if (variant === "glass") e.currentTarget.style.background = "rgba(255,255,255,0.75)";else if (variant === "link") e.currentTarget.style.opacity = "0.6";
  };
  const onLeave = e => {
    if (disabled) return;
    if (variant === "primary") e.currentTarget.style.background = "var(--cm-white)";else if (variant === "invert") e.currentTarget.style.background = "var(--cm-ink)";else if (variant === "glass") e.currentTarget.style.background = "var(--glass-bg)";else if (variant === "link") e.currentTarget.style.opacity = "1";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    style: {
      ...variants[variant],
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — Cole Martin Design System
 * A circular control wrapping a single linear (Lucide/Solar) icon.
 * Pass the icon name; it renders a Lucide <i data-lucide> node which
 * the host page hydrates with lucide.createIcons().
 */
function IconButton({
  icon = "arrow-up-right",
  variant = "glass",
  size = "md",
  label = "button",
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size] || 40;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${d}px`,
    height: `${d}px`,
    borderRadius: "var(--radius-full)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    color: "var(--cm-ink)",
    transition: "background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)",
    padding: 0
  };
  const variants = {
    glass: {
      ...base,
      background: "var(--glass-bg)",
      borderColor: "rgba(255,255,255,0.7)",
      backdropFilter: "blur(var(--blur-glass))",
      WebkitBackdropFilter: "blur(var(--blur-glass))",
      boxShadow: "var(--shadow-soft)"
    },
    solid: {
      ...base,
      background: "var(--cm-white)",
      boxShadow: "var(--shadow-sm)"
    },
    invert: {
      ...base,
      background: "var(--cm-ink)",
      color: "var(--cm-white)"
    },
    ghost: {
      ...base,
      background: "transparent",
      borderColor: "var(--cm-border-3)"
    }
  };
  const iconPx = {
    sm: 16,
    md: 18,
    lg: 20
  }[size] || 18;
  const onEnter = e => {
    if (disabled) return;
    if (variant === "invert") e.currentTarget.style.background = "#2A2A2A";else if (variant === "ghost") e.currentTarget.style.background = "var(--cm-paper)";else e.currentTarget.style.background = "rgba(255,255,255,0.85)";
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    style: {
      ...variants[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: iconPx,
      height: iconPx,
      strokeWidth: 1.5
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusPill — Cole Martin Design System
 * A bracketed availability indicator with a pulsing dot. Reads like a
 * spec-sheet status: [ OPEN FOR PROJECTS ].
 */
function StatusPill({
  children = "Open for projects",
  tone = "sage",
  style = {},
  ...rest
}) {
  const dotColor = {
    sage: "var(--cm-sage)",
    amber: "var(--cm-amber)",
    lavender: "var(--cm-lavender)",
    ink: "var(--cm-ink)"
  }[tone] || "var(--cm-sage)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "11px",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--cm-ink)",
      padding: "7px 12px",
      borderRadius: "var(--radius-full)",
      border: "1px solid var(--cm-border-3)",
      background: "var(--glass-bg)",
      backdropFilter: "blur(var(--blur-glass))",
      WebkitBackdropFilter: "blur(var(--blur-glass))",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "7px",
      height: "7px",
      borderRadius: "9999px",
      background: dotColor,
      boxShadow: `0 0 0 0 ${dotColor}`,
      animation: "cmPulse 1.8s var(--ease-standard) infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, "["), children, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, "]"), /*#__PURE__*/React.createElement("style", null, `@keyframes cmPulse {
        0% { box-shadow: 0 0 0 0 ${dotColor}55; }
        70% { box-shadow: 0 0 0 6px ${dotColor}00; }
        100% { box-shadow: 0 0 0 0 ${dotColor}00; }
      }`));
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — Cole Martin Design System
 * A small mono label chip used for categories, tech, and metadata.
 * `outline` is the default hairline pill; tonal variants use 20% accent
 * washes so they stay quiet against the canvas.
 */
function Tag({
  children,
  variant = "outline",
  style = {},
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: "var(--font-mono)",
    fontWeight: 700,
    fontSize: "11px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    lineHeight: 1,
    padding: "6px 10px",
    borderRadius: "var(--radius-full)",
    border: "1px solid transparent",
    color: "var(--cm-ink)",
    whiteSpace: "nowrap"
  };
  const variants = {
    outline: {
      ...base,
      background: "transparent",
      borderColor: "var(--cm-border-3)"
    },
    solid: {
      ...base,
      background: "var(--cm-ink)",
      color: "var(--cm-white)"
    },
    lavender: {
      ...base,
      background: "var(--cm-lavender-20)",
      borderColor: "rgba(167,156,255,0.4)"
    },
    amber: {
      ...base,
      background: "var(--cm-amber-20)",
      borderColor: "rgba(244,185,66,0.45)"
    },
    sage: {
      ...base,
      background: "var(--cm-sage-20)",
      borderColor: "rgba(136,201,153,0.45)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — Cole Martin Design System
 * A mono text field with a wide-tracked uppercase label. Hairline
 * border that shifts to lavender on focus. Pairs with Button in forms
 * and the contact/footer block.
 */
function Input({
  label,
  hint,
  type = "text",
  placeholder = "",
  value,
  defaultValue,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? `cm-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "11px",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--cm-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "14px",
      lineHeight: "20px",
      color: "var(--cm-ink)",
      background: disabled ? "var(--cm-border-1)" : "var(--cm-white)",
      border: `1px solid ${focused ? "var(--cm-lavender)" : "var(--cm-border-3)"}`,
      boxShadow: focused ? "0 0 0 3px var(--cm-lavender-20)" : "none",
      borderRadius: "var(--radius-sm)",
      padding: "12px 14px",
      outline: "none",
      transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      width: "100%",
      boxSizing: "border-box"
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      color: "var(--color-text-muted)",
      letterSpacing: "0.02em"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — Cole Martin Design System
 * The brand's content surface. `plain` is a white grid card; `amber`
 * and `sage` are the signature organic-blob accent cards; `glass` is a
 * frosted panel. Hover lifts gently (shadow + 2px rise), motion only.
 */
function Card({
  children,
  variant = "plain",
  interactive = false,
  style = {},
  ...rest
}) {
  const base = {
    position: "relative",
    padding: "var(--pad-card-lg)",
    boxSizing: "border-box",
    transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)"
  };
  const variants = {
    plain: {
      ...base,
      background: "var(--cm-white)",
      border: "1px solid var(--cm-border-2)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-soft)"
    },
    glass: {
      ...base,
      background: "var(--glass-bg)",
      border: "1px solid rgba(255,255,255,0.7)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-soft)",
      backdropFilter: "blur(var(--blur-glass))",
      WebkitBackdropFilter: "blur(var(--blur-glass))"
    },
    amber: {
      ...base,
      background: "var(--cm-amber)",
      color: "var(--cm-ink)",
      borderRadius: "var(--radius-blob-1)",
      border: "none"
    },
    sage: {
      ...base,
      background: "var(--cm-sage)",
      color: "var(--cm-ink)",
      borderRadius: "var(--radius-blob-2)",
      border: "none"
    },
    invert: {
      ...base,
      background: "var(--cm-ink)",
      color: "var(--cm-white)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid #2A2A2A"
    }
  };
  const onEnter = e => {
    if (!interactive) return;
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "var(--shadow-lift)";
  };
  const onLeave = e => {
    if (!interactive) return;
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = variants[variant].boxShadow || "none";
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    style: {
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlassPanel — Cole Martin Design System
 * The signature gradient-shell wrapper. A 1px gradient frame
 * (lavender-20 → paper → amber-20) around a frosted inner surface, so
 * the edge reads as a premium hairline. Use for hero panels / featured
 * blocks. `radius` accepts "lg" (32px) or "full" (pill).
 */
function GlassPanel({
  children,
  radius = "lg",
  style = {},
  innerStyle = {},
  ...rest
}) {
  const outerR = radius === "full" ? "var(--radius-full)" : "var(--radius-lg)";
  const innerR = radius === "full" ? "calc(var(--radius-full) - 1px)" : "calc(var(--radius-lg) - 1px)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "1px",
      borderRadius: outerR,
      background: "var(--gradient-shell)",
      boxShadow: "var(--shadow-soft)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: innerR,
      background: "var(--glass-bg)",
      backdropFilter: "blur(var(--blur-glass))",
      WebkitBackdropFilter: "blur(var(--blur-glass))",
      padding: "var(--pad-card-lg)",
      height: "100%",
      boxSizing: "border-box",
      ...innerStyle
    }
  }, children));
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Approach.jsx
try { (() => {
/* Approach — the brand's signature FEATURE SECTION, on a black
   inversion background so the pastel accents pop. Three value points
   built from blob + glass cards. */
const {
  Card,
  GlassPanel,
  Tag
} = window.ColeMartinDesignSystem_3d34e7;
const FEATURES = [{
  icon: "layout-grid",
  title: "Systems first",
  body: "Reusable structure before ornament. Tokens, components, and a grid that scales.",
  variant: "amber"
}, {
  icon: "sparkles",
  title: "Production-ready",
  body: "Designs that ship — responsive behavior and real states, not just happy paths.",
  variant: "sage"
}, {
  icon: "circle-dot",
  title: "Calm by default",
  body: "Quiet interfaces. Moderate motion, soft glass depth, nothing shouting.",
  variant: "glass"
}];
function FeatureCard({
  f
}) {
  const dark = f.variant === "glass";
  const extra = {
    minHeight: 230,
    display: "flex",
    flexDirection: "column",
    gap: 16,
    color: dark ? "var(--cm-white)" : "var(--cm-ink)"
  };
  if (dark) {
    extra.background = "rgba(255,255,255,0.06)";
    extra.border = "1px solid rgba(255,255,255,0.14)";
    extra.backdropFilter = "blur(var(--blur-glass))";
    extra.WebkitBackdropFilter = "blur(var(--blur-glass))";
  }
  return /*#__PURE__*/React.createElement(Card, {
    variant: f.variant,
    interactive: true,
    style: extra
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      borderRadius: "9999px",
      background: dark ? "rgba(255,255,255,0.1)" : "rgba(26,26,26,0.12)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": f.icon,
    style: {
      width: 22,
      height: 22,
      strokeWidth: 1.5,
      color: dark ? "var(--cm-white)" : "var(--cm-ink)"
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 28,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      margin: "auto 0 0"
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      lineHeight: "20px",
      margin: 0,
      color: dark ? "rgba(255,255,255,0.75)" : "var(--cm-ink-soft)"
    }
  }, f.body));
}
function Approach() {
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    style: {
      background: "var(--cm-black)",
      padding: "96px 32px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 360,
      height: 360,
      borderRadius: "9999px",
      background: "var(--cm-lavender)",
      opacity: 0.22,
      filter: "blur(80px)",
      top: -60,
      right: 120,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 16,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cm-label",
    style: {
      color: "var(--cm-amber)"
    }
  }, "02"), /*#__PURE__*/React.createElement("span", {
    className: "cm-label",
    style: {
      color: "rgba(255,255,255,0.6)"
    }
  }, "How I work")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(40px,7vw,88px)",
      lineHeight: 0.92,
      letterSpacing: "-0.04em",
      textTransform: "uppercase",
      color: "var(--cm-white)",
      margin: "0 0 48px",
      maxWidth: 820
    }
  }, "Reusable structure,", /*#__PURE__*/React.createElement("br", null), "responsive by default."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, FEATURES.map(f => /*#__PURE__*/React.createElement(FeatureCard, {
    key: f.title,
    f: f
  })))));
}
window.Approach = Approach;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Approach.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
/* Contact — closing feature section with a contact form inside a
   gradient-shell glass panel, plus footer. */
const {
  Input,
  Button,
  GlassPanel,
  StatusPill,
  IconButton
} = window.ColeMartinDesignSystem_3d34e7;
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: "96px 32px 48px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 300,
      height: 300,
      borderRadius: "9999px",
      background: "var(--cm-amber)",
      opacity: 0.16,
      filter: "blur(70px)",
      bottom: 40,
      left: 80,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "cm-label",
    style: {
      color: "var(--cm-lavender)"
    }
  }, "03 \u2014 Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(44px,6vw,84px)",
      lineHeight: 0.9,
      letterSpacing: "-0.04em",
      textTransform: "uppercase",
      color: "var(--cm-ink)",
      margin: "16px 0 24px"
    }
  }, "Let's build", /*#__PURE__*/React.createElement("br", null), "something."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 15,
      lineHeight: "24px",
      color: "var(--cm-ink-soft)",
      maxWidth: 420,
      margin: "0 0 24px"
    }
  }, "Have a product that needs a feature section, a system, or a fresh pair of eyes? Tell me about it."), /*#__PURE__*/React.createElement(StatusPill, {
    tone: "sage"
  }, "Open for projects")), /*#__PURE__*/React.createElement(GlassPanel, {
    radius: "lg",
    innerStyle: {
      padding: "28px"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      padding: "20px 0"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle",
    style: {
      width: 32,
      height: 32,
      strokeWidth: 1.5,
      color: "var(--cm-sage)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "cm-h3",
    style: {
      color: "var(--cm-ink)",
      margin: 0
    }
  }, "Message sent"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--cm-ink-soft)",
      margin: 0
    }
  }, "I'll reply within a day. Thanks for reaching out.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Project",
    placeholder: "What are we building?"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-up-right",
      style: {
        width: 15,
        height: 15,
        strokeWidth: 1.5
      }
    })
  }, "Send message")))), /*#__PURE__*/React.createElement("footer", {
    style: {
      maxWidth: 1180,
      margin: "64px auto 0",
      paddingTop: 24,
      borderTop: "1px solid var(--cm-border-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cm-label",
    style: {
      color: "var(--color-text-muted)"
    }
  }, "\xA9 2026 Cole Martin \u2014 Product Designer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "mail",
    variant: "ghost",
    size: "sm",
    label: "Email"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "figma",
    variant: "ghost",
    size: "sm",
    label: "Figma"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "linkedin",
    variant: "ghost",
    size: "sm",
    label: "LinkedIn"
  }))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Header.jsx
try { (() => {
/* Header — fixed glass top bar with logo, nav, status + CTA */
const {
  Button,
  StatusPill
} = window.ColeMartinDesignSystem_3d34e7;
function Header({
  onNav
}) {
  const links = [["work", "Work"], ["features", "Approach"], ["about", "About"], ["contact", "Contact"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 32px",
      background: "rgba(249,248,245,0.7)",
      backdropFilter: "blur(var(--blur-glass))",
      WebkitBackdropFilter: "blur(var(--blur-glass))",
      borderBottom: "1px solid var(--cm-border-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "20px",
      letterSpacing: "-0.04em",
      color: "var(--cm-ink)",
      border: "1px solid var(--cm-ink)",
      borderRadius: "9999px",
      width: "38px",
      height: "38px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "CM"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--cm-ink)"
    }
  }, "Cole Martin")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "26px"
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    onClick: e => {
      e.preventDefault();
      onNav && onNav(id);
    },
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--cm-ink)",
      textDecoration: "none",
      opacity: 0.7,
      transition: "opacity var(--dur-base) var(--ease-standard)"
    },
    onMouseEnter: e => e.currentTarget.style.opacity = "1",
    onMouseLeave: e => e.currentTarget.style.opacity = "0.7"
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-hide-sm"
  }, /*#__PURE__*/React.createElement(StatusPill, {
    tone: "sage"
  }, "Open for projects")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav && onNav("contact")
  }, "Start a project")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
/* Hero — oversized display statement on the warm canvas with a
   gradient-shell glass panel and floating accent blobs. */
const {
  Button,
  StatusPill,
  GlassPanel,
  Tag
} = window.ColeMartinDesignSystem_3d34e7;
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "96px 32px 72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 320,
      height: 320,
      borderRadius: "9999px",
      background: "var(--cm-lavender)",
      opacity: 0.18,
      filter: "blur(60px)",
      top: -40,
      left: -40,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 280,
      height: 280,
      borderRadius: "9999px",
      background: "var(--cm-amber)",
      opacity: 0.16,
      filter: "blur(60px)",
      top: 120,
      right: 60,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cm-label",
    style: {
      color: "var(--cm-ink)"
    }
  }, "Product Designer"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--cm-border-3)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "cm-label",
    style: {
      color: "var(--color-text-muted)"
    }
  }, "Est. 2019 \u2014 SF")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(64px, 12vw, 168px)",
      lineHeight: 0.88,
      letterSpacing: "-0.05em",
      textTransform: "uppercase",
      color: "var(--cm-ink)",
      margin: 0
    }
  }, "Cole", /*#__PURE__*/React.createElement("br", null), "Martin", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cm-lavender)"
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 32,
      marginTop: 40,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "16px",
      lineHeight: "26px",
      color: "var(--cm-ink-soft)",
      maxWidth: 520,
      margin: 0
    }
  }, "I design calm, useful software \u2014 from first principles to polished, production-ready interfaces. Currently building feature sections and component systems for product teams."), /*#__PURE__*/React.createElement(GlassPanel, {
    radius: "lg",
    innerStyle: {
      padding: "20px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    tone: "sage"
  }, "Open for projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-up-right",
      style: {
        width: 15,
        height: 15,
        strokeWidth: 1.5
      }
    }),
    onClick: () => onNav && onNav("contact")
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "glass",
    onClick: () => onNav && onNav("work")
  }, "See work")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 32,
      flexWrap: "wrap"
    }
  }, ["Product strategy", "Design systems", "Prototyping", "Webflow", "Figma"].map((t, i) => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    variant: ["lavender", "amber", "sage", "outline", "outline"][i]
  }, t)))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkGrid.jsx
try { (() => {
/* WorkGrid — selected work as a full-bleed strong grid of cards.
   First card is a featured glass panel; the rest are plain cards with
   hover lift and an open-arrow icon button. */
const {
  Card,
  IconButton,
  Tag
} = window.ColeMartinDesignSystem_3d34e7;
const PROJECTS = [{
  n: "01",
  title: "Atlas",
  blurb: "Design system + feature sections for a data platform.",
  tags: ["System", "2026"],
  tone: "lavender"
}, {
  n: "02",
  title: "Hearth",
  blurb: "Onboarding redesign for a home-finance app.",
  tags: ["Product", "iOS"],
  tone: "amber"
}, {
  n: "03",
  title: "Field Notes",
  blurb: "Editorial CMS + reading experience.",
  tags: ["Web", "CMS"],
  tone: "sage"
}, {
  n: "04",
  title: "Loop",
  blurb: "Realtime collaboration prototype.",
  tags: ["Proto"],
  tone: "lavender"
}];
function WorkCard({
  p
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    interactive: true,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cm-label",
    style: {
      color: "var(--color-text-muted)"
    }
  }, p.n, " \u2014 Case study"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-up-right",
    variant: "ghost",
    size: "sm",
    label: "Open " + p.title
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 34,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "var(--cm-ink)",
      margin: "auto 0 0"
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      lineHeight: "19px",
      color: "var(--cm-ink-soft)",
      margin: 0
    }
  }, p.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, p.tags.map((t, i) => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    variant: i === 0 ? p.tone : "outline"
  }, t))));
}
function WorkGrid() {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      padding: "72px 32px",
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cm-label",
    style: {
      color: "var(--cm-lavender)"
    }
  }, "01"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 52,
      lineHeight: 1,
      letterSpacing: "-0.04em",
      textTransform: "uppercase",
      color: "var(--cm-ink)",
      margin: 0
    }
  }, "Selected work")), /*#__PURE__*/React.createElement("span", {
    className: "cm-label",
    style: {
      color: "var(--color-text-muted)"
    }
  }, "4 of 12")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 16
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(WorkCard, {
    key: p.n,
    p: p
  }))));
}
window.WorkGrid = WorkGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

})();
