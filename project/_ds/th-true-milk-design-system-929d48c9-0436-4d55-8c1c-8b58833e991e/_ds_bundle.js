/* @ds-bundle: {"format":3,"namespace":"THTrueMILKDesignSystem_929d48","components":[{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"PriceTag","sourcePath":"components/core/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/core/ProductCard.jsx"},{"name":"QtyStepper","sourcePath":"components/core/QtyStepper.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Alert.jsx":"3fb916930ca9","components/core/Avatar.jsx":"21507f84e8e5","components/core/Badge.jsx":"45c831050a38","components/core/Button.jsx":"ed3c24f4f6e5","components/core/Card.jsx":"5d3c89963545","components/core/Checkbox.jsx":"513386273635","components/core/IconButton.jsx":"08aa26e27988","components/core/Input.jsx":"bb884dd7c0ee","components/core/Logo.jsx":"3a8b48d05aeb","components/core/PriceTag.jsx":"94236a00eaa8","components/core/ProductCard.jsx":"126e198de49a","components/core/QtyStepper.jsx":"009504733da1","components/core/Rating.jsx":"0bf5dc64a47f","components/core/SectionHeading.jsx":"094540327ecc","components/core/Switch.jsx":"ecbae5e43cf7","components/core/Tabs.jsx":"75b4aed80dc9","components/core/Tag.jsx":"d382ba72a73f","ui_kits/th-brand/Site.jsx":"b9dea35a0b91","ui_kits/th-true-mart/App.jsx":"8d9dad58f1d3","ui_kits/th-true-mart/CartDrawer.jsx":"0f4db8a02403","ui_kits/th-true-mart/Footer.jsx":"7f661b7fc0b0","ui_kits/th-true-mart/Header.jsx":"38c87e58bb16","ui_kits/th-true-mart/Home.jsx":"e983d546eb7c","ui_kits/th-true-mart/ProductView.jsx":"e3b2a0ced80b","ui_kits/th-true-mart/data.js":"ac70f5d77ee6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.THTrueMILKDesignSystem_929d48 = window.THTrueMILKDesignSystem_929d48 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Alert.jsx
try { (() => {
/**
 * TH true MILK — Alert
 * Inline message banner with semantic tone.
 */
function Alert({
  children,
  title,
  tone = "info",
  onClose,
  style = {}
}) {
  const map = {
    info: {
      bg: "var(--info-bg)",
      bar: "var(--info)",
      fg: "var(--sky-700)"
    },
    success: {
      bg: "var(--success-bg)",
      bar: "var(--success)",
      fg: "var(--green-700)"
    },
    warning: {
      bg: "var(--warning-bg)",
      bar: "var(--warning)",
      fg: "var(--gold-800)"
    },
    error: {
      bg: "var(--error-bg)",
      bar: "var(--error)",
      fg: "var(--error)"
    }
  };
  const c = map[tone] || map.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      background: c.bg,
      borderRadius: "var(--radius-md)",
      borderLeft: "4px solid " + c.bar,
      padding: "14px 16px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      color: c.fg,
      fontSize: "var(--text-sm)",
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      lineHeight: 1.5
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontSize: 18,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alert.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
/**
 * TH true MILK — Avatar
 * Circular user/brand avatar with image or initials fallback.
 */
function Avatar({
  src,
  name = "",
  size = 40,
  ring = false,
  style = {}
}) {
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      background: "var(--navy-100)",
      color: "var(--navy-700)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: size * 0.4,
      flex: "none",
      border: ring ? "2px solid var(--gold-500)" : "none",
      boxShadow: ring ? "0 0 0 2px var(--white) inset" : "none",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "TH");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TH true MILK — Badge
 * Small status/marketing label. Soft tinted by default.
 */
function Badge({
  children,
  tone = "navy",
  solid = false,
  style = {},
  ...rest
}) {
  const map = {
    navy: {
      bg: "var(--navy-100)",
      fg: "var(--navy-800)",
      sbg: "var(--navy-700)"
    },
    gold: {
      bg: "var(--gold-100)",
      fg: "var(--gold-800)",
      sbg: "var(--gold-600)"
    },
    sky: {
      bg: "var(--sky-100)",
      fg: "var(--sky-700)",
      sbg: "var(--sky-500)"
    },
    green: {
      bg: "var(--green-100)",
      fg: "var(--green-700)",
      sbg: "var(--green-500)"
    },
    error: {
      bg: "var(--error-bg)",
      fg: "var(--error)",
      sbg: "var(--error)"
    },
    neutral: {
      bg: "var(--neutral-100)",
      fg: "var(--neutral-700)",
      sbg: "var(--neutral-600)"
    }
  };
  const c = map[tone] || map.navy;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "3px 11px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--text-xs)",
      lineHeight: 1.4,
      letterSpacing: "0.02em",
      borderRadius: "var(--radius-pill)",
      background: solid ? c.sbg : c.bg,
      color: solid ? "var(--white)" : c.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TH true MILK — Button
 * Rounded, friendly, premium. Navy is the primary; gold is the
 * premium accent (use sparingly); outline/ghost for secondary actions.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  pill = true,
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0 16px",
      height: 36,
      fontSize: "0.875rem",
      gap: 7
    },
    md: {
      padding: "0 22px",
      height: 44,
      fontSize: "0.9375rem",
      gap: 8
    },
    lg: {
      padding: "0 30px",
      height: 54,
      fontSize: "1.0625rem",
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-medium)",
    fontSize: s.fontSize,
    lineHeight: 1,
    letterSpacing: "0.01em",
    border: "1.5px solid transparent",
    borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    opacity: disabled ? 0.5 : 1
  };
  const variants = {
    primary: {
      background: "var(--navy-700)",
      color: "var(--white)",
      boxShadow: "var(--shadow-sm)"
    },
    secondary: {
      background: "var(--gold-500)",
      color: "var(--navy-900)",
      boxShadow: "var(--shadow-sm)"
    },
    outline: {
      background: "transparent",
      color: "var(--navy-700)",
      borderColor: "var(--navy-700)"
    },
    ghost: {
      background: "transparent",
      color: "var(--navy-700)"
    },
    fresh: {
      background: "var(--sky-500)",
      color: "var(--white)",
      boxShadow: "var(--shadow-sm)"
    }
  };
  const v = variants[variant] || variants.primary;
  const hover = {
    primary: (e, on) => {
      e.currentTarget.style.background = on ? "var(--navy-800)" : "var(--navy-700)";
    },
    secondary: (e, on) => {
      e.currentTarget.style.background = on ? "var(--gold-600)" : "var(--gold-500)";
    },
    outline: (e, on) => {
      e.currentTarget.style.background = on ? "var(--navy-50)" : "transparent";
    },
    ghost: (e, on) => {
      e.currentTarget.style.background = on ? "var(--navy-50)" : "transparent";
    },
    fresh: (e, on) => {
      e.currentTarget.style.background = on ? "var(--sky-600)" : "var(--sky-500)";
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) hover[variant]?.(e, true);
    },
    onMouseLeave: e => {
      if (!disabled) hover[variant]?.(e, false);
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.98)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TH true MILK — Card
 * White surface, hairline border, soft navy-tinted shadow, rounded.
 */
function Card({
  children,
  padded = true,
  hover = false,
  style = {},
  ...rest
}) {
  const [lift, setLift] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setLift(true),
    onMouseLeave: () => hover && setLift(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      boxShadow: lift ? "var(--shadow-lg)" : "var(--shadow-sm)",
      padding: padded ? "var(--space-5)" : 0,
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      transform: lift ? "translateY(-3px)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TH true MILK — Checkbox
 * Rounded square checkbox with navy fill when checked.
 */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      border: "1.5px solid " + (checked ? "var(--navy-700)" : "var(--border-strong)"),
      background: checked ? "var(--navy-700)" : "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--dur-base) var(--ease-out)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L5 8.7L9.5 3.5",
    stroke: "white",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TH true MILK — IconButton
 * Square/circular icon-only button. Pass a node (e.g. a Lucide <i> or svg).
 */
function IconButton({
  children,
  variant = "ghost",
  size = "md",
  round = true,
  disabled = false,
  "aria-label": ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 34,
    md: 42,
    lg: 50
  }[size] || 42;
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--navy-700)"
    },
    soft: {
      background: "var(--navy-50)",
      color: "var(--navy-700)"
    },
    solid: {
      background: "var(--navy-700)",
      color: "var(--white)"
    },
    gold: {
      background: "var(--gold-100)",
      color: "var(--gold-800)"
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dims,
      height: dims,
      border: "none",
      borderRadius: round ? "var(--radius-pill)" : "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && variant === "ghost") e.currentTarget.style.background = "var(--navy-50)";
    },
    onMouseLeave: e => {
      if (!disabled && variant === "ghost") e.currentTarget.style.background = "transparent";
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.92)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TH true MILK — Input
 * Text field with optional label, leading icon, and helper/error text.
 */
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  size = "md",
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = {
    sm: 38,
    md: 46,
    lg: 54
  }[size] || 46;
  const inputId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const borderColor = error ? "var(--error)" : focus ? "var(--navy-700)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-medium)",
      color: "var(--navy-900)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      height: h,
      padding: "0 16px",
      background: "var(--white)",
      border: "1.5px solid " + borderColor,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      display: "inline-flex"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--navy-900)",
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: error ? "var(--error)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TH true MILK — Logo
 * Renders the official TH lockup as an <img> (never re-typeset the
 * serif "TH" by hand). Choose the variant for the background.
 */
function Logo({
  variant = "primary",
  height = 44,
  base = "",
  alt = "TH true MILK",
  style = {},
  ...rest
}) {
  const files = {
    primary: "assets/logo-th-primary.png",
    white: "assets/logo-th-white-gold-flower.png",
    "white-solid": "assets/logo-th-white.png",
    mark: "assets/flower-mark-gold.png",
    "mark-white": "assets/flower-mark-white.png",
    "mark-navy": "assets/flower-mark-navy.png"
  };
  const src = (base ? base.replace(/\/$/, "") + "/" : "") + (files[variant] || files.primary);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/PriceTag.jsx
try { (() => {
/**
 * TH true MILK — PriceTag
 * Formats Vietnamese đồng prices with optional strikethrough original.
 */
function fmt(n) {
  return new Intl.NumberFormat("vi-VN").format(n) + "₫";
}
function PriceTag({
  price,
  original,
  size = "md",
  style = {}
}) {
  const sizes = {
    sm: "var(--text-sm)",
    md: "var(--text-md)",
    lg: "var(--text-xl)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 8,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: sizes[size] || sizes.md,
      color: "var(--navy-700)"
    }
  }, fmt(price)), original != null && original > price && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-faint)",
      textDecoration: "line-through"
    }
  }, fmt(original)));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/core/QtyStepper.jsx
try { (() => {
/**
 * TH true MILK — QtyStepper
 * Minus / value / plus control for cart quantities.
 */
function QtyStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  size = "md",
  style = {}
}) {
  const h = {
    sm: 34,
    md: 42
  }[size] || 42;
  const set = v => {
    const n = Math.max(min, Math.min(max, v));
    onChange && onChange(n);
  };
  const btn = {
    width: h,
    height: h,
    border: "none",
    background: "transparent",
    color: "var(--navy-700)",
    fontSize: 18,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--radius-pill)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      border: "1.5px solid var(--border-strong)",
      borderRadius: "var(--radius-pill)",
      background: "var(--white)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Decrease",
    style: {
      ...btn,
      opacity: value <= min ? 0.4 : 1
    },
    onClick: () => set(value - 1),
    disabled: value <= min
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 30,
      textAlign: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--text-base)",
      color: "var(--navy-900)"
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Increase",
    style: {
      ...btn,
      opacity: value >= max ? 0.4 : 1
    },
    onClick: () => set(value + 1),
    disabled: value >= max
  }, "+"));
}
Object.assign(__ds_scope, { QtyStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/QtyStepper.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
/**
 * TH true MILK — Rating
 * Gold star rating display (and optional input).
 */
function Rating({
  value = 0,
  max = 5,
  size = 18,
  count,
  onRate,
  style = {}
}) {
  const Star = ({
    fill,
    i
  }) => /*#__PURE__*/React.createElement("span", {
    onClick: () => onRate && onRate(i + 1),
    style: {
      cursor: onRate ? "pointer" : "default",
      lineHeight: 1,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.4l-5.8 3.05 1.1-6.47L2.6 9.35l6.5-.95L12 2.5z",
    fill: fill ? "var(--gold-500)" : "var(--neutral-200)",
    stroke: fill ? "var(--gold-600)" : "var(--neutral-300)",
    strokeWidth: "0.8"
  })));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 2
    }
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement(Star, {
    key: i,
    i: i,
    fill: i < Math.round(value)
  }))), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginLeft: 4
    }
  }, value.toFixed(1), " (", count, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/core/ProductCard.jsx
try { (() => {
/**
 * TH true MILK — ProductCard
 * Retail product tile: image (or branded placeholder), flags, name,
 * rating, price, add-to-cart. Composes PriceTag / Badge / Rating.
 */
function ProductCard({
  name,
  image,
  price,
  original,
  badge,
  badgeTone = "green",
  rating,
  ratingCount,
  base = "",
  onAdd,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const markSrc = (base ? base.replace(/\/$/, "") + "/" : "") + "assets/flower-mark-navy.png";
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--white)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: hover ? "translateY(-3px)" : "none",
      transition: "all var(--dur-base) var(--ease-out)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1 / 1",
      background: "linear-gradient(160deg, var(--sky-50), var(--navy-50))",
      display: "grid",
      placeItems: "center"
    }
  }, badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone,
    solid: true
  }, badge)), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "",
    style: {
      width: "42%",
      opacity: 0.18
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: "var(--text-base)",
      fontWeight: "var(--fw-medium)",
      color: "var(--navy-900)",
      lineHeight: 1.35
    }
  }, name), rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: ratingCount,
    size: 15
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    price: price,
    original: original
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Add " + name + " to cart",
    onClick: onAdd,
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      border: "none",
      background: "var(--navy-700)",
      color: "var(--white)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      fontSize: 20,
      transition: "background var(--dur-base) var(--ease-out)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--navy-800)",
    onMouseLeave: e => e.currentTarget.style.background = "var(--navy-700)"
  }, "+"))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * TH true MILK — SectionHeading
 * Eyebrow + title + optional lead, used to open marketing sections.
 */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  mark = false,
  base = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === "center" ? 680 : "none",
      margin: align === "center" ? "0 auto" : 0,
      ...style
    }
  }, mark && /*#__PURE__*/React.createElement("img", {
    src: (base ? base.replace(/\/$/, "") + "/" : "") + "assets/flower-mark-gold.png",
    alt: "",
    style: {
      height: 34,
      marginBottom: 12,
      display: align === "center" ? "block" : "inline-block",
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0
    }
  }), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--gold-700)",
      marginBottom: 10
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-2xl)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--navy-700)",
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-muted)",
      margin: "14px 0 0",
      maxWidth: 620,
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/**
 * TH true MILK — Switch
 * Rounded toggle; navy track when on.
 */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 44,
      height: 26,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--navy-700)" : "var(--neutral-300)",
      position: "relative",
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "var(--white)",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-base) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/**
 * TH true MILK — Tabs
 * Underline-style tab bar. Controlled via value/onChange.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  const active = value != null ? value : tabs[0] && tabs[0].id;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1.5px solid var(--border)",
      ...style
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange && onChange(t.id),
      style: {
        position: "relative",
        border: "none",
        background: "transparent",
        padding: "12px 18px 14px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-base)",
        fontWeight: on ? "var(--fw-bold)" : "var(--fw-medium)",
        color: on ? "var(--navy-700)" : "var(--text-muted)",
        transition: "color var(--dur-base) var(--ease-out)"
      }
    }, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 12,
        right: 12,
        bottom: -1.5,
        height: 3,
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--gold-500)" : "transparent",
        transition: "background var(--dur-base) var(--ease-out)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TH true MILK — Tag
 * Selectable/removable chip used for filters and categories.
 */
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  style = {},
  ...rest
}) {
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "7px 14px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-medium)",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid " + (selected ? "var(--navy-700)" : "var(--border-strong)"),
      background: selected ? "var(--navy-700)" : "var(--white)",
      color: selected ? "var(--white)" : "var(--navy-700)",
      cursor: interactive ? "pointer" : "default",
      transition: "all var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "inherit",
      fontSize: 15,
      lineHeight: 1,
      padding: 0,
      opacity: 0.7,
      display: "inline-flex"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/th-brand/Site.jsx
try { (() => {
// TH brand — marketing site (single scrolling page)
const TH = window.THTrueMILKDesignSystem_929d48;
const {
  Button: SB,
  SectionHeading: SH,
  Logo: SL,
  Badge: SBadge
} = TH;
function Nav({
  base
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "22px 24px",
      display: "flex",
      alignItems: "center",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(SL, {
    variant: "white",
    base: base,
    height: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      marginLeft: 20,
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 500,
      color: "rgba(255,255,255,.9)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#products",
    style: {
      color: "inherit"
    }
  }, "Products"), /*#__PURE__*/React.createElement("a", {
    href: "#farms",
    style: {
      color: "inherit"
    }
  }, "Our farms"), /*#__PURE__*/React.createElement("a", {
    href: "#story",
    style: {
      color: "inherit"
    }
  }, "Our story"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Sustainability")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(SB, {
    variant: "secondary",
    size: "md",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "shopping-bag",
      style: {
        width: 17,
        height: 17
      }
    })
  }, "Shop TH true mart"))));
}
function Hero({
  base
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      overflow: "hidden",
      minHeight: 640,
      display: "flex",
      alignItems: "center",
      background: "radial-gradient(120% 120% at 80% 10%, var(--navy-700), var(--navy-900) 70%)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "/assets/flower-mark-white.png",
    alt: "",
    style: {
      position: "absolute",
      right: "-4%",
      top: "8%",
      width: 560,
      opacity: 0.09
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1240,
      margin: "0 auto",
      padding: "120px 24px 80px",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginBottom: 22
    }
  }, "TH \u2014 True Happiness"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 68,
      lineHeight: 1.02,
      letterSpacing: "-.03em",
      margin: "0 0 24px"
    }
  }, "Truly natural.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-300)"
    }
  }, "In every drop.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 20,
      lineHeight: 1.55,
      color: "rgba(255,255,255,.84)",
      margin: "0 0 36px",
      maxWidth: 540
    }
  }, "Fresh, clean milk and food \u2014 completely from nature, made on TH's own hi-tech farms for the true happiness of every Vietnamese family."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SB, {
    variant: "secondary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "Discover our products"), /*#__PURE__*/React.createElement(SB, {
    variant: "ghost",
    size: "lg",
    style: {
      color: "#fff",
      border: "1.5px solid rgba(255,255,255,.4)"
    },
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "play",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "Watch our story")))));
}
const PILLARS = [{
  icon: "sparkles",
  t: "Fresh",
  d: "From pasture to glass through a closed cold-chain — milk at its freshest."
}, {
  icon: "droplets",
  t: "Clean",
  d: "Nothing it doesn't need. Pure, safe and tested to international standards."
}, {
  icon: "leaf",
  t: "From nature",
  d: "Completely from nature — the natural essence kept intact in every product."
}, {
  icon: "heart-handshake",
  t: "For Vietnamese stature",
  d: "Nourishing the body and mind of generations to come."
}];
function Pillars({
  base
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "84px 24px"
    }
  }, /*#__PURE__*/React.createElement(SH, {
    align: "center",
    mark: true,
    base: base,
    eyebrow: "Why TH",
    title: "Four promises in every product",
    lead: "The values that guide everything we farm, make and deliver."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20,
      marginTop: 44
    }
  }, PILLARS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      background: "var(--white)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: "28px 24px",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 999,
      background: "var(--navy-50)",
      color: "var(--navy-700)",
      display: "grid",
      placeItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.icon,
    style: {
      width: 25,
      height: 25
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--navy-900)",
      margin: "0 0 8px"
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: 0
    }
  }, p.d)))));
}
const FAMILY = [{
  t: "TH true MILK",
  d: "Fresh & UHT milk",
  tone: "var(--sky-50)"
}, {
  t: "TH true YOGURT",
  d: "Natural & drinking yogurt",
  tone: "var(--navy-50)"
}, {
  t: "TH true NUT",
  d: "Macadamia, almond, oat",
  tone: "var(--green-50)"
}, {
  t: "TH true JUICE",
  d: "Fruit & milk-fruit drinks",
  tone: "var(--gold-100)"
}, {
  t: "TH true WATER",
  d: "Purified water",
  tone: "var(--sky-50)"
}, {
  t: "TOPKID",
  d: "Milk made for children",
  tone: "var(--gold-100)"
}];
function Family({
  base
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "products",
    style: {
      background: "var(--white)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "84px 24px"
    }
  }, /*#__PURE__*/React.createElement(SH, {
    eyebrow: "Our brands",
    title: "One true family",
    lead: "A growing ecosystem of natural, low- and no-added-sugar food and drink.",
    base: base
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginTop: 40
    }
  }, FAMILY.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      background: f.tone,
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border)",
      padding: "22px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      flex: "none",
      borderRadius: "var(--radius-md)",
      background: "var(--white)",
      display: "grid",
      placeItems: "center",
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "/assets/flower-mark-navy.png",
    alt: "",
    style: {
      width: 32,
      opacity: 0.4
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--navy-900)",
      margin: "0 0 3px"
    }
  }, f.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13.5,
      color: "var(--text-muted)",
      margin: 0
    }
  }, f.d)))))));
}
function Farms({
  base
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "farms",
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "84px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/3",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      background: "linear-gradient(150deg, var(--green-100), var(--sky-100))",
      display: "grid",
      placeItems: "center",
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "/assets/flower-mark-navy.png",
    alt: "",
    style: {
      width: "30%",
      opacity: 0.22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 16,
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, "Farm photography placeholder")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SH, {
    eyebrow: "Completely from nature",
    title: "From our hi-tech farms to your table",
    base: base,
    lead: "TH's herds graze on closed-loop, world-standard farms in Ngh\u1EC7 An. A fully controlled process \u2014 from feed and welfare to milking and processing \u2014 keeps every drop fresh, clean and pure."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      marginTop: 28
    }
  }, [["45,000+", "dairy cows"], ["100%", "fresh milk"], ["0g", "added sugar lines"]].map(s => /*#__PURE__*/React.createElement("div", {
    key: s[1]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 34,
      color: "var(--navy-700)",
      letterSpacing: "-.02em"
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13.5,
      color: "var(--text-muted)"
    }
  }, s[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(SB, {
    variant: "outline",
    size: "md",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 17,
        height: 17
      }
    })
  }, "Explore our farms")))));
}
function Quote({
  base
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "story",
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(135deg, var(--navy-800), var(--navy-900))",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "/assets/flower-mark-gold.png",
    alt: "",
    style: {
      position: "absolute",
      left: "50%",
      top: 40,
      transform: "translateX(-50%)",
      width: 64,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: "0 auto",
      padding: "120px 24px 96px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 38,
      lineHeight: 1.3,
      letterSpacing: "-.01em",
      margin: "0 0 28px"
    }
  }, "\u201CWe are committed to becoming a world-class producer of clean food \u2014", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-300)"
    }
  }, " completely from nature"), ".\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.65)"
    }
  }, "TH Group \xB7 Vision & Mission")));
}
function CTA({
  base
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "80px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-2xl)",
      background: "var(--gold-gradient)",
      padding: "56px 56px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 36,
      color: "var(--navy-900)",
      margin: "0 0 8px",
      letterSpacing: "-.02em"
    }
  }, "Taste the difference of true."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      color: "var(--navy-800)",
      margin: 0
    }
  }, "Shop fresh milk, yogurt and more \u2014 delivered cold to your door.")), /*#__PURE__*/React.createElement(SB, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "Shop TH true mart")));
}
function SiteFooter({
  base
}) {
  const cols = [{
    h: "Products",
    links: ["TH true MILK", "TH true YOGURT", "TH true NUT", "TH true JUICE", "TOPKID"]
  }, {
    h: "About TH",
    links: ["Our story", "Hi-tech farms", "Vision & mission", "Sustainability", "Careers"]
  }, {
    h: "Connect",
    links: ["TH true mart", "Store locator", "Newsroom", "Contact us"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--navy-900)",
      color: "rgba(255,255,255,.78)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "/assets/flower-mark-white.png",
    alt: "",
    style: {
      position: "absolute",
      right: -40,
      bottom: -60,
      width: 340,
      opacity: 0.06
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1240,
      margin: "0 auto",
      padding: "56px 24px 28px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SL, {
    variant: "white",
    base: base,
    height: 42
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.6,
      margin: "18px 0 0",
      maxWidth: 280
    }
  }, "Fresh, clean milk and food, completely from nature \u2014 for the true happiness of every Vietnamese family.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      margin: "0 0 16px"
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,.78)",
      fontFamily: "var(--font-sans)",
      fontSize: 14
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgba(255,255,255,.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "18px 24px",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "rgba(255,255,255,.55)"
    }
  }, "\xA9 2026 TH Group \xB7 True Happiness. A recreation for design-system demonstration.")));
}
function THSite({
  base = "../.."
}) {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    base: base
  }), /*#__PURE__*/React.createElement(Hero, {
    base: base
  }), /*#__PURE__*/React.createElement(Pillars, {
    base: base
  }), /*#__PURE__*/React.createElement(Family, {
    base: base
  }), /*#__PURE__*/React.createElement(Farms, {
    base: base
  }), /*#__PURE__*/React.createElement(Quote, {
    base: base
  }), /*#__PURE__*/React.createElement(CTA, {
    base: base
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    base: base
  }));
}
window.THSite = THSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/th-brand/Site.jsx", error: String((e && e.message) || e) }); }

// ui_kits/th-true-mart/App.jsx
try { (() => {
// TH true mart — App shell (wires state + views)
const {
  Toast
} = window; // not used; placeholder

function MartApp({
  base = "../.."
}) {
  const data = window.TH_DATA;
  const [category, setCategory] = React.useState("all");
  const [query, setQuery] = React.useState("");
  const [view, setView] = React.useState({
    name: "home"
  });
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [flash, setFlash] = React.useState(null);
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  const filtered = data.products.filter(p => !query || p.name.toLowerCase().includes(query.toLowerCase()));
  function addToCart(p, qty = 1) {
    setCart(c => {
      const ex = c.find(it => it.id === p.id);
      if (ex) return c.map(it => it.id === p.id ? {
        ...it,
        qty: it.qty + qty
      } : it);
      return [...c, {
        id: p.id,
        name: p.name,
        price: p.price,
        qty
      }];
    });
    setFlash(p.name);
    setTimeout(() => setFlash(null), 2200);
  }
  const setQty = (id, v) => setCart(c => c.map(it => it.id === id ? {
    ...it,
    qty: v
  } : it));
  const removeItem = id => setCart(c => c.filter(it => it.id !== id));
  const cartCount = cart.reduce((s, it) => s + it.qty, 0);
  const openProduct = p => {
    setView({
      name: "product",
      product: p
    });
    window.scrollTo({
      top: 0
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(window.MartHeader, {
    cartCount: cartCount,
    onCart: () => setCartOpen(true),
    query: query,
    onQuery: v => {
      setQuery(v);
      setView({
        name: "home"
      });
    },
    category: category,
    onCategory: c => {
      setCategory(c);
      setView({
        name: "home"
      });
    },
    categories: data.categories,
    base: base
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      width: "100%",
      maxWidth: 1240,
      margin: "0 auto",
      padding: "36px 24px 8px"
    }
  }, view.name === "home" ? /*#__PURE__*/React.createElement(window.MartHome, {
    products: filtered,
    category: category,
    onCategory: setCategory,
    onAdd: addToCart,
    onOpen: openProduct,
    base: base
  }) : /*#__PURE__*/React.createElement(window.MartProductView, {
    product: view.product,
    onBack: () => setView({
      name: "home"
    }),
    onAdd: addToCart,
    base: base
  })), /*#__PURE__*/React.createElement(window.MartFooter, {
    base: base
  }), /*#__PURE__*/React.createElement(window.MartCartDrawer, {
    open: cartOpen,
    items: cart,
    onClose: () => setCartOpen(false),
    onQty: setQty,
    onRemove: removeItem,
    base: base
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: "50%",
      bottom: 28,
      transform: "translateX(-50%) translateY(" + (flash ? "0" : "30px") + ")",
      opacity: flash ? 1 : 0,
      pointerEvents: "none",
      transition: "all var(--dur-base) var(--ease-out)",
      zIndex: 50,
      background: "var(--navy-900)",
      color: "#fff",
      padding: "13px 20px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500,
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle",
    style: {
      width: 18,
      height: 18,
      color: "var(--gold-300)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, "Added to cart")));
}
window.MartApp = MartApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/th-true-mart/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/th-true-mart/CartDrawer.jsx
try { (() => {
// TH true mart — Cart drawer (slide-in)
const {
  Button: CartButton,
  QtyStepper: CartQty,
  PriceTag: CartPrice,
  Logo: CartLogo
} = window.THTrueMILKDesignSystem_929d48;
function fmtVnd(n) {
  return new Intl.NumberFormat("vi-VN").format(n) + "₫";
}
function CartDrawer({
  open,
  items,
  onClose,
  onQty,
  onRemove,
  base = "../.."
}) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const FREE = 300000;
  const pct = Math.min(100, Math.round(subtotal / FREE * 100));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(15,35,71,.42)",
      backdropFilter: "blur(2px)",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "opacity var(--dur-base) var(--ease-out)",
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      width: 420,
      maxWidth: "92vw",
      background: "var(--white)",
      zIndex: 41,
      display: "flex",
      flexDirection: "column",
      transform: open ? "translateX(0)" : "translateX(100%)",
      transition: "transform var(--dur-slow) var(--ease-out)",
      boxShadow: "var(--shadow-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 22px",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--navy-900)",
      margin: 0
    }
  }, "Your cart (", items.length, ")"), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 22,
      height: 22
    }
  }))), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      padding: 30
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: base + "/assets/flower-mark-navy.png",
    alt: "",
    style: {
      width: 64,
      opacity: 0.18,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Your cart is empty.", /*#__PURE__*/React.createElement("br", null), "Fresh, clean milk is just a tap away."))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "8px 22px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: "flex",
      gap: 14,
      padding: "16px 0",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      flex: "none",
      borderRadius: "var(--radius-md)",
      background: "linear-gradient(160deg, var(--sky-50), var(--navy-50))",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "/assets/flower-mark-navy.png",
    alt: "",
    style: {
      width: 30,
      opacity: 0.2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13.5,
      fontWeight: 500,
      color: "var(--navy-900)",
      lineHeight: 1.35,
      marginBottom: 8
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(CartQty, {
    value: it.qty,
    onChange: v => onQty(it.id, v),
    size: "sm"
  }), /*#__PURE__*/React.createElement(CartPrice, {
    price: it.price * it.qty
  }))), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove",
    onClick: () => onRemove(it.id),
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-faint)",
      alignSelf: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "trash-2",
    style: {
      width: 17,
      height: 17
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px",
      borderTop: "1px solid var(--border)",
      background: "var(--neutral-25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }, subtotal >= FREE ? "🎉 You've unlocked free delivery!" : "Add " + fmtVnd(FREE - subtotal) + " more for free delivery"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 999,
      background: "var(--neutral-200)",
      marginBottom: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      background: "var(--gold-gradient)",
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-muted)"
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement(CartPrice, {
    price: subtotal,
    size: "lg"
  })), /*#__PURE__*/React.createElement(CartButton, {
    variant: "primary",
    size: "lg",
    block: true,
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "Checkout")))));
}
window.MartCartDrawer = CartDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/th-true-mart/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/th-true-mart/Footer.jsx
try { (() => {
// TH true mart — Footer
const {
  Logo: FootLogo
} = window.THTrueMILKDesignSystem_929d48;
function MartFooter({
  base = "../.."
}) {
  const cols = [{
    h: "Shop",
    links: ["Fresh Milk", "Yogurt", "TH true NUT", "Juice & Water", "For kids"]
  }, {
    h: "About TH",
    links: ["Our story", "Hi-tech farms", "Quality & nature", "Sustainability", "Careers"]
  }, {
    h: "Support",
    links: ["Store locator", "Delivery & returns", "Contact us", "FAQ"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--navy-900)",
      color: "rgba(255,255,255,.78)",
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "/assets/flower-mark-white.png",
    alt: "",
    style: {
      position: "absolute",
      right: -40,
      bottom: -60,
      width: 340,
      opacity: 0.06
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1240,
      margin: "0 auto",
      padding: "56px 24px 28px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FootLogo, {
    variant: "white",
    base: base,
    height: 42
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.6,
      margin: "18px 0 0",
      maxWidth: 280
    }
  }, "Fresh, clean milk and food, completely from nature \u2014 for the true happiness of every Vietnamese family.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      margin: "0 0 16px"
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,.78)",
      fontFamily: "var(--font-sans)",
      fontSize: 14
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgba(255,255,255,.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "18px 24px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "rgba(255,255,255,.55)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 TH true mart \xB7 TH Group. A recreation for design-system demonstration."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Terms")))));
}
window.MartFooter = MartFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/th-true-mart/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/th-true-mart/Header.jsx
try { (() => {
// TH true mart — Header (top bar + search + category nav)
const {
  Logo,
  IconButton,
  Input,
  Badge: THBadge
} = window.THTrueMILKDesignSystem_929d48;
function MartHeader({
  cartCount = 0,
  onCart,
  query,
  onQuery,
  category,
  onCategory,
  categories,
  base = "../.."
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--navy-900)",
      color: "rgba(255,255,255,.82)",
      fontFamily: "var(--font-sans)",
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "7px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "truck",
    style: {
      width: 15,
      height: 15
    }
  }), "Free delivery on orders over 300.000\u20AB"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Store locator"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Hotline 1800 6940"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "EN / VN")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "primary",
    base: base,
    height: 46
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Input, {
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search",
      style: {
        width: 19,
        height: 19
      }
    }),
    placeholder: "Search fresh milk, yogurt, TH true NUT\u2026",
    value: query,
    onChange: e => onQuery(e.target.value)
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 22,
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--navy-800)",
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Our story"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Promotions")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Account",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "user",
    style: {
      width: 21,
      height: 21
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Cart",
    variant: "soft",
    onClick: onCart
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shopping-cart",
    style: {
      width: 21,
      height: 21
    }
  })), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -3,
      right: -3,
      minWidth: 20,
      height: 20,
      padding: "0 5px",
      borderRadius: 999,
      background: "var(--gold-500)",
      color: "var(--navy-900)",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 11.5,
      display: "grid",
      placeItems: "center",
      border: "2px solid var(--white)"
    }
  }, cartCount)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "0 24px 0",
      display: "flex",
      gap: 4,
      overflowX: "auto"
    }
  }, categories.map(c => {
    const on = c.id === category;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: () => onCategory(c.id),
      style: {
        position: "relative",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: "13px 16px 15px",
        whiteSpace: "nowrap",
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        fontWeight: on ? 700 : 500,
        color: on ? "var(--navy-700)" : "var(--text-muted)"
      }
    }, c.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 12,
        right: 12,
        bottom: 0,
        height: 3,
        borderRadius: 999,
        background: on ? "var(--gold-500)" : "transparent"
      }
    }));
  }))));
}
window.MartHeader = MartHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/th-true-mart/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/th-true-mart/Home.jsx
try { (() => {
// TH true mart — Home view (hero + shop-by-need + product grid)
const {
  Button: THButton,
  ProductCard: THProductCard,
  SectionHeading: THSectionHeading,
  Badge: THBadge2
} = window.THTrueMILKDesignSystem_929d48;
function Hero({
  base = "../.."
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(135deg, var(--navy-700) 0%, var(--navy-900) 100%)",
      borderRadius: "var(--radius-2xl)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "/assets/flower-mark-white.png",
    alt: "",
    style: {
      position: "absolute",
      right: -60,
      top: -60,
      width: 420,
      opacity: 0.08
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 24,
      alignItems: "center",
      padding: "56px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginBottom: 16
    }
  }, "TH \u2014 True Happiness"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 52,
      lineHeight: 1.04,
      letterSpacing: "-.025em",
      margin: "0 0 18px",
      color: "#fff"
    }
  }, "Truly natural,", /*#__PURE__*/React.createElement("br", null), "in every drop."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      lineHeight: 1.55,
      color: "rgba(255,255,255,.82)",
      margin: "0 0 28px",
      maxWidth: 440
    }
  }, "Fresh, clean milk and food from TH's own hi-tech farms \u2014 delivered to your family's table."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(THButton, {
    variant: "secondary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "Shop fresh milk"), /*#__PURE__*/React.createElement(THButton, {
    variant: "ghost",
    size: "lg",
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,.4)",
      border: "1.5px solid rgba(255,255,255,.4)"
    }
  }, "Our farms"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/3",
      borderRadius: "var(--radius-xl)",
      background: "linear-gradient(160deg, rgba(255,255,255,.16), rgba(255,255,255,.04))",
      border: "1px solid rgba(255,255,255,.18)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "/assets/flower-mark-gold.png",
    alt: "",
    style: {
      width: "38%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 18,
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "rgba(255,255,255,.6)"
    }
  }, "Product imagery placeholder"))));
}
const NEEDS = [{
  icon: "milk",
  label: "Fresh milk",
  tone: "var(--sky-50)",
  cat: "milk"
}, {
  icon: "leaf",
  label: "Plant-based",
  tone: "var(--green-50)",
  cat: "nut"
}, {
  icon: "baby",
  label: "For kids",
  tone: "var(--gold-100)",
  cat: "kids"
}, {
  icon: "soup",
  label: "Yogurt",
  tone: "var(--navy-50)",
  cat: "yogurt"
}];
function NeedTiles({
  onCategory
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, NEEDS.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.cat,
    onClick: () => onCategory(n.cat),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "18px 20px",
      cursor: "pointer",
      background: n.tone,
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--navy-800)",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "none";
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      background: "var(--white)",
      display: "grid",
      placeItems: "center",
      color: "var(--navy-700)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": n.icon,
    style: {
      width: 22,
      height: 22
    }
  })), n.label)));
}
function Home({
  products,
  category,
  onCategory,
  onAdd,
  onOpen,
  base = "../.."
}) {
  const list = category === "all" ? products : products.filter(p => p.cat === category);
  const title = category === "all" ? "Featured products" : (window.TH_DATA.categories.find(c => c.id === category) || {}).label;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    base: base
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(THSectionHeading, {
    eyebrow: "Shop by need",
    title: "What can we bring home today?",
    base: base
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(NeedTiles, {
    onCategory: onCategory
  }))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(THSectionHeading, {
    eyebrow: "TH true mart",
    title: title,
    base: base
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, list.length, " products")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, list.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onOpen(p),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(THProductCard, {
    base: base,
    name: p.name,
    price: p.price,
    original: p.original,
    badge: p.badge,
    badgeTone: p.badgeTone,
    rating: p.rating,
    ratingCount: p.count,
    onAdd: e => {
      (e || {}).stopPropagation && e.stopPropagation();
      onAdd(p);
    }
  }))))));
}
window.MartHome = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/th-true-mart/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/th-true-mart/ProductView.jsx
try { (() => {
// TH true mart — Product detail view (PDP)
const {
  Button: PdpButton,
  Badge: PdpBadge,
  Rating: PdpRating,
  PriceTag: PdpPrice,
  QtyStepper: PdpQty,
  Tabs: PdpTabs,
  IconButton: PdpIcon
} = window.THTrueMILKDesignSystem_929d48;
function ProductView({
  product,
  onBack,
  onAdd,
  base = "../.."
}) {
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState("desc");
  const [fav, setFav] = React.useState(false);
  if (!product) return null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-muted)",
      marginBottom: 22,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 17,
      height: 17
    }
  }), " Back to shop"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1/1",
      borderRadius: "var(--radius-xl)",
      background: "linear-gradient(160deg, var(--sky-50), var(--navy-50))",
      display: "grid",
      placeItems: "center",
      border: "1px solid var(--border)"
    }
  }, product.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 18,
      left: 18
    }
  }, /*#__PURE__*/React.createElement(PdpBadge, {
    tone: product.badgeTone,
    solid: true
  }, product.badge)), /*#__PURE__*/React.createElement("img", {
    src: base + "/assets/flower-mark-navy.png",
    alt: "",
    style: {
      width: "34%",
      opacity: 0.16
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 14
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      aspectRatio: "1/1",
      borderRadius: "var(--radius-md)",
      background: "var(--neutral-100)",
      border: i === 0 ? "2px solid var(--navy-700)" : "1px solid var(--border)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "/assets/flower-mark-navy.png",
    alt: "",
    style: {
      width: "40%",
      opacity: 0.12
    }
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--gold-700)",
      marginBottom: 10
    }
  }, "TH true MILK"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.18,
      letterSpacing: "-.015em",
      color: "var(--navy-900)",
      margin: "0 0 14px"
    }
  }, product.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(PdpRating, {
    value: product.rating,
    count: product.count
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: "var(--border-strong)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--green-600)",
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle",
    style: {
      width: 16,
      height: 16
    }
  }), " In stock")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(PdpPrice, {
    price: product.price,
    original: product.original,
    size: "lg"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15.5,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: "0 0 28px",
      maxWidth: 460
    }
  }, "Pure essence of nature in every drop \u2014 fresh, clean milk from TH's own hi-tech dairy farms, processed to international standards with nothing it doesn't need."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(PdpQty, {
    value: qty,
    onChange: setQty,
    size: "md"
  }), /*#__PURE__*/React.createElement(PdpButton, {
    variant: "primary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "shopping-bag",
      style: {
        width: 19,
        height: 19
      }
    }),
    onClick: () => onAdd(product, qty)
  }, "Add to cart"), /*#__PURE__*/React.createElement(PdpIcon, {
    "aria-label": "Favourite",
    variant: fav ? "gold" : "soft",
    onClick: () => setFav(!fav)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "heart",
    style: {
      width: 20,
      height: 20,
      fill: fav ? "currentColor" : "none"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22,
      padding: "16px 0",
      borderTop: "1px solid var(--border)",
      fontFamily: "var(--font-sans)",
      fontSize: 13.5,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "truck",
    style: {
      width: 17,
      height: 17,
      color: "var(--navy-600)"
    }
  }), " Cold-chain delivery"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "leaf",
    style: {
      width: 17,
      height: 17,
      color: "var(--green-600)"
    }
  }), " Completely from nature"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shield-check",
    style: {
      width: 17,
      height: 17,
      color: "var(--navy-600)"
    }
  }), " Intl. standards")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(PdpTabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      id: "desc",
      label: "Description"
    }, {
      id: "nutri",
      label: "Nutrition"
    }, {
      id: "rev",
      label: "Reviews (" + product.count + ")"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 2px",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.7,
      color: "var(--text-body)"
    }
  }, tab === "desc" && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "TH true MILK is made from 100% fresh milk drawn from our own herds on hi-tech farms in Ngh\u1EC7 An. A closed-loop process \u2014 from pasture to glass \u2014 keeps the milk fresh, clean and full of natural essence, with no added sugar in this variant."), tab === "nutri" && /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: "collapse",
      width: "100%",
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("tbody", null, [["Energy", "122 kcal"], ["Protein", "6.4 g"], ["Fat", "6.8 g"], ["Calcium", "240 mg"], ["Added sugar", "0 g"]].map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 0",
      borderBottom: "1px solid var(--border)",
      color: "var(--text-muted)"
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 0",
      borderBottom: "1px solid var(--border)",
      textAlign: "right",
      fontWeight: 600,
      color: "var(--navy-900)"
    }
  }, r[1]))))), tab === "rev" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, [["Mai N.", 5, "The whole family loves it — fresh and not too sweet."], ["Hùng T.", 5, "Delivered cold and on time. Quality you can taste."]].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingBottom: 14,
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--navy-900)"
    }
  }, r[0]), /*#__PURE__*/React.createElement(PdpRating, {
    value: r[1],
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-body)"
    }
  }, r[2])))))));
}
window.MartProductView = ProductView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/th-true-mart/ProductView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/th-true-mart/data.js
try { (() => {
// TH true mart — demo catalogue (prices in VND đồng)
window.TH_DATA = {
  categories: [{
    id: "all",
    label: "All products"
  }, {
    id: "milk",
    label: "Fresh Milk"
  }, {
    id: "yogurt",
    label: "Yogurt"
  }, {
    id: "nut",
    label: "TH true NUT"
  }, {
    id: "drinks",
    label: "Juice & Water"
  }, {
    id: "kids",
    label: "Kids"
  }, {
    id: "cheese",
    label: "Cheese & Butter"
  }],
  products: [{
    id: "milk-nosugar",
    cat: "milk",
    name: "TH true MILK — Fresh milk, no added sugar 180ml × 4",
    price: 34000,
    original: 39000,
    badge: "-13%",
    badgeTone: "error",
    rating: 4.8,
    count: 213
  }, {
    id: "milk-whole",
    cat: "milk",
    name: "TH true MILK — Fresh whole milk 180ml × 4",
    price: 34000,
    rating: 4.9,
    count: 488,
    badge: "Best seller",
    badgeTone: "gold"
  }, {
    id: "milk-1l",
    cat: "milk",
    name: "TH true MILK — Fresh milk, less sugar 1L",
    price: 39500,
    rating: 4.7,
    count: 162
  }, {
    id: "milk-choco",
    cat: "milk",
    name: "TH true MILK — Cocoa milk 180ml × 4",
    price: 36000,
    rating: 4.6,
    count: 95
  }, {
    id: "yog-natural",
    cat: "yogurt",
    name: "TH true YOGURT — Natural, less sugar 100g × 4",
    price: 28000,
    badge: "New",
    badgeTone: "sky",
    rating: 4.7,
    count: 86
  }, {
    id: "yog-drink",
    cat: "yogurt",
    name: "TH true YOGURT — Drinking yogurt, strawberry 180ml",
    price: 12000,
    rating: 4.8,
    count: 240
  }, {
    id: "yog-greek",
    cat: "yogurt",
    name: "TH true YOGURT — Greek-style, natural 150g",
    price: 19000,
    rating: 4.9,
    count: 71,
    badge: "Premium",
    badgeTone: "gold"
  }, {
    id: "nut-maca",
    cat: "nut",
    name: "TH true NUT — Macadamia & walnut milk 180ml",
    price: 12000,
    badge: "No sugar",
    badgeTone: "green",
    rating: 4.9,
    count: 154
  }, {
    id: "nut-almond",
    cat: "nut",
    name: "TH true NUT — Almond milk 1L",
    price: 62000,
    rating: 4.7,
    count: 58
  }, {
    id: "nut-oat",
    cat: "nut",
    name: "TH true NUT — Oat milk, barista 1L",
    price: 65000,
    rating: 4.8,
    count: 44,
    badge: "New",
    badgeTone: "sky"
  }, {
    id: "juice-orange",
    cat: "drinks",
    name: "TH true JUICE — Orange, no added sugar 300ml",
    price: 15000,
    rating: 4.6,
    count: 132
  }, {
    id: "water-500",
    cat: "drinks",
    name: "TH true WATER — Purified water 500ml × 6",
    price: 30000,
    rating: 4.9,
    count: 305
  }, {
    id: "rice-roasted",
    cat: "drinks",
    name: "TH true RICE — Roasted brown rice drink 180ml",
    price: 11000,
    badge: "No sugar",
    badgeTone: "green",
    rating: 4.7,
    count: 67
  }, {
    id: "kids-topkid",
    cat: "kids",
    name: "TOPKID — Strawberry milk for kids 110ml × 4",
    price: 32000,
    rating: 4.8,
    count: 198,
    badge: "For kids",
    badgeTone: "sky"
  }, {
    id: "kids-topteen",
    cat: "kids",
    name: "TOPTEEN — Nutrition milk for teens 180ml × 4",
    price: 38000,
    rating: 4.7,
    count: 76
  }, {
    id: "cheese-mozza",
    cat: "cheese",
    name: "TH true CHEESE — Mozzarella sticks 70g",
    price: 45000,
    rating: 4.9,
    count: 88,
    badge: "Premium",
    badgeTone: "gold"
  }, {
    id: "butter-natural",
    cat: "cheese",
    name: "TH true BUTTER — Natural unsalted butter 200g",
    price: 78000,
    rating: 4.8,
    count: 41
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/th-true-mart/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.QtyStepper = __ds_scope.QtyStepper;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

})();
