/* @ds-bundle: {"format":4,"namespace":"DrRomaDubeyDesignSystem_317be8","components":[{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Accordion","sourcePath":"components/display/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Dialog","sourcePath":"components/display/Dialog.jsx"},{"name":"ServiceCard","sourcePath":"components/display/ServiceCard.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Testimonial","sourcePath":"components/display/Testimonial.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Icon.jsx":"8908bfa97e81","components/display/Accordion.jsx":"14d0a33f8aa1","components/display/Avatar.jsx":"42d3d4b2ebc2","components/display/Badge.jsx":"066b12f4bd03","components/display/Card.jsx":"c3ee6642d6e7","components/display/Dialog.jsx":"7fbe4e705799","components/display/ServiceCard.jsx":"29be8c742142","components/display/Tabs.jsx":"bde1162abee9","components/display/Tag.jsx":"b6cf17c1397b","components/display/Testimonial.jsx":"9df550d41962","components/forms/Button.jsx":"b8302eb05dec","components/forms/Checkbox.jsx":"5b89e32aa33b","components/forms/IconButton.jsx":"6d529b381ff6","components/forms/Input.jsx":"6b9484c08e2e","components/forms/Radio.jsx":"8bdfa659f539","components/forms/Select.jsx":"398ae2332ad9","components/forms/Switch.jsx":"eec04ef63507","components/forms/Textarea.jsx":"f27ccc0e9d89","ui_kits/booking/app.jsx":"4877b55bccdc","ui_kits/booking/booking.jsx":"7ce493812982","ui_kits/booking/phone.jsx":"2063a883c2e6","ui_kits/portal/app.jsx":"6ad0c2e9f965","ui_kits/portal/appointments.jsx":"da8ed1940a6f","ui_kits/portal/dashboard.jsx":"b1ce9f56f148","ui_kits/portal/messages.jsx":"7b120c0ac833","ui_kits/portal/reports.jsx":"54b1a0eb604b","ui_kits/portal/sidebar.jsx":"484d062db92b","ui_kits/website/about.jsx":"8f382ea149e3","ui_kits/website/app.jsx":"4c3af6872690","ui_kits/website/faq.jsx":"9e2c18d8761f","ui_kits/website/footer.jsx":"6c9b945becf2","ui_kits/website/hero.jsx":"5a26a24f4e95","ui_kits/website/howitworks.jsx":"e3038dbc488b","ui_kits/website/nav.jsx":"7ed87317caf4","ui_kits/website/reviews.jsx":"d319d631a63c","ui_kits/website/services.jsx":"d6df6ac34c19"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DrRomaDubeyDesignSystem_317be8 = window.DrRomaDubeyDesignSystem_317be8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Curated Lucide (lucide.dev, MIT) icon paths — warm rounded stroke set.
 * viewBox 0 0 24 24, stroke width 2, round caps/joins, no fill.
 */
const PATHS = {
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  'check-circle': '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  menu: '<path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  stethoscope: '<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',
  baby: '<path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3"/>',
  droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'map-pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  minus: '<path d="M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  activity: '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'alert-circle': '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  video: '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  'credit-card': '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'
};
const ICON_NAMES = Object.keys(PATHS);

/**
 * Icon — renders a curated Lucide glyph by name, inheriting currentColor.
 */
function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  className = '',
  style = {},
  ...rest
}) {
  const inner = PATHS[name];
  if (!inner) {
    if (typeof console !== 'undefined') console.warn(`Icon: unknown name "${name}"`);
    return null;
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      display: 'inline-block',
      flexShrink: 0,
      verticalAlign: 'middle',
      ...style
    },
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }, rest));
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/display/Accordion.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Accordion — expandable FAQ-style list. `type="single"` (default) keeps
 * one panel open; `"multiple"` allows many.
 */
function Accordion({
  items = [],
  type = 'single',
  defaultOpen = [],
  style = {}
}) {
  const [open, setOpen] = useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(type === 'multiple' ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--surface-card)',
        border: `1px solid ${isOpen ? 'var(--border-brand)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        transition: 'border-color var(--dur-fast) var(--ease-out)',
        boxShadow: isOpen ? 'var(--shadow-sm)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        width: '100%',
        padding: 'var(--space-5)',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'inherit',
        fontSize: 'var(--text-md)',
        fontWeight: 'var(--fw-semibold)',
        color: 'var(--text-strong)'
      }
    }, it.title, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        color: 'var(--clay-600)',
        flexShrink: 0,
        transform: isOpen ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--space-5) var(--space-5)',
        fontSize: 'var(--text-base)',
        lineHeight: 'var(--leading-relaxed)',
        color: 'var(--text-muted)'
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 28,
  sm: 36,
  md: 44,
  lg: 56,
  xl: 72
};
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

/**
 * Avatar — circular photo or initials, with optional status dot.
 * Initials use a warm blush background.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  status,
  ring = false,
  style = {},
  ...rest
}) {
  const px = SIZES[size] || size;
  const statusColors = {
    online: 'var(--success)',
    away: 'var(--warning)',
    offline: 'var(--sand-400)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--blush-200)',
      color: 'var(--clay-800)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: px * 0.4,
      border: ring ? '2px solid var(--surface-card)' : 'none',
      boxShadow: ring ? '0 0 0 2px var(--clay-300)' : 'none'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name)), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: Math.max(8, px * 0.24),
      height: Math.max(8, px * 0.24),
      borderRadius: '50%',
      background: statusColors[status] || statusColors.offline,
      border: '2px solid var(--surface-card)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    soft: {
      bg: 'var(--sand-100)',
      fg: 'var(--sand-700)'
    },
    solid: {
      bg: 'var(--sand-700)',
      fg: '#fff'
    }
  },
  brand: {
    soft: {
      bg: 'var(--clay-50)',
      fg: 'var(--clay-700)'
    },
    solid: {
      bg: 'var(--action-primary)',
      fg: '#fff'
    }
  },
  blush: {
    soft: {
      bg: 'var(--blush-100)',
      fg: 'var(--clay-800)'
    },
    solid: {
      bg: 'var(--blush-500)',
      fg: 'var(--clay-900)'
    }
  },
  success: {
    soft: {
      bg: 'var(--success-soft)',
      fg: 'var(--success-text)'
    },
    solid: {
      bg: 'var(--success)',
      fg: '#fff'
    }
  },
  warning: {
    soft: {
      bg: 'var(--warning-soft)',
      fg: 'var(--warning-text)'
    },
    solid: {
      bg: 'var(--warning)',
      fg: '#fff'
    }
  },
  danger: {
    soft: {
      bg: 'var(--danger-soft)',
      fg: 'var(--danger-text)'
    },
    solid: {
      bg: 'var(--danger)',
      fg: '#fff'
    }
  },
  info: {
    soft: {
      bg: 'var(--info-soft)',
      fg: 'var(--info-text)'
    },
    solid: {
      bg: 'var(--info)',
      fg: '#fff'
    }
  }
};

/**
 * Badge — a small status pill. Tones + soft/solid, optional icon or dot.
 */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  icon,
  dot = false,
  size = 'md',
  style = {},
  ...rest
}) {
  const t = (TONES[tone] || TONES.neutral)[solid ? 'solid' : 'soft'];
  const s = size === 'sm' ? {
    fontSize: 'var(--text-xs)',
    padding: '3px 8px',
    gap: 4,
    icon: 12
  } : {
    fontSize: 'var(--text-sm)',
    padding: '5px 12px',
    gap: 5,
    icon: 14
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      padding: s.padding,
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      fontSize: s.fontSize,
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const VARIANTS = {
  elevated: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-md)'
  },
  outline: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-default)',
    boxShadow: 'none'
  },
  soft: {
    background: 'var(--surface-brand-soft)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  cream: {
    background: 'var(--surface-cream)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    border: '1px solid transparent',
    boxShadow: 'none'
  }
};
const PADS = {
  none: 0,
  sm: 'var(--space-4)',
  md: 'var(--space-6)',
  lg: 'var(--space-8)'
};

/**
 * Card — a warm rounded surface container. Optional hover lift for
 * clickable cards.
 */
function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  radius = 'var(--radius-lg)',
  interactive = false,
  as = 'div',
  style = {},
  onClick,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.elevated;
  const Tag = as;
  const lift = interactive && hovered;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onClick: onClick,
    onMouseEnter: () => interactive && setHovered(true),
    onMouseLeave: () => interactive && setHovered(false),
    style: {
      display: 'block',
      borderRadius: radius,
      padding: PADS[padding] ?? padding,
      cursor: interactive || onClick ? 'pointer' : 'default',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      transform: lift ? 'translateY(-4px)' : 'none',
      ...v,
      boxShadow: lift ? 'var(--shadow-lg)' : v.boxShadow,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Dialog.jsx
try { (() => {
const {
  useEffect
} = React;
const WIDTHS = {
  sm: 400,
  md: 520,
  lg: 680
};

/**
 * Dialog — a centered modal over a warm blurred scrim. Closes on Escape,
 * scrim click, or the close button.
 */
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  showClose = true,
  style = {}
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-modal)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-5)',
      background: 'color-mix(in srgb, var(--sand-900) 45%, transparent)',
      backdropFilter: 'blur(var(--blur-sm))',
      WebkitBackdropFilter: 'blur(var(--blur-sm))',
      animation: 'drd-fade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: WIDTHS[size] || size,
      maxHeight: '90vh',
      overflowY: 'auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      padding: 'var(--space-8)',
      animation: 'drd-pop var(--dur-slow) var(--ease-spring)',
      position: 'relative',
      ...style
    }
  }, showClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 'var(--space-5)',
      right: 'var(--space-5)',
      display: 'inline-flex',
      width: 36,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'var(--sand-100)',
      borderRadius: '50%',
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      marginBottom: description ? 6 : 'var(--space-5)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)',
      paddingRight: showClose ? 40 : 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      marginBottom: 'var(--space-5)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-muted)'
    }
  }, description), /*#__PURE__*/React.createElement("div", null, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes drd-fade{from{opacity:0}to{opacity:1}}@keyframes drd-pop{from{opacity:0;transform:translateY(12px) scale(0.97)}to{opacity:1;transform:none}}`));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/display/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * ServiceCard — a signature marketing pattern: an icon in a soft circle,
 * a title, a short description and an optional link. Lifts on hover.
 */
function ServiceCard({
  icon = 'heart',
  title,
  description,
  href,
  linkLabel = 'Learn more',
  tone = 'brand',
  onClick,
  style = {},
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const chip = {
    brand: {
      bg: 'var(--clay-50)',
      fg: 'var(--clay-600)'
    },
    blush: {
      bg: 'var(--blush-100)',
      fg: 'var(--clay-700)'
    },
    sage: {
      bg: 'var(--sage-100)',
      fg: 'var(--sage-700)'
    },
    dusk: {
      bg: 'var(--dusk-100)',
      fg: 'var(--dusk-700)'
    }
  }[tone] || {
    bg: 'var(--clay-50)',
    fg: 'var(--clay-600)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-6)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hovered ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: href || onClick ? 'pointer' : 'default',
      height: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: chip.bg,
      color: chip.fg,
      transition: 'transform var(--dur-base) var(--ease-spring)',
      transform: hovered ? 'scale(1.06) rotate(-3deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-muted)'
    }
  }, description)), href && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      textDecoration: 'none',
      color: 'var(--text-link)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-sm)'
    }
  }, linkLabel, /*#__PURE__*/React.createElement("span", {
    style: {
      transition: 'transform var(--dur-fast) var(--ease-out)',
      transform: hovered ? 'translateX(3px)' : 'none',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  }))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Tabs — underline or pill tab set. `items`: [{value,label,icon,content}].
 * Controlled via `value`/`onChange` or uncontrolled via `defaultValue`.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  style = {}
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.value);
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  const activeItem = items.find(it => it.value === active);
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: pill ? 6 : 4,
      alignItems: 'center',
      borderBottom: pill ? 'none' : '1px solid var(--border-subtle)',
      background: pill ? 'var(--sand-100)' : 'transparent',
      padding: pill ? 5 : 0,
      borderRadius: pill ? 'var(--radius-pill)' : 0,
      width: pill ? 'fit-content' : '100%'
    }
  }, items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        cursor: 'pointer',
        border: 'none',
        font: 'inherit',
        fontSize: 'var(--text-base)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        padding: pill ? '8px 18px' : '10px 14px',
        color: on ? pill ? 'var(--clay-800)' : 'var(--text-brand)' : 'var(--text-muted)',
        background: pill ? on ? 'var(--surface-card)' : 'transparent' : 'transparent',
        borderRadius: pill ? 'var(--radius-pill)' : 0,
        boxShadow: pill && on ? 'var(--shadow-xs)' : 'none',
        borderBottom: pill ? 'none' : `2px solid ${on ? 'var(--action-primary)' : 'transparent'}`,
        marginBottom: pill ? 0 : -1,
        transition: 'var(--transition-colors)'
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 17
    }), it.label);
  })), activeItem && activeItem.content !== undefined && /*#__PURE__*/React.createElement("div", {
    role: "tabpanel"
  }, activeItem.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a chip for categories/filters. Optional leading icon and remove button.
 */
function Tag({
  children,
  icon,
  onRemove,
  selected = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      background: selected ? 'var(--clay-100)' : 'var(--surface-card)',
      border: `1px solid ${selected ? 'var(--clay-300)' : 'var(--border-default)'}`,
      color: selected ? 'var(--clay-800)' : 'var(--text-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1,
      transition: 'var(--transition-colors)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      padding: 0,
      marginLeft: 2,
      cursor: 'pointer',
      color: 'var(--text-subtle)',
      borderRadius: '50%'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial — a patient review: star rating, quote, and author row.
 */
function Testimonial({
  quote,
  author,
  role,
  avatarSrc,
  rating = 5,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      margin: 0,
      padding: 'var(--space-6)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      height: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      color: 'var(--clay-500)'
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: i < rating ? 'var(--clay-500)' : 'var(--sand-300)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 18,
    strokeWidth: 1.5,
    style: {
      fill: i < rating ? 'var(--clay-500)' : 'transparent'
    }
  })))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      flex: 1,
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatarSrc,
    name: author,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)',
      fontSize: 'var(--text-base)'
    }
  }, author), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-subtle)'
    }
  }, role))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    height: 38,
    padding: '0 16px',
    fontSize: 'var(--text-sm)',
    gap: 6,
    icon: 16
  },
  md: {
    height: 46,
    padding: '0 22px',
    fontSize: 'var(--text-base)',
    gap: 8,
    icon: 18
  },
  lg: {
    height: 56,
    padding: '0 30px',
    fontSize: 'var(--text-md)',
    gap: 10,
    icon: 20
  }
};
function variantStyle(variant, s) {
  // s = { hovered, pressed, disabled }
  const V = {
    primary: {
      base: {
        background: 'var(--action-primary)',
        color: 'var(--on-action-primary)',
        border: '1px solid transparent',
        boxShadow: 'var(--shadow-brand)'
      },
      hover: {
        background: 'var(--action-primary-hover)'
      },
      press: {
        background: 'var(--action-primary-active)'
      }
    },
    secondary: {
      base: {
        background: 'var(--action-secondary)',
        color: 'var(--on-action-secondary)',
        border: '1px solid transparent',
        boxShadow: 'var(--shadow-xs)'
      },
      hover: {
        background: 'var(--action-secondary-hover)'
      },
      press: {
        background: 'var(--action-secondary-active)'
      }
    },
    outline: {
      base: {
        background: 'transparent',
        color: 'var(--text-brand)',
        border: '1.5px solid var(--border-brand)'
      },
      hover: {
        background: 'var(--clay-50)',
        border: '1.5px solid var(--clay-400)'
      },
      press: {
        background: 'var(--clay-100)'
      }
    },
    ghost: {
      base: {
        background: 'transparent',
        color: 'var(--text-body)',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--sand-100)'
      },
      press: {
        background: 'var(--sand-200)'
      }
    },
    whatsapp: {
      base: {
        background: 'var(--whatsapp)',
        color: '#fff',
        border: '1px solid transparent',
        boxShadow: '0 12px 28px -12px rgba(37,211,102,0.6)'
      },
      hover: {
        background: 'var(--whatsapp-dark)'
      },
      press: {
        background: 'var(--whatsapp-dark)'
      }
    }
  };
  const v = V[variant] || V.primary;
  return {
    ...v.base,
    ...(s.hovered ? v.hover : null),
    ...(s.pressed ? v.press : null)
  };
}

/**
 * Button — the primary action element. Pill-shaped, warm, with soft lift.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  fullWidth = false,
  loading = false,
  disabled = false,
  type = 'button',
  as = 'button',
  style = {},
  onClick,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const sz = SIZES[size] || SIZES.md;
  const isDisabled = disabled || loading;
  const vStyle = variantStyle(variant, {
    hovered: hovered && !isDisabled,
    pressed: pressed && !isDisabled
  });
  const styles = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: sz.gap,
    height: sz.height,
    padding: sz.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: sz.fontSize,
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--tracking-tight)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.55 : 1,
    transform: pressed && !isDisabled ? 'scale(0.975)' : hovered && !isDisabled ? 'translateY(-1px)' : 'none',
    transition: 'transform var(--dur-fast) var(--ease-out), background-color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    outline: 'none',
    ...vStyle,
    ...style
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    type: as === 'button' ? type : undefined,
    className: "drd-button",
    style: styles,
    disabled: as === 'button' ? isDisabled : undefined,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onFocus: e => {
      e.currentTarget.style.boxShadow = `${vStyle.boxShadow ? vStyle.boxShadow + ', ' : ''}var(--focus-ring)`;
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = vStyle.boxShadow || 'none';
    },
    onClick: isDisabled ? undefined : onClick
  }, rest), loading && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "activity",
    size: sz.icon,
    style: {
      animation: 'drd-spin 0.9s linear infinite'
    }
  }), !loading && leftIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leftIcon,
    size: sz.icon
  }), children, !loading && rightIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: rightIcon,
    size: sz.icon
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes drd-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — custom warm checkbox with label. Controlled or uncontrolled.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${on ? 'var(--action-primary)' : 'var(--border-strong)'}`,
      background: on ? 'var(--action-primary)' : 'var(--surface-card)',
      color: '#fff',
      transition: 'all var(--dur-fast) var(--ease-out)',
      boxShadow: on ? 'var(--shadow-xs)' : 'none'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    box: 36,
    icon: 18
  },
  md: {
    box: 44,
    icon: 20
  },
  lg: {
    box: 52,
    icon: 24
  }
};
function vStyle(variant, s) {
  const V = {
    solid: {
      base: {
        background: 'var(--action-primary)',
        color: '#fff',
        border: '1px solid transparent',
        boxShadow: 'var(--shadow-sm)'
      },
      hover: {
        background: 'var(--action-primary-hover)'
      },
      press: {
        background: 'var(--action-primary-active)'
      }
    },
    soft: {
      base: {
        background: 'var(--clay-50)',
        color: 'var(--clay-700)',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--clay-100)'
      },
      press: {
        background: 'var(--clay-200)'
      }
    },
    outline: {
      base: {
        background: 'var(--surface-card)',
        color: 'var(--text-body)',
        border: '1px solid var(--border-default)'
      },
      hover: {
        background: 'var(--sand-50)',
        border: '1px solid var(--border-strong)'
      },
      press: {
        background: 'var(--sand-100)'
      }
    },
    ghost: {
      base: {
        background: 'transparent',
        color: 'var(--text-muted)',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--sand-100)',
        color: 'var(--text-body)'
      },
      press: {
        background: 'var(--sand-200)'
      }
    }
  };
  const v = V[variant] || V.soft;
  return {
    ...v.base,
    ...(s.hovered ? v.hover : null),
    ...(s.pressed ? v.press : null)
  };
}

/**
 * IconButton — a square/rounded button carrying a single Icon.
 */
function IconButton({
  icon,
  label,
  variant = 'soft',
  size = 'md',
  round = false,
  disabled = false,
  style = {},
  onClick,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const sz = SIZES[size] || SIZES.md;
  const v = vStyle(variant, {
    hovered: hovered && !disabled,
    pressed: pressed && !disabled
  });
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onClick: disabled ? undefined : onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: sz.box,
      height: sz.box,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transform: pressed && !disabled ? 'scale(0.94)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out), background-color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      padding: 0,
      outline: 'none',
      ...v,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sz.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    height: 40,
    font: 'var(--text-sm)',
    pad: 12,
    icon: 16
  },
  md: {
    height: 48,
    font: 'var(--text-base)',
    pad: 14,
    icon: 18
  },
  lg: {
    height: 56,
    font: 'var(--text-md)',
    pad: 16,
    icon: 20
  }
};

/**
 * Input — a labelled text field with optional icon, hint and error.
 */
function Input({
  label,
  hint,
  error,
  leftIcon,
  size = 'md',
  id,
  required = false,
  disabled = false,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const sz = SIZES[size] || SIZES.md;
  const fieldId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: sz.height,
      padding: `0 ${sz.pad}px`,
      background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      opacity: disabled ? 0.65 : 1
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: focused ? 'var(--clay-600)' : 'var(--text-subtle)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leftIcon,
    size: sz.icon
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    disabled: disabled,
    required: required,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: sz.font,
      color: 'var(--text-strong)',
      padding: 0,
      height: '100%',
      ...style
    }
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 'var(--text-sm)',
      color: error ? 'var(--danger-text)' : 'var(--text-subtle)'
    }
  }, error && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert-circle",
    size: 14
  }), error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Radio — a single custom radio with label. Group by sharing `name`.
 */
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || `rb-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const change = e => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "radio",
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: change,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      border: `1.5px solid ${on ? 'var(--action-primary)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: 'var(--action-primary)',
      transform: on ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-spring)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)'
    }
  }, label));
}

/**
 * RadioGroup — convenience wrapper rendering a set of Radios with shared state.
 */
function RadioGroup({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column',
  gap = 12,
  style = {}
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap,
      ...style
    }
  }, opts.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: name,
    value: o.value,
    label: o.label,
    disabled: o.disabled,
    checked: current === o.value,
    onChange: () => {
      if (!isControlled) setInternal(o.value);
      onChange && onChange(o.value);
    }
  })));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    height: 40,
    font: 'var(--text-sm)',
    pad: 12
  },
  md: {
    height: 48,
    font: 'var(--text-base)',
    pad: 14
  },
  lg: {
    height: 56,
    font: 'var(--text-md)',
    pad: 16
  }
};

/**
 * Select — a labelled native dropdown styled to match Input.
 * Pass `options` (array of {value,label} or strings) or children <option>.
 */
function Select({
  label,
  hint,
  error,
  options,
  placeholder,
  size = 'md',
  id,
  required = false,
  disabled = false,
  children,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const sz = SIZES[size] || SIZES.md;
  const fieldId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--border-focus)' : 'var(--border-default)';
  const opts = (options || []).map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    disabled: disabled,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: sz.height,
      padding: `0 ${sz.pad + 26}px 0 ${sz.pad}px`,
      background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      fontSize: sz.font,
      color: 'var(--text-strong)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      opacity: disabled ? 0.65 : 1,
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: sz.pad,
      pointerEvents: 'none',
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: error ? 'var(--danger-text)' : 'var(--text-subtle)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    w: 38,
    h: 22,
    knob: 16
  },
  md: {
    w: 46,
    h: 26,
    knob: 20
  }
};

/**
 * Switch — a warm on/off toggle. Controlled or uncontrolled.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  size = 'md',
  onChange,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || `sw-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const sz = SIZES[size] || SIZES.md;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: sz.w,
      height: sz.h,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--action-primary)' : 'var(--sand-300)',
      transition: 'background-color var(--dur-base) var(--ease-out)',
      boxShadow: 'var(--shadow-inset)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: (sz.h - sz.knob) / 2,
      left: on ? sz.w - sz.knob - (sz.h - sz.knob) / 2 : (sz.h - sz.knob) / 2,
      width: sz.knob,
      height: sz.knob,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-spring)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Textarea — a labelled multi-line text field with hint / error.
 */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  required = false,
  disabled = false,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || `ta-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    disabled: disabled,
    required: required,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      width: '100%',
      resize: 'vertical',
      minHeight: 96,
      padding: '12px 14px',
      background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      lineHeight: 'var(--leading-normal)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      opacity: disabled ? 0.65 : 1,
      ...style
    }
  })), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: error ? 'var(--danger-text)' : 'var(--text-subtle)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/app.jsx
try { (() => {
function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '44px 20px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/blob-blush.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -140,
      left: -120,
      width: 480,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/blob-clay.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: -160,
      right: -120,
      width: 460,
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(window.Phone, null, /*#__PURE__*/React.createElement(window.Chat, null))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/booking.jsx
try { (() => {
const {
  Icon
} = window.DrRomaDubeyDesignSystem_317be8;
const FLOW = {
  start: {
    msgs: [{
      t: 'text',
      text: "Hi 👋 Welcome to Dr. Roma Dubey's clinic. I'm here to help you book a consultation."
    }, {
      t: 'text',
      text: 'How can we help you today?'
    }],
    options: [{
      label: 'Book a consultation',
      next: 'service'
    }, {
      label: 'Ask a question',
      next: 'ask'
    }]
  },
  service: {
    msgs: [{
      t: 'text',
      text: 'Wonderful! Which area would you like help with?'
    }],
    options: [{
      label: 'Pregnancy care',
      next: 'type'
    }, {
      label: 'PCOS & hormonal',
      next: 'type'
    }, {
      label: 'Fertility',
      next: 'type'
    }, {
      label: 'General consult',
      next: 'type'
    }]
  },
  type: {
    msgs: [{
      t: 'text',
      text: 'Great choice. How would you like to consult?'
    }],
    options: [{
      label: 'Tele-consult · ₹500',
      next: 'pay'
    }, {
      label: 'In-clinic · ₹800',
      next: 'pay'
    }]
  },
  pay: {
    msgs: [{
      t: 'text',
      text: 'Please complete payment to confirm. Scan this secure UPI QR — quick and safe.'
    }, {
      t: 'qr'
    }],
    options: [{
      label: "I've paid ✓",
      next: 'slots'
    }]
  },
  slots: {
    msgs: [{
      t: 'text',
      text: 'Payment received ✓ Now pick a slot that suits you:'
    }],
    options: [{
      label: 'Tue 16 Jul · 11:30 AM',
      next: 'done'
    }, {
      label: 'Wed 17 Jul · 4:00 PM',
      next: 'done'
    }, {
      label: 'Thu 18 Jul · 10:00 AM',
      next: 'done'
    }]
  },
  done: {
    msgs: [{
      t: 'confirm'
    }],
    options: [{
      label: 'Start over',
      next: 'restart'
    }]
  },
  ask: {
    msgs: [{
      t: 'text',
      text: 'Sure — type your question below and our team will reply shortly. 💛'
    }],
    options: [{
      label: 'Actually, book a visit',
      next: 'service'
    }]
  }
};
function Bubble({
  from,
  children
}) {
  const clinic = from === 'clinic';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: clinic ? 'flex-start' : 'flex-end',
      padding: '2px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '80%',
      padding: '8px 11px 6px',
      borderRadius: 14,
      borderTopLeftRadius: clinic ? 3 : 14,
      borderTopRightRadius: clinic ? 14 : 3,
      background: clinic ? '#fff' : '#E3F3D4',
      boxShadow: '0 1px 1px rgba(61,43,38,0.10)',
      color: 'var(--sand-900)',
      fontSize: 14.5,
      lineHeight: 1.4
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      float: 'right',
      fontSize: 10.5,
      color: 'var(--sand-500)',
      marginLeft: 10,
      marginTop: 5
    }
  }, "9:4", clinic ? '1' : '2'), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both'
    }
  })));
}
function Typing() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-start',
      padding: '2px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 14,
      borderTopLeftRadius: 3,
      padding: '11px 14px',
      boxShadow: '0 1px 1px rgba(61,43,38,0.10)',
      display: 'flex',
      gap: 4
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--sand-400)',
      animation: `bt 1.2s ${i * 0.16}s infinite ease-in-out`
    }
  }))));
}
function QRCard() {
  return /*#__PURE__*/React.createElement(Bubble, {
    from: "clinic"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 210
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 12,
      padding: 10,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/booking-qr.png",
    alt: "Sample UPI QR code",
    style: {
      width: '100%',
      borderRadius: 6,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontWeight: 700,
      color: 'var(--text-strong)',
      fontSize: 13
    }
  }, "drromadubey@upi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, "Sample QR \xB7 not a live payment"))));
}
function ConfirmCard({
  sel
}) {
  return /*#__PURE__*/React.createElement(Bubble, {
    from: "clinic"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 230
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8,
      color: 'var(--sage-700)',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 20
  }), " Appointment confirmed"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement(Row, {
    icon: "heart",
    label: sel.service || 'Consultation'
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "video",
    label: sel.type || 'Consultation'
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "calendar",
    label: sel.slot || 'Your slot'
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "map-pin",
    label: "Maitri Mahila Clinic, Sardhana"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 12.5,
      color: 'var(--text-muted)',
      lineHeight: 1.45
    }
  }, "See you soon \u2014 take care! \uD83D\uDC9B")));
}
function Row({
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay-600)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15
  })), label);
}
function Chat() {
  const [items, setItems] = React.useState([]);
  const [options, setOptions] = React.useState([]);
  const [typing, setTyping] = React.useState(false);
  const [sel, setSel] = React.useState({});
  const scroller = React.useRef(null);
  const selRef = React.useRef({});
  const pushNode = React.useCallback(id => {
    const node = FLOW[id];
    setTyping(true);
    setOptions([]);
    setTimeout(() => {
      setTyping(false);
      setItems(prev => [...prev, ...node.msgs.map(m => ({
        from: 'clinic',
        ...m
      }))]);
      setOptions(node.options || []);
    }, 650);
  }, []);
  React.useEffect(() => {
    pushNode('start');
  }, [pushNode]);
  React.useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [items, typing, options]);
  const choose = (opt, fromId) => {
    if (fromId === 'service') {
      selRef.current.service = opt.label;
    }
    if (fromId === 'type') {
      selRef.current.type = opt.label;
    }
    if (fromId === 'slots') {
      selRef.current.slot = opt.label;
    }
    setSel({
      ...selRef.current
    });
    if (opt.next === 'restart') {
      selRef.current = {};
      setSel({});
      setItems([]);
      setOptions([]);
      setTimeout(() => pushNode('start'), 50);
      return;
    }
    setItems(prev => [...prev, {
      from: 'user',
      t: 'text',
      text: opt.label
    }]);
    pushNode(opt.next);
  };

  // determine current node id from last options set
  const currentId = React.useMemo(() => {
    for (const id in FLOW) {
      if (FLOW[id].options === options) return id;
    }
    return null;
  }, [options]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#128C7E',
      paddingTop: 44,
      color: '#fff',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 12px 12px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 24
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--clay-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 15,
      color: '#fff'
    }
  }, "RD"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15.5
    }
  }, "Dr. Roma Dubey Clinic"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.85,
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#8ef0a6'
    }
  }), " online")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      opacity: 0.95
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "video",
    size: 21
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 19
  })))), /*#__PURE__*/React.createElement("div", {
    ref: scroller,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '14px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center',
      background: 'color-mix(in srgb, #fff 70%, var(--whatsapp-bg))',
      color: 'var(--sand-600)',
      fontSize: 11.5,
      padding: '4px 12px',
      borderRadius: 8,
      marginBottom: 8
    }
  }, "Today"), items.map((m, i) => m.t === 'qr' ? /*#__PURE__*/React.createElement(QRCard, {
    key: i
  }) : m.t === 'confirm' ? /*#__PURE__*/React.createElement(ConfirmCard, {
    key: i,
    sel: sel
  }) : /*#__PURE__*/React.createElement(Bubble, {
    key: i,
    from: m.from
  }, m.text)), typing && /*#__PURE__*/React.createElement(Typing, null)), options.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      padding: '10px 12px 6px',
      justifyContent: 'flex-end'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.label,
    onClick: () => choose(o, currentId),
    style: {
      border: '1.5px solid #128C7E',
      background: '#fff',
      color: '#0d7266',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 13.5,
      fontWeight: 600,
      fontFamily: 'var(--font-sans)',
      cursor: 'pointer',
      boxShadow: '0 1px 2px rgba(61,43,38,0.08)'
    }
  }, o.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 10px 12px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: '#fff',
      borderRadius: 'var(--radius-pill)',
      padding: '9px 14px',
      color: 'var(--sand-400)',
      boxShadow: '0 1px 2px rgba(61,43,38,0.08)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "Message")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: '#128C7E',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message",
    size: 20
  }))), /*#__PURE__*/React.createElement("style", null, `@keyframes bt{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-4px);opacity:1}}`));
}
window.Chat = Chat;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/phone.jsx
try { (() => {
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 402,
      background: '#1c1310',
      borderRadius: 54,
      padding: 12,
      boxShadow: '0 40px 90px -30px rgba(61,43,38,0.55), 0 12px 30px -12px rgba(61,43,38,0.35)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 44,
      overflow: 'hidden',
      background: 'var(--whatsapp-bg)',
      height: 812,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 44,
      zIndex: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 26px',
      color: '#fff',
      fontSize: 14,
      fontWeight: 700,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 11,
      border: '1.5px solid #fff',
      borderRadius: 3,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 1.5,
      background: '#fff',
      borderRadius: 1,
      width: '70%'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 150,
      height: 30,
      background: '#1c1310',
      borderRadius: '0 0 18px 18px',
      zIndex: 6
    }
  }), children));
}
window.Phone = Phone;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/phone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/app.jsx
try { (() => {
const DS = window.DrRomaDubeyDesignSystem_317be8;
const {
  Input,
  IconButton,
  Avatar,
  Dialog,
  Button,
  Select,
  Textarea
} = DS;
function BookDialog({
  open,
  onClose
}) {
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    size: "md",
    title: "Book an appointment",
    description: "Pick a service and time \u2014 we'll confirm on WhatsApp."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Service",
    placeholder: "Choose a service",
    options: ['Antenatal check-up', 'PCOS & hormonal', 'Fertility consult', 'Pap smear & wellness', 'General consult']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Clinic",
    options: ['Maitri Mahila Clinic', 'Aryavart Hospital', 'Tele-consult']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Preferred day",
    options: ['Tue 16 Jul', 'Wed 17 Jul', 'Thu 18 Jul']
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Anything we should know? (optional)",
    rows: 3,
    placeholder: "Symptoms, questions, previous reports\u2026"
  })));
}
function App() {
  const [view, setView] = React.useState('dashboard');
  const [booking, setBooking] = React.useState(false);
  const onBook = () => setBooking(true);
  const View = {
    dashboard: window.Dashboard,
    appointments: window.Appointments,
    reports: window.Reports,
    messages: window.Messages
  }[view];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(window.Sidebar, {
    active: view,
    onNavigate: setView
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      padding: '16px 30px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'color-mix(in srgb, var(--surface-page) 80%, transparent)',
      backdropFilter: 'blur(var(--blur-md))',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-subtle)'
    }
  }, "Good morning"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 800,
      color: 'var(--sand-800)',
      letterSpacing: '-0.02em',
      lineHeight: 1.1
    }
  }, "Hello, Priya \uD83D\uDC4B")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search reports, visits\u2026",
    leftIcon: "search",
    size: "sm"
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications",
    variant: "soft",
    round: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leftIcon: "plus",
    onClick: onBook
  }, "Book")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '28px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, View ? /*#__PURE__*/React.createElement(View, {
    onBook: onBook
  }) : null))), /*#__PURE__*/React.createElement(BookDialog, {
    open: booking,
    onClose: () => setBooking(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/appointments.jsx
try { (() => {
const {
  Tabs,
  Badge,
  Button,
  IconButton,
  Icon
} = window.DrRomaDubeyDesignSystem_317be8;
const UPCOMING = [{
  d: '16',
  m: 'Jul',
  title: 'Antenatal check-up',
  time: 'Tue · 11:30 AM',
  mode: 'In-clinic',
  loc: 'Maitri Mahila Clinic',
  tone: 'success',
  status: 'Confirmed'
}, {
  d: '22',
  m: 'Jul',
  title: 'Follicular monitoring scan',
  time: 'Mon · 9:00 AM',
  mode: 'In-clinic',
  loc: 'Aryavart Hospital',
  tone: 'warning',
  status: 'Awaiting'
}];
const PAST = [{
  d: '28',
  m: 'Jun',
  title: 'PCOS follow-up',
  time: 'Sat · 4:30 PM',
  mode: 'Tele-consult',
  loc: 'Online',
  tone: 'neutral',
  status: 'Completed'
}, {
  d: '10',
  m: 'Jun',
  title: 'Pap smear & wellness exam',
  time: 'Tue · 10:00 AM',
  mode: 'In-clinic',
  loc: 'Maitri Mahila Clinic',
  tone: 'neutral',
  status: 'Completed'
}, {
  d: '02',
  m: 'Jun',
  title: 'First consultation',
  time: 'Mon · 12:15 PM',
  mode: 'Tele-consult',
  loc: 'Online',
  tone: 'neutral',
  status: 'Completed'
}];
function AptRow({
  a,
  past
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '16px 4px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 62,
      textAlign: 'center',
      background: past ? 'var(--sand-100)' : 'var(--clay-50)',
      borderRadius: 'var(--radius-md)',
      padding: '8px 0',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: past ? 'var(--sand-600)' : 'var(--clay-700)',
      lineHeight: 1
    }
  }, a.d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-subtle)'
    }
  }, a.m)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)',
      fontSize: 'var(--text-md)'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 5,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-subtle)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15
  }), " ", a.time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.mode === 'Tele-consult' ? 'video' : 'map-pin',
    size: 15
  }), " ", a.mode, " \xB7 ", a.loc))), /*#__PURE__*/React.createElement(Badge, {
    tone: a.tone,
    dot: true
  }, a.status), past ? /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    leftIcon: "file-text"
  }, "Summary") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Reschedule"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "video",
    label: "Join",
    variant: "soft",
    size: "sm"
  })));
}
function Appointments({
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-2xl)',
      fontWeight: 800,
      color: 'var(--sand-800)',
      letterSpacing: '-0.02em'
    }
  }, "Appointments"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leftIcon: "plus",
    onClick: onBook
  }, "Book new")), /*#__PURE__*/React.createElement(Tabs, {
    defaultValue: "up",
    items: [{
      value: 'up',
      label: 'Upcoming',
      icon: 'calendar',
      content: /*#__PURE__*/React.createElement("div", null, UPCOMING.map(a => /*#__PURE__*/React.createElement(AptRow, {
        key: a.title,
        a: a
      })))
    }, {
      value: 'past',
      label: 'Past visits',
      icon: 'clock',
      content: /*#__PURE__*/React.createElement("div", null, PAST.map(a => /*#__PURE__*/React.createElement(AptRow, {
        key: a.title,
        a: a,
        past: true
      })))
    }]
  }));
}
window.Appointments = Appointments;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/appointments.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/dashboard.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Icon
} = window.DrRomaDubeyDesignSystem_317be8;
function Stat({
  icon,
  tone,
  label,
  value,
  sub
}) {
  const tones = {
    clay: ['var(--clay-50)', 'var(--clay-600)'],
    sage: ['var(--sage-100)', 'var(--sage-700)'],
    blush: ['var(--blush-100)', 'var(--clay-700)'],
    dusk: ['var(--dusk-100)', 'var(--dusk-700)']
  }[tone] || ['var(--clay-50)', 'var(--clay-600)'];
  return /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "md"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: tones[0],
      color: tones[1],
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: 'var(--sand-800)',
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      fontWeight: 600,
      marginTop: 4
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)',
      marginTop: 2
    }
  }, sub));
}
function Dashboard({
  onBook
}) {
  const reports = [{
    name: 'Pap Smear Report',
    date: '10 Jul 2026',
    status: 'ready',
    tone: 'success'
  }, {
    name: 'Pelvic Ultrasound',
    date: '10 Jul 2026',
    status: 'ready',
    tone: 'success'
  }, {
    name: 'Blood Panel (CBC, TSH)',
    date: 'Processing',
    status: 'pending',
    tone: 'warning'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(120deg, var(--clay-600), var(--clay-500))',
      color: '#fff',
      padding: '28px 30px',
      boxShadow: 'var(--shadow-brand)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/blob-cream.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -80,
      right: -40,
      width: 300,
      opacity: 0.25
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'rgba(255,255,255,0.2)',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 12.5,
      fontWeight: 600,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), " In 2 days"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Antenatal check-up"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginTop: 12,
      fontSize: 'var(--text-sm)',
      opacity: 0.95,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 16
  }), " Tue, 16 Jul \xB7 11:30 AM"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16
  }), " Maitri Mahila Clinic, Sardhana"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Reschedule"), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    leftIcon: "video"
  }, "Join tele-consult")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: "droplet",
    tone: "clay",
    value: "Day 14",
    label: "Cycle",
    sub: "Ovulation window"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "shield-check",
    tone: "sage",
    value: "Due Sep",
    label: "Next screening",
    sub: "HPV vaccination"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "file-text",
    tone: "dusk",
    value: "2 ready",
    label: "Reports",
    sub: "1 processing"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "activity",
    tone: "blush",
    value: "Healthy",
    label: "Last check-up",
    sub: "BP 118/76"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 22px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Recent reports"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600
    }
  }, "View all")), /*#__PURE__*/React.createElement("div", null, reports.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 22px',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--clay-50)',
      color: 'var(--clay-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontSize: 'var(--text-base)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, r.date)), /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone,
    dot: true
  }, r.status === 'ready' ? 'Ready' : 'Processing'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: r.status === 'ready' ? 'var(--clay-600)' : 'var(--sand-300)',
      display: 'flex',
      cursor: r.status === 'ready' ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 19
  })))))), /*#__PURE__*/React.createElement(Card, {
    variant: "cream",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      color: 'var(--clay-600)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Health tip"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 16px',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)'
    }
  }, "Around ovulation, staying hydrated and tracking symptoms helps you and Dr. Roma plan care with confidence."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onBook,
    rightIcon: "arrow-right"
  }, "Book a consult"))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/messages.jsx
try { (() => {
const {
  Avatar,
  Icon,
  Badge
} = window.DrRomaDubeyDesignSystem_317be8;
const THREADS = [{
  id: 'roma',
  name: 'Dr. Roma Dubey',
  preview: 'Your ultrasound looks great — let\'s review it on Tuesday.',
  time: '9:24 AM',
  unread: 1,
  initials: 'RD',
  accent: true
}, {
  id: 'reception',
  name: 'Reception · Maitri',
  preview: 'Your slot on 16 Jul, 11:30 AM is confirmed.',
  time: 'Yesterday',
  unread: 0
}, {
  id: 'lab',
  name: 'Lab Team',
  preview: 'Your blood panel is being processed.',
  time: 'Mon',
  unread: 0
}];
const CONVO = [{
  from: 'them',
  text: 'Hello Priya! Your Pap smear and pelvic ultrasound results are in — everything looks healthy. 💛'
}, {
  from: 'me',
  text: 'That\'s such a relief, thank you Doctor!'
}, {
  from: 'them',
  text: 'Of course. Let\'s do a quick review at your antenatal visit on Tuesday. Any symptoms meanwhile, message me here anytime.'
}, {
  from: 'me',
  text: 'Will do. See you Tuesday.'
}];
function Messages() {
  const [active, setActive] = React.useState('roma');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 20px',
      fontSize: 'var(--text-2xl)',
      fontWeight: 800,
      color: 'var(--sand-800)',
      letterSpacing: '-0.02em'
    }
  }, "Messages"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      height: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--border-subtle)',
      overflowY: 'auto'
    }
  }, THREADS.map(t => {
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setActive(t.id),
      style: {
        width: '100%',
        display: 'flex',
        gap: 12,
        padding: '16px 18px',
        border: 'none',
        borderBottom: '1px solid var(--border-subtle)',
        background: on ? 'var(--clay-50)' : 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'inherit'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: t.name,
      size: "md",
      style: {
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontSize: 'var(--text-sm)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, t.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--text-subtle)',
        flexShrink: 0
      }
    }, t.time)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8,
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, t.preview), t.unread > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: 'var(--clay-600)',
        color: '#fff',
        fontSize: 11,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, t.unread))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dr. Roma Dubey",
    size: "sm",
    status: "online"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)',
      fontSize: 'var(--text-sm)'
    }
  }, "Dr. Roma Dubey"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--success-text)'
    }
  }, "online"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      background: 'var(--surface-page)'
    }
  }, CONVO.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: c.from === 'me' ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '74%',
      padding: '9px 13px',
      borderRadius: 14,
      borderTopLeftRadius: c.from === 'them' ? 3 : 14,
      borderTopRightRadius: c.from === 'me' ? 3 : 14,
      background: c.from === 'me' ? 'var(--clay-600)' : 'var(--surface-card)',
      color: c.from === 'me' ? '#fff' : 'var(--sand-900)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.45,
      boxShadow: 'var(--shadow-xs)'
    }
  }, c.text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--surface-page)',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 16px',
      color: 'var(--sand-400)',
      fontSize: 'var(--text-sm)'
    }
  }, "Write a message\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--clay-600)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message",
    size: 19
  }))))));
}
window.Messages = Messages;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/messages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/reports.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Icon
} = window.DrRomaDubeyDesignSystem_317be8;
const REPORTS = [{
  name: 'Pap Smear Report',
  type: 'Screening',
  date: '10 Jul 2026',
  tone: 'success',
  status: 'Ready'
}, {
  name: 'Pelvic Ultrasound',
  type: 'Imaging',
  date: '10 Jul 2026',
  tone: 'success',
  status: 'Ready'
}, {
  name: 'Follicular Study',
  type: 'Imaging',
  date: '22 Jun 2026',
  tone: 'success',
  status: 'Ready'
}, {
  name: 'Blood Panel (CBC, TSH)',
  type: 'Lab',
  date: 'Processing',
  tone: 'warning',
  status: 'Pending'
}, {
  name: 'Hormonal Profile (LH/FSH)',
  type: 'Lab',
  date: '28 May 2026',
  tone: 'success',
  status: 'Ready'
}];
function Reports() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-2xl)',
      fontWeight: 800,
      color: 'var(--sand-800)',
      letterSpacing: '-0.02em'
    }
  }, "Reports & results"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    leftIcon: "download"
  }, "Download all")), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 0.8fr 0.9fr 0.7fr 0.5fr',
      padding: '14px 22px',
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Report"), /*#__PURE__*/React.createElement("span", null, "Type"), /*#__PURE__*/React.createElement("span", null, "Date"), /*#__PURE__*/React.createElement("span", null, "Status"), /*#__PURE__*/React.createElement("span", null)), REPORTS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 0.8fr 0.9fr 0.7fr 0.5fr',
      alignItems: 'center',
      padding: '15px 22px',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--clay-50)',
      color: 'var(--clay-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 18
  })), r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, r.type), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, r.date), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone,
    dot: true
  }, r.status)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      color: r.status === 'Ready' ? 'var(--clay-600)' : 'var(--sand-300)',
      cursor: r.status === 'Ready' ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 19
  }))))));
}
window.Reports = Reports;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/reports.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/sidebar.jsx
try { (() => {
const {
  Icon,
  Avatar
} = window.DrRomaDubeyDesignSystem_317be8;
const NAV = [{
  key: 'dashboard',
  label: 'Dashboard',
  icon: 'home'
}, {
  key: 'appointments',
  label: 'Appointments',
  icon: 'calendar'
}, {
  key: 'reports',
  label: 'Reports',
  icon: 'file-text'
}, {
  key: 'messages',
  label: 'Messages',
  icon: 'message'
}];
function Sidebar({
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 250,
      flexShrink: 0,
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '22px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '4px 8px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: 'var(--clay-600)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 16
    }
  }, "RD"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      color: 'var(--sand-800)',
      letterSpacing: '-0.02em'
    }
  }, "Dr. Roma Dubey"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, "Patient portal"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      flex: 1
    }
  }, NAV.map(n => {
    const on = active === n.key;
    return /*#__PURE__*/React.createElement("button", {
      key: n.key,
      onClick: () => onNavigate(n.key),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 14px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        font: 'inherit',
        fontSize: 'var(--text-base)',
        textAlign: 'left',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        color: on ? 'var(--clay-800)' : 'var(--text-muted)',
        background: on ? 'var(--clay-50)' : 'transparent',
        transition: 'var(--transition-colors)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 20
    }), " ", n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 14,
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Priya Sharma",
    size: "md",
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontSize: 'var(--text-sm)'
    }
  }, "Priya Sharma"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, "Patient \xB7 #MMC-2048")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      display: 'flex',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 18
  }))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/about.jsx
try { (() => {
const {
  Tag,
  Icon,
  Button
} = window.DrRomaDubeyDesignSystem_317be8;
const PROCEDURES = ['Diagnostic Laparoscopy', 'Laparoscopic Hysterectomy', 'Myomectomy', 'Ovarian Cystectomy', 'Endometriosis', 'Tubal Ligation', 'Ectopic Pregnancy'];
function About() {
  const P = window.RD_PHOTOS;
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      background: 'var(--surface-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container section"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      aspectRatio: '5/6'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P.motherChild,
    alt: "A mother holding her child",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      right: -22,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--clay-50)',
      color: 'var(--clay-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)',
      fontSize: 'var(--text-sm)'
    }
  }, "Every stage of life"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, "Menstrual \xB7 Fertility \xB7 Menopause")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Trusted gynaecologist"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-lg)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--sand-800)',
      lineHeight: 1.1
    }
  }, "Your trusted women's health partner"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)'
    }
  }, "Dr. Roma has helped countless women through every stage of life \u2014 from menstrual health, fertility care and safe pregnancies to advanced laparoscopic surgeries and menopause management. Her goal is that every woman feels confident, informed and cared for."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginBottom: 12
    }
  }, "Laparoscopic procedures offered"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, PROCEDURES.map(p => /*#__PURE__*/React.createElement(Tag, {
    key: p
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    rightIcon: "arrow-right"
  }, "More about Dr. Roma"))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/about.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
const DS = window.DrRomaDubeyDesignSystem_317be8;
const {
  Dialog,
  Button,
  Icon
} = DS;
function ConnectDialog({
  open,
  onClose
}) {
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    size: "sm",
    showClose: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'color-mix(in srgb, var(--whatsapp) 16%, white)',
      color: 'var(--whatsapp-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message",
    size: 32
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-xl)',
      fontWeight: 800,
      color: 'var(--text-strong)'
    }
  }, "Chat with our team"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)'
    }
  }, "You'll be connected on WhatsApp to ask questions, share concerns and book your appointment \u2014 all in one chat."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      background: 'var(--surface-cream)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18
  }), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "+91 98765 43210")), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    leftIcon: "message",
    fullWidth: true,
    onClick: onClose
  }, "Open WhatsApp")));
}
function App() {
  const [connect, setConnect] = React.useState(false);
  const onConnect = () => setConnect(true);
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, {
      threshold: 0.15
    });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.Nav, {
    onConnect: onConnect
  }), /*#__PURE__*/React.createElement(window.Hero, {
    onConnect: onConnect
  }), /*#__PURE__*/React.createElement(window.Services, null), /*#__PURE__*/React.createElement(window.HowItWorks, null), /*#__PURE__*/React.createElement(window.About, null), /*#__PURE__*/React.createElement(window.Reviews, null), /*#__PURE__*/React.createElement(window.Faq, null), /*#__PURE__*/React.createElement(window.Footer, {
    onConnect: onConnect
  }), /*#__PURE__*/React.createElement(ConnectDialog, {
    open: connect,
    onClose: () => setConnect(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/faq.jsx
try { (() => {
const {
  Accordion,
  Input,
  Button,
  Icon
} = window.DrRomaDubeyDesignSystem_317be8;
const FAQS = [{
  title: 'How can I book an appointment with Dr. Roma Dubey?',
  content: 'You can book through call or WhatsApp for either Maitri Mahila Clinic (Kaland Chungi, Sardhana) or Aryavart Hospital (NH-58, Daurala, Meerut).'
}, {
  title: 'What should I bring for my first visit?',
  content: 'Please carry any previous medical records, test reports and a list of current medications. If you are pregnant, bring your ultrasound scans and reports if available.'
}, {
  title: 'Does Dr. Roma Dubey handle high-risk pregnancies?',
  content: 'Yes — Dr. Roma is experienced in managing high-risk pregnancies and provides complete care, from early monitoring to safe delivery.'
}, {
  title: 'Are ultrasound and diagnostic tests available at the clinic?',
  content: 'Yes. Pap smear, pelvic ultrasound, follicular monitoring and hormonal tests are available to support accurate diagnosis and treatment.'
}];
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Help & support"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-lg)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--sand-800)',
      marginTop: 12,
      lineHeight: 1.1
    }
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)',
      marginTop: 16
    }
  }, "Still have a question? Message us on WhatsApp and we'll guide you step by step."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6,
      color: 'var(--text-strong)',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  }), " Health tips newsletter"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, "Exclusive updates on women's wellness and clinic offers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Your email",
    leftIcon: "mail",
    containerStyle: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Subscribe")))), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: [0],
    items: FAQS
  }))));
}
window.Faq = Faq;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/faq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/footer.jsx
try { (() => {
const {
  Button,
  Icon
} = window.DrRomaDubeyDesignSystem_317be8;
function Footer({
  onConnect
}) {
  const cols = [{
    h: 'Explore',
    links: ['Home', 'About', 'Services', 'Reviews', 'FAQ']
  }, {
    h: 'Services',
    links: ['Pregnancy Care', 'PCOS & Hormonal', 'Fertility', 'Laparoscopy', 'Menopause Clinic']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--sand-900)',
      color: 'var(--sand-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      paddingBlock: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: '-0.03em',
      color: '#fff'
    }
  }, "Dr. Roma ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay-400)'
    }
  }, "Dubey")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--sand-400)',
      marginTop: 14,
      maxWidth: 280
    }
  }, "Healthcare that is personalised, compassionate and empowering \u2014 at every stage of life.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--sand-400)',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'var(--sand-200)',
      fontSize: 'var(--text-base)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--sand-400)',
      marginBottom: 16
    }
  }, "Visit us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: 'var(--text-sm)',
      color: 'var(--sand-200)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 18
  }), " Maitri Mahila Clinic, Kaland Chungi, Sardhana \xB7 Aryavart Hospital, NH-58, Daurala, Meerut"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 'var(--text-sm)',
      color: 'var(--sand-200)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 18
  }), " Mon\u2013Sat \xB7 10:00 AM \u2013 6:00 PM")), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    leftIcon: "message",
    onClick: onConnect
  }, "Connect on WhatsApp")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--sand-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      paddingBlock: 20,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 10,
      fontSize: 'var(--text-sm)',
      color: 'var(--sand-500)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Dr. Roma Dubey \xB7 Women's Health & Gynaecology"), /*#__PURE__*/React.createElement("span", null, "Meerut, Uttar Pradesh, India"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/hero.jsx
try { (() => {
const {
  Button,
  Badge,
  Icon
} = window.DrRomaDubeyDesignSystem_317be8;
function Hero({
  onConnect
}) {
  const P = window.RD_PHOTOS;
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.RD_BLOBS.blush,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -160,
      right: -120,
      width: 560,
      opacity: 0.7,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      paddingTop: 64,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    icon: "sparkles"
  }, "MBBS \xB7 MD \xB7 8+ years")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-2xl)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-tighter)',
      lineHeight: 1.04,
      color: 'var(--sand-800)'
    }
  }, "Compassionate care for ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay-600)'
    }
  }, "every woman")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)',
      maxWidth: 520
    }
  }, "I'm Dr. Roma Dubey \u2014 an Obstetrician, Gynaecologist & Laparoscopic Surgeon offering advanced, evidence-based women's health care at every stage of life."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    leftIcon: "message",
    onClick: onConnect
  }, "Connect on WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    as: "a",
    href: "#services",
    rightIcon: "arrow-right"
  }, "Explore services")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 14
    }
  }, [['8+', 'Years of care'], ['5000+', 'Women helped'], ['2', 'Clinic locations']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: 'var(--clay-700)',
      letterSpacing: '-0.02em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-subtle)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.RD_BLOBS.clay,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: -50,
      left: -60,
      width: 340,
      opacity: 0.55,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
      aspectRatio: '4/5'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P.doctor,
    alt: "Dr. Roma Dubey",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 22,
      left: -26,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--sage-100)',
      color: 'var(--sage-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)',
      fontSize: 'var(--text-sm)'
    }
  }, "Safe & painless delivery"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, "High-risk pregnancy specialist")))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/howitworks.jsx
try { (() => {
const {
  Icon
} = window.DrRomaDubeyDesignSystem_317be8;
const STEPS = [{
  icon: 'message',
  title: 'Connect on WhatsApp',
  body: 'Tap any Connect button and chat directly with our team. Ask questions and share your concerns.'
}, {
  icon: 'credit-card',
  title: 'Secure payment & slot',
  body: 'We share a secure UPI QR code. Pay for your consult, then pick the appointment slot that suits you.'
}, {
  icon: 'check-circle',
  title: 'Instant confirmation',
  body: 'You receive a confirmation on WhatsApp — no forms, no hassle. Fully managed in one chat.'
}];
function HowItWorks() {
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    style: {
      background: 'var(--surface-brand-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container section"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-lg)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--sand-800)',
      marginTop: 12,
      lineHeight: 1.1
    }
  }, "Book in one simple chat")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      position: 'relative'
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    className: "reveal",
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8) var(--space-6)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 18,
      right: 20,
      fontSize: 40,
      fontWeight: 800,
      color: 'var(--clay-100)',
      lineHeight: 1
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 54,
      height: 54,
      borderRadius: 'var(--radius-md)',
      background: 'color-mix(in srgb, var(--whatsapp) 14%, white)',
      color: 'var(--whatsapp-dark)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginBottom: 8
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-muted)'
    }
  }, s.body))))));
}
window.HowItWorks = HowItWorks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/howitworks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/nav.jsx
try { (() => {
const {
  Button,
  IconButton
} = window.DrRomaDubeyDesignSystem_317be8;
function Nav({
  onConnect
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('root');
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll, true);
  }, []);
  const links = ['Home', 'About', 'Services', 'Reviews', 'FAQ'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'color-mix(in srgb, var(--sand-50) 82%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'blur(var(--blur-md))' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(var(--blur-md))' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'background .3s var(--ease-out), border-color .3s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 76
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: '-0.03em',
      color: 'var(--sand-800)'
    }
  }, "Dr. Roma ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay-600)'
    }
  }, "Dubey")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      marginTop: 3
    }
  }, "Gynaecology \xB7 Women's Health")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: `#${l.toLowerCase()}`,
    style: {
      color: 'var(--text-body)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--fw-medium)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "phone",
    label: "Call the clinic",
    variant: "soft",
    round: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    leftIcon: "message",
    onClick: onConnect
  }, "Connect on WhatsApp"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/reviews.jsx
try { (() => {
const {
  Testimonial
} = window.DrRomaDubeyDesignSystem_317be8;
const REVIEWS = [{
  rating: 5,
  quote: 'Dr. Roma guided me through my entire pregnancy with so much care and expertise. From the first scan to my safe delivery, I always felt supported and heard.',
  author: 'Priya Sharma',
  role: 'New mother'
}, {
  rating: 5,
  quote: 'I struggled with PCOS for years until I found Dr. Roma. Her personalised plan and clear explanations made such a difference. I feel healthier than ever!',
  author: 'Aarti Verma',
  role: 'PCOS care'
}, {
  rating: 5,
  quote: 'My laparoscopic surgery was smooth and the recovery was quick. Dr. Roma explained everything patiently and put my whole family at ease.',
  author: 'Sunita Rani',
  role: 'Laparoscopy'
}];
function Reviews() {
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 44px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Client reviews"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-lg)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--sand-800)',
      marginTop: 12,
      lineHeight: 1.1
    }
  }, "Caring for every woman's journey")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, REVIEWS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.author,
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Testimonial, r))))));
}
window.Reviews = Reviews;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/reviews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/services.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  ServiceCard,
  Button
} = window.DrRomaDubeyDesignSystem_317be8;
const SERVICES = [{
  icon: 'droplet',
  title: 'Pap Smear',
  description: 'Cervical cancer screening designed for early, reassuring detection.',
  tone: 'brand'
}, {
  icon: 'heart',
  title: 'Wellness Exam',
  description: 'A complete check-up covering all your health essentials.',
  tone: 'blush'
}, {
  icon: 'activity',
  title: 'Hormonal & PCOS',
  description: 'Mood swings or fatigue? Personalised hormonal and PCOS/PCOD care.',
  tone: 'sage'
}, {
  icon: 'baby',
  title: 'Fertility Test',
  description: 'Planning for a family? Follicular monitoring and fertility guidance.',
  tone: 'dusk'
}, {
  icon: 'shield-check',
  title: 'Vaccination',
  description: 'Cervical cancer (HPV) vaccination for lasting protection.',
  tone: 'brand'
}, {
  icon: 'stethoscope',
  title: 'Breast Health',
  description: 'Prioritise your breast health with a thorough clinical exam.',
  tone: 'blush'
}];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "From routine screenings to specialised care"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-lg)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--sand-800)',
      marginTop: 12,
      lineHeight: 1.1
    }
  }, "Services offered")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    as: "a",
    href: "#services",
    rightIcon: "arrow-right"
  }, "View all services")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    className: "reveal"
  }, /*#__PURE__*/React.createElement(ServiceCard, _extends({}, s, {
    href: "#"
  })))))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
