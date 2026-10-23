/* @ds-bundle: {"format":3,"namespace":"BankaoolDesignSystem_e4a585","components":[],"sourceHashes":{"ui_kits/app/app.jsx":"f9f0c3191fba","ui_kits/app/composed.jsx":"c69dbe10106b","ui_kits/app/icons.jsx":"f3d3de3bd2b2","ui_kits/app/ios-frame.jsx":"d67eb3ffe562","ui_kits/app/primitives.jsx":"340ae96ffca9","ui_kits/app/screens.jsx":"667418e80200"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BankaoolDesignSystem_e4a585 = window.BankaoolDesignSystem_e4a585 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/app/app.jsx
try { (() => {
// App shell — composes screens inside an iOS frame with a floating nav bar.

const NAV_ITEMS = [{
  id: 'home',
  icon: 'home'
}, {
  id: 'movements',
  icon: 'history'
}, {
  id: 'cards',
  icon: 'cardSimple'
}, {
  id: 'settings',
  icon: 'settings'
}];
function App() {
  // Persist screen across reloads (helps the user iterate)
  const [stage, setStage] = React.useState(() => localStorage.getItem('bk_stage') || 'splash');
  const [hidden, setHidden] = React.useState(false);
  React.useEffect(() => {
    localStorage.setItem('bk_stage', stage);
  }, [stage]);

  // Logged-in screens vs onboarding
  const onboarding = stage === 'splash' || stage === 'login';
  let screen = null;
  if (stage === 'splash') screen = /*#__PURE__*/React.createElement(SplashScreen, {
    onNext: () => setStage('login')
  });else if (stage === 'login') screen = /*#__PURE__*/React.createElement(LoginScreen, {
    onLogin: () => setStage('home')
  });else if (stage === 'home' || stage === 'cards') screen = /*#__PURE__*/React.createElement(HomeScreen, {
    hidden: hidden,
    onToggleHidden: () => setHidden(h => !h),
    onCardClick: () => setStage('success'),
    onMovementClick: () => setStage('movements')
  });else if (stage === 'movements') screen = /*#__PURE__*/React.createElement(MovementsScreen, {
    onBack: () => setStage('home')
  });else if (stage === 'settings') screen = /*#__PURE__*/React.createElement(SettingsScreen, {
    onBack: () => setStage('home'),
    onLogout: () => {
      localStorage.removeItem('bk_stage');
      setStage('splash');
    }
  });else if (stage === 'success') screen = /*#__PURE__*/React.createElement(SuccessScreen, {
    onBack: () => setStage('home'),
    onConfirm: () => setStage('home')
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(IPhoneFrame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: 'var(--bk-bg-base-200)'
    },
    "data-screen-label": stage
  }, screen, !onboarding && stage !== 'success' && /*#__PURE__*/React.createElement(BkNavBar, {
    active: stage === 'home' ? 'home' : stage,
    items: NAV_ITEMS,
    onChange: setStage
  }))));
}

// Use the starter ios-frame.jsx if loaded — else a minimal fallback bezel.
const IPhoneFrame = ({
  children
}) => {
  if (typeof IOSFrame !== 'undefined') return /*#__PURE__*/React.createElement(IOSFrame, {
    statusBarTime: "9:41",
    statusBarStyle: "dark"
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 393,
      height: 852,
      background: '#000',
      borderRadius: 56,
      padding: 12,
      boxShadow: '0 30px 80px rgba(0,0,0,0.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 44,
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 110,
      height: 32,
      background: '#000',
      borderRadius: 9999,
      zIndex: 10
    }
  }), children));
};
window.App = App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/composed.jsx
try { (() => {
// Bankaool app — larger composed components.

const BkAppBar = ({
  title,
  onBack,
  onClose,
  large = false,
  search = false,
  headphones = true
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'transparent',
    padding: '8px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: large ? 12 : 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    minHeight: 48
  }
}, onBack ? /*#__PURE__*/React.createElement(BkIconButton, {
  name: "chevLeft",
  size: 36,
  onClick: onBack
}) : /*#__PURE__*/React.createElement("div", {
  style: {
    width: 36
  }
}), !large && !search && /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'var(--bk-font-display-alt)',
    fontWeight: 700,
    fontSize: 16,
    color: 'var(--bk-content-default)'
  }
}, title), search && /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    background: '#fff',
    border: '1px solid var(--bk-primary)',
    borderRadius: 9999,
    padding: '6px 14px',
    display: 'flex',
    alignItems: 'center',
    gap: 8
  }
}, /*#__PURE__*/React.createElement(BkIcon, {
  name: "search",
  size: 18
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--bk-font-body)',
    fontSize: 14,
    color: 'var(--bk-content-secondary)',
    flex: 1
  }
}, "Buscar")), !large && !search && /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}), headphones && /*#__PURE__*/React.createElement(BkIconButton, {
  name: "headphones",
  size: 36
}), onClose && /*#__PURE__*/React.createElement(BkIconButton, {
  name: "close",
  size: 36,
  onClick: onClose
})), large && /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--bk-font-display)',
    fontWeight: 700,
    fontSize: 28,
    lineHeight: '32px',
    color: 'var(--bk-content-default)',
    padding: '0 4px'
  }
}, title));
const BkListTile = ({
  icon,
  iconNode,
  title,
  supporting,
  trailing = 'chevRight',
  tone = 'primary',
  onClick,
  divider = false
}) => /*#__PURE__*/React.createElement("div", {
  onClick: onClick,
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '12px 14px',
    cursor: onClick ? 'pointer' : 'default',
    borderBottom: divider ? '1px solid var(--bk-border-subtle)' : 'none'
  }
}, iconNode || icon && /*#__PURE__*/React.createElement(BkIconContainer, {
  name: icon,
  tone: tone
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--bk-font-body)',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '22px',
    color: 'var(--bk-content-default)'
  }
}, title), supporting && /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--bk-font-body)',
    fontSize: 13,
    color: 'var(--bk-content-secondary)',
    marginTop: 2
  }
}, supporting)), trailing === 'chevRight' && /*#__PURE__*/React.createElement(BkIcon, {
  name: "chevRight",
  size: 20,
  style: {
    color: 'var(--bk-content-secondary)'
  }
}), typeof trailing === 'string' && trailing !== 'chevRight' && /*#__PURE__*/React.createElement(BkChip, {
  tone: "neutral"
}, trailing), React.isValidElement(trailing) && trailing);
const BkCardGroup = ({
  children,
  title
}) => {
  const arr = React.Children.toArray(children).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-display-alt)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--bk-content-secondary)',
      padding: '4px 18px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bk-bg-base-100)',
      border: '1px solid var(--bk-border-subtle)',
      borderRadius: 16,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, arr.map((c, i) => React.cloneElement(c, {
    divider: i < arr.length - 1,
    key: i
  }))));
};
const BkNavBar = ({
  active,
  onChange,
  items
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: 12,
    pointerEvents: 'none'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'var(--bk-primary)',
    borderRadius: 9999,
    padding: '14px 18px',
    display: 'flex',
    gap: 22,
    alignItems: 'center',
    boxShadow: 'var(--bk-elev-fab)',
    pointerEvents: 'auto'
  }
}, items.map(it => /*#__PURE__*/React.createElement("button", {
  key: it.id,
  onClick: () => onChange(it.id),
  style: {
    background: 'transparent',
    border: 0,
    padding: 4,
    cursor: 'pointer',
    color: active === it.id ? 'var(--bk-accent)' : 'var(--bk-on-primary)',
    display: 'grid',
    placeItems: 'center'
  }
}, /*#__PURE__*/React.createElement(BkIcon, {
  name: it.icon,
  size: 24
})))), /*#__PURE__*/React.createElement("button", {
  style: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    background: '#22C55E',
    color: '#fff',
    border: 0,
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    boxShadow: 'var(--bk-elev-fab)',
    pointerEvents: 'auto'
  }
}, /*#__PURE__*/React.createElement(BkIcon, {
  name: "whatsapp",
  size: 22
})));
const BkTextField = ({
  label,
  value,
  onChange,
  leading,
  trailing = 'xCircle',
  placeholder,
  secure,
  error
}) => {
  const filled = !!value;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: error ? 'var(--bk-error-pastel)' : 'var(--bk-bg-base-100)',
      border: `1px solid ${error ? 'var(--bk-error)' : filled ? 'var(--bk-primary)' : 'var(--bk-border-subtle)'}`,
      borderRadius: 16,
      padding: '8px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      transition: 'all 200ms'
    }
  }, leading && /*#__PURE__*/React.createElement(BkIcon, {
    name: leading,
    size: 20,
    style: {
      color: error ? 'var(--bk-error)' : 'var(--bk-content-default)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-body)',
      fontSize: 11,
      color: error ? 'var(--bk-error)' : 'var(--bk-content-secondary)',
      lineHeight: '14px'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    value: value || '',
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    type: secure ? 'password' : 'text',
    style: {
      border: 0,
      outline: 0,
      width: '100%',
      background: 'transparent',
      fontFamily: 'var(--bk-font-body)',
      fontSize: 16,
      lineHeight: '22px',
      color: 'var(--bk-content-default)',
      padding: 0
    }
  })), filled && trailing && /*#__PURE__*/React.createElement(BkIcon, {
    name: trailing,
    size: 20,
    style: {
      color: 'var(--bk-content-secondary)',
      cursor: 'pointer'
    },
    onClick: () => onChange && onChange('')
  })), error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-body)',
      fontSize: 12,
      color: 'var(--bk-error)',
      paddingLeft: 14
    }
  }, error));
};

// ── Account / balance card ─────────────────────────────
const BkBalanceCard = ({
  balance,
  account,
  onToggle,
  hidden
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    margin: '0 16px',
    background: 'var(--bk-primary)',
    color: 'var(--bk-on-primary)',
    borderRadius: 24,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    backgroundImage: 'radial-gradient(ellipse at top right, rgba(253,173,114,0.18), transparent 60%)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--bk-font-body)',
    fontSize: 13,
    opacity: 0.7
  }
}, "Disponible"), /*#__PURE__*/React.createElement(BkIconButton, {
  name: hidden ? 'eyeOff' : 'eye',
  size: 32,
  onClick: onToggle,
  color: "var(--bk-on-primary)"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--bk-font-display)',
    fontWeight: 700,
    fontSize: 40,
    lineHeight: '44px',
    fontVariantNumeric: 'tabular-nums',
    letterSpacing: '-0.01em'
  }
}, hidden ? '$ ••••••' : balance), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--bk-font-body)',
    fontSize: 12,
    opacity: 0.6
  }
}, account));

// ── Shortcut Bar (3 circular shortcuts under balance) ──
const BkShortcutBar = ({
  items,
  onPick
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: `repeat(${items.length}, 1fr)`,
    gap: 8,
    padding: '0 16px'
  }
}, items.map(it => /*#__PURE__*/React.createElement("button", {
  key: it.id,
  onClick: () => onPick && onPick(it.id),
  style: {
    background: 'var(--bk-bg-base-100)',
    border: '1px solid var(--bk-border-subtle)',
    borderRadius: 18,
    padding: '14px 8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: 'var(--bk-bg-base-300)',
    display: 'grid',
    placeItems: 'center',
    color: 'var(--bk-content-default)'
  }
}, /*#__PURE__*/React.createElement(BkIcon, {
  name: it.icon,
  size: 22
})), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--bk-font-body)',
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--bk-content-default)',
    textAlign: 'center',
    lineHeight: '14px'
  }
}, it.label))));

// ── Movement row (transaction list item) ──────────────
const BkMovement = ({
  direction,
  title,
  subtitle,
  amount,
  divider
}) => {
  const incoming = direction === 'in';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 14px',
      borderBottom: divider ? '1px solid var(--bk-border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: incoming ? 'var(--bk-success-pastel)' : 'var(--bk-bg-base-300)',
      color: incoming ? 'var(--bk-on-success-pastel)' : 'var(--bk-content-default)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(BkIcon, {
    name: incoming ? 'arrowDownLeft' : 'arrowUpRight',
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-body)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--bk-content-default)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-body)',
      fontSize: 12,
      color: 'var(--bk-content-secondary)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-body)',
      fontWeight: 700,
      fontSize: 15,
      color: incoming ? 'var(--bk-on-success-pastel)' : 'var(--bk-content-default)',
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap',
      flex: '0 0 auto'
    }
  }, incoming ? '+ ' : '− ', amount));
};
Object.assign(window, {
  BkAppBar,
  BkListTile,
  BkCardGroup,
  BkNavBar,
  BkTextField,
  BkBalanceCard,
  BkShortcutBar,
  BkMovement
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/composed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Bankaool app — shared icon set. Hugeicons-style 1.6px stroke,
// rounded caps & joins, 24-viewBox. Same library as preview/_icons.svg.

const BK_ICON_PATHS = {
  home: 'M3.5 10 L12 3.5 L20.5 10 V20 a1 1 0 0 1-1 1 H15 v-6 h-6 v6 H4.5 a1 1 0 0 1-1-1 z',
  card: ['M2.5 5 H21.5 a2 2 0 0 1 2 2', 'M2.5 5 a2 2 0 0 1 2-2 H21.5 a2 2 0 0 1 2 2 V19 a2 2 0 0 1-2 2 H4.5 a2 2 0 0 1-2-2 z', 'M2.5 10 H23.5', 'M6 15 H10'],
  cardSimple: ['M2.5 7 h19 a1 1 0 0 1 1 1 v9 a1 1 0 0 1-1 1 h-19 a1 1 0 0 1-1-1 V8 a1 1 0 0 1 1-1 z', 'M2.5 11 H22.5', 'M6 15 H10'],
  settings: ['M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1.04-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.31.69.99 1.13 1.56 1.04H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1z', 'circle:12,12,3'],
  bell: 'M6 9 a6 6 0 0 1 12 0 v4 l1.5 2.5 H4.5 L6 13 z M9.5 19 a2.5 2.5 0 0 0 5 0',
  chevRight: 'M9 5 L16 12 L9 19',
  chevLeft: 'M15 5 L8 12 L15 19',
  arrowRight: 'M5 12 H19 M13 6 L19 12 L13 18',
  close: 'M6 6 L18 18 M18 6 L6 18',
  search: ['circle:11,11,6.5', 'M16 16 L20.5 20.5'],
  user: ['circle:12,9,3.5', 'M5 21 a7 7 0 0 1 14 0'],
  headphones: ['M4 14 V12 a8 8 0 0 1 16 0 v2', 'M4 14 a2 2 0 0 1 2-2 h1 v6 H6 a2 2 0 0 1-2-2 z M20 14 a2 2 0 0 0-2-2 h-1 v6 h1 a2 2 0 0 0 2-2 z'],
  check: 'M5 12.5 L10 17.5 L19 7',
  info: ['circle:12,12,9', 'M12 11 v6 M12 7.5 v.01'],
  alert: 'M10.3 3.9 L2.4 18 a2 2 0 0 0 1.7 3 h15.7 a2 2 0 0 0 1.7-3 L13.7 3.9 a2 2 0 0 0-3.4 0 z M12 9 v5 M12 17.5 v.01',
  xCircle: ['circle:12,12,9', 'M8 8 l8 8 M16 8 l-8 8'],
  eye: ['M2.5 12 s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7 z', 'circle:12,12,3'],
  eyeOff: ['M3 3 L21 21', 'M10.7 6.5 a9 9 0 0 1 1.3-.1 c6 0 9.5 7 9.5 7 a14 14 0 0 1-2.6 3.2', 'M6.4 7.6 C3.8 9.5 2.5 12 2.5 12 s3.5 7 9.5 7 a9.6 9.6 0 0 0 3.5-.7', 'M9.5 9.6 a3 3 0 0 0 4.4 3.9'],
  plus: 'M12 5 v14 M5 12 h14',
  send: ['M21 3 L3 11 L10 13.5 L12.5 21 z', 'M21 3 L10 13.5'],
  wallet: 'M3 8 a2 2 0 0 1 2-2 h12 a2 2 0 0 1 2 2 v2 H21 v6 H19 v2 a2 2 0 0 1-2 2 H5 a2 2 0 0 1-2-2 z M16 13 v.01',
  piggy: 'M4 12 a6 6 0 0 1 6-6 h3 l3-2 v3 a6 6 0 0 1 3 5 H21 v3 H18 v3 h-3 v-2 H9 v2 H6 v-3 a6 6 0 0 1-2-3 z M14 11.5 v.01',
  shield: 'M12 3 L4 6 v6 c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9 V6 z',
  doc: 'M6 3 h8 l4 4 v14 a1 1 0 0 1-1 1 H6 a1 1 0 0 1-1-1 V4 a1 1 0 0 1 1-1 z M14 3 v4 h4 M8 12 h8 M8 16 h6',
  help: ['circle:12,12,9', 'M9.5 9.5 a2.5 2.5 0 1 1 3.6 2.3 c-.7.3-1.1 1-1.1 1.7 V14 M12 17.5 v.01'],
  logout: 'M10 3 H5 a1 1 0 0 0-1 1 v16 a1 1 0 0 0 1 1 h5 M15 8 l4 4-4 4 M19 12 H9',
  qr: ['M3 3 h7 v7 H3 z M14 3 h7 v7 h-7 z M3 14 h7 v7 H3 z', 'M14 14 h3 v3 M21 14 v3 M14 21 h7 M17 17 h.01'],
  phone: 'M6 3 h12 a1 1 0 0 1 1 1 v16 a1 1 0 0 1-1 1 H6 a1 1 0 0 1-1-1 V4 a1 1 0 0 1 1-1 z M10 18 h4',
  trending: 'M3 17 L9 11 L13 15 L21 7 M15 7 H21 V13',
  globe: ['circle:12,12,9', 'M3 12 H21 M12 3 a14 14 0 0 1 0 18 M12 3 a14 14 0 0 0 0 18'],
  history: 'M3 12 a9 9 0 1 0 3-6.7 M3 4 v4 H7 M12 7 v5 l3 2',
  fingerprint: 'M5 11 a7 7 0 0 1 14 0 v3 M12 5 v.01 M12 9 v7 M9 14 v3 M15 14 v3 M7.5 19 a4 4 0 0 1 9 0',
  filter: 'M4 5 h16 L14 13 v6 l-4 2 v-8 z',
  download: 'M12 3 v12 M7 11 l5 5 5-5 M4 21 h16',
  upload: 'M12 21 V9 M7 13 l5-5 5 5 M4 3 h16',
  whatsapp: 'M12 3 a9 9 0 0 0-7.7 13.7 L3 21 l4.5-1.3 A9 9 0 1 0 12 3 z M8 11.5 c.4 2 2.5 4 4.5 4.5 M9 8 c-.3.3-.5.8-.5 1.3 a2 2 0 0 0 .7 1.4 M15.5 14 c-.3.5-1 .7-1.5.5 a4 4 0 0 1-1.5-1',
  arrowDownLeft: 'M19 5 L5 19 M15 19 H5 V9',
  arrowUpRight: 'M5 19 L19 5 M9 5 H19 V15'
};
function BkIcon({
  name,
  size = 24,
  style = {},
  ...rest
}) {
  const paths = BK_ICON_PATHS[name];
  if (!paths) return null;
  const arr = Array.isArray(paths) ? paths : [paths];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      display: 'block',
      ...style
    }
  }, rest), arr.map((p, i) => {
    if (typeof p === 'string' && p.startsWith('circle:')) {
      const [cx, cy, r] = p.slice(7).split(',').map(Number);
      return /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: cx,
        cy: cy,
        r: r,
        stroke: "currentColor",
        strokeWidth: "1.6"
      });
    }
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: p,
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    });
  }));
}
Object.assign(window, {
  BkIcon,
  BK_ICON_PATHS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/primitives.jsx
try { (() => {
// Bankaool app — primitives (Button, Chip, IconContainer, Avatar)

const BkButton = ({
  variant = 'filled',
  size = 'lg',
  children,
  onClick,
  leading,
  trailing,
  full,
  disabled
}) => {
  const sizes = {
    lg: {
      padding: '20px 24px',
      font: 16,
      line: 22,
      icon: 20
    },
    md: {
      padding: '12px 24px',
      font: 16,
      line: 22,
      icon: 20
    },
    sm: {
      padding: '8px 14px',
      font: 14,
      line: 20,
      icon: 16
    }
  }[size];
  const base = {
    border: 0,
    borderRadius: 9999,
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'var(--bk-font-body)',
    fontWeight: 700,
    fontSize: sizes.font,
    lineHeight: sizes.line + 'px',
    padding: sizes.padding,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: full ? '100%' : 'auto',
    transition: 'transform 120ms cubic-bezier(.2,0,0,1), opacity 120ms'
  };
  const styles = {
    filled: {
      ...base,
      background: disabled ? 'var(--bk-disabled-bg)' : 'var(--bk-primary)',
      color: disabled ? 'var(--bk-disabled-content)' : 'var(--bk-on-primary)'
    },
    outlined: {
      ...base,
      background: 'transparent',
      color: disabled ? 'var(--bk-disabled-content)' : 'var(--bk-primary)',
      border: `1px solid ${disabled ? 'var(--bk-disabled-bg)' : 'var(--bk-primary)'}`
    },
    text: {
      ...base,
      background: 'transparent',
      color: disabled ? 'var(--bk-disabled-content)' : 'var(--bk-primary)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    style: styles[variant],
    onClick: disabled ? undefined : onClick,
    onPointerDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onPointerUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onPointerLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, leading && /*#__PURE__*/React.createElement(BkIcon, {
    name: leading,
    size: sizes.icon
  }), children, trailing && /*#__PURE__*/React.createElement(BkIcon, {
    name: trailing,
    size: sizes.icon
  }));
};
const BkIconButton = ({
  name,
  onClick,
  size = 40,
  variant = 'ghost',
  color
}) => {
  const styles = {
    ghost: {
      background: 'transparent',
      color: color || 'var(--bk-content-default)'
    },
    outlined: {
      background: 'transparent',
      color: 'var(--bk-primary)',
      border: '1px solid var(--bk-primary)'
    },
    filled: {
      background: 'var(--bk-primary)',
      color: 'var(--bk-on-primary)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: 0,
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      ...styles[variant]
    }
  }, /*#__PURE__*/React.createElement(BkIcon, {
    name: name,
    size: Math.round(size * 0.55)
  }));
};
const BkIconContainer = ({
  name,
  size = 40,
  tone = 'primary'
}) => {
  const tones = {
    primary: {
      background: 'var(--bk-primary)',
      color: 'var(--bk-on-primary)'
    },
    info: {
      background: 'var(--bk-info-pastel)',
      color: 'var(--bk-on-info-pastel)'
    },
    success: {
      background: 'var(--bk-success-pastel)',
      color: 'var(--bk-on-success-pastel)'
    },
    warning: {
      background: 'var(--bk-warning-pastel)',
      color: 'var(--bk-on-warning-pastel)'
    },
    error: {
      background: 'var(--bk-error-pastel)',
      color: 'var(--bk-on-error-pastel)'
    },
    neutral: {
      background: 'var(--bk-bg-base-300)',
      color: 'var(--bk-content-default)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 12,
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 auto',
      ...tones[tone]
    }
  }, /*#__PURE__*/React.createElement(BkIcon, {
    name: name,
    size: Math.round(size * 0.55)
  }));
};
const BkChip = ({
  children,
  tone = 'neutral',
  size = 'sm'
}) => {
  const tones = {
    neutral: {
      background: 'var(--bk-bg-base-300)',
      color: 'var(--bk-content-secondary)'
    },
    info: {
      background: 'var(--bk-info-pastel)',
      color: 'var(--bk-on-info-pastel)'
    },
    success: {
      background: 'var(--bk-success-pastel)',
      color: 'var(--bk-on-success-pastel)'
    },
    warning: {
      background: 'var(--bk-warning-pastel)',
      color: 'var(--bk-on-warning-pastel)'
    },
    error: {
      background: 'var(--bk-error-pastel)',
      color: 'var(--bk-on-error-pastel)'
    },
    dark: {
      background: 'var(--bk-primary)',
      color: 'var(--bk-on-primary)'
    }
  };
  const sizes = {
    sm: {
      padding: '4px 10px',
      font: 12
    },
    md: {
      padding: '6px 12px',
      font: 13
    }
  }[size];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: 9999,
      fontFamily: 'var(--bk-font-body)',
      fontWeight: 600,
      padding: sizes.padding,
      fontSize: sizes.font,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      ...tones[tone]
    }
  }, children);
};
const BkAvatar = ({
  initials,
  size = 48,
  bg = 'var(--bk-accent)'
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: size,
    height: size,
    borderRadius: '50%',
    background: bg,
    color: 'var(--bk-on-accent)',
    display: 'grid',
    placeItems: 'center',
    fontFamily: 'var(--bk-font-display-alt)',
    fontWeight: 700,
    fontSize: size * 0.4
  }
}, initials);
Object.assign(window, {
  BkButton,
  BkIconButton,
  BkIconContainer,
  BkChip,
  BkAvatar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens.jsx
try { (() => {
// Bankaool app — five screens that compose the click-through prototype.
// Each screen is a frame inside the iOS bezel. State lives in App.

// ── Splash + Login ─────────────────────────────────────
const SplashScreen = ({
  onNext
}) => {
  React.useEffect(() => {
    const t = setTimeout(onNext, 1400);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--bk-bg-base-200)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--bk-font-display)',
      fontWeight: 700,
      fontSize: 48,
      color: 'var(--bk-content-default)',
      letterSpacing: '-0.02em'
    }
  }, "bankaool"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--bk-font-display)',
      fontWeight: 700,
      fontSize: 48,
      color: 'var(--bk-blue-400)',
      letterSpacing: '-0.02em'
    }
  }, "ID")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--bk-font-body)',
      fontSize: 11,
      color: 'var(--bk-content-secondary)'
    }
  }, "Approved by"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: 'var(--bk-blue-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--bk-font-body)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--bk-content-default)'
    }
  }, "OMNi", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, "Security"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-body)',
      fontSize: 11,
      color: 'var(--bk-content-secondary)'
    }
  }, "Powered by OMNi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-body)',
      fontSize: 11,
      color: 'var(--bk-content-secondary)'
    }
  }, "Versi\xF3n 2.47.47.22")));
};
const LoginScreen = ({
  onLogin
}) => {
  const [pin, setPin] = React.useState('');
  React.useEffect(() => {
    if (pin.length === 6) {
      const t = setTimeout(onLogin, 350);
      return () => clearTimeout(t);
    }
  }, [pin]);
  const press = n => setPin(p => p.length < 6 ? p + n : p);
  const back = () => setPin(p => p.slice(0, -1));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--bk-bg-base-200)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(BkAppBar, {
    onClose: () => {},
    headphones: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 24px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-display)',
      fontWeight: 700,
      fontSize: 28,
      lineHeight: '32px',
      color: 'var(--bk-content-default)'
    }
  }, "Hola, Margarita"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-body)',
      fontSize: 14,
      color: 'var(--bk-content-secondary)'
    }
  }, "Ingresa tu PIN para continuar")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center'
    }
  }, Array.from({
    length: 6
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: i < pin.length ? 'var(--bk-primary)' : 'transparent',
      border: '1.5px solid var(--bk-primary)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 10,
      maxWidth: 320,
      margin: '0 auto',
      width: '100%'
    }
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => press(String(n)),
    style: {
      height: 56,
      background: 'var(--bk-bg-base-100)',
      border: '1px solid var(--bk-border-subtle)',
      borderRadius: 16,
      fontFamily: 'var(--bk-font-display-alt)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--bk-content-default)',
      cursor: 'pointer'
    }
  }, n)), /*#__PURE__*/React.createElement("button", {
    style: {
      height: 56,
      background: 'transparent',
      border: 0,
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      color: 'var(--bk-content-default)'
    }
  }, /*#__PURE__*/React.createElement(BkIcon, {
    name: "fingerprint",
    size: 24
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => press('0'),
    style: {
      height: 56,
      background: 'var(--bk-bg-base-100)',
      border: '1px solid var(--bk-border-subtle)',
      borderRadius: 16,
      fontFamily: 'var(--bk-font-display-alt)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--bk-content-default)',
      cursor: 'pointer'
    }
  }, "0"), /*#__PURE__*/React.createElement("button", {
    onClick: back,
    style: {
      height: 56,
      background: 'transparent',
      border: 0,
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      color: 'var(--bk-content-default)'
    }
  }, /*#__PURE__*/React.createElement(BkIcon, {
    name: "close",
    size: 22
  })))));
};

// ── Home dashboard ─────────────────────────────────────
const HomeScreen = ({
  hidden,
  onToggleHidden,
  onCardClick,
  onMovementClick
}) => {
  const movements = [{
    id: 1,
    dir: 'in',
    t: 'Spotify México',
    s: 'Hoy &middot; 18:42',
    a: '$ 1,450.00'
  }, {
    id: 2,
    dir: 'out',
    t: 'Oxxo Polanco',
    s: 'Hoy &middot; 11:05',
    a: '$ 132.50'
  }, {
    id: 3,
    dir: 'out',
    t: 'Rappi pedido #4823',
    s: 'Ayer &middot; 22:18',
    a: '$ 287.90'
  }, {
    id: 4,
    dir: 'in',
    t: 'Margarita G. transferencia',
    s: 'Ayer &middot; 14:00',
    a: '$ 3,200.00'
  }, {
    id: 5,
    dir: 'out',
    t: 'CFE recibo de luz',
    s: '12 ene &middot; 09:30',
    a: '$ 845.00'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--bk-bg-base-200)',
      overflow: 'auto',
      paddingBottom: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bk-gradient-primary)',
      padding: '8px 0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(BkAvatar, {
    initials: "MG",
    size: 40,
    bg: "var(--bk-accent)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-body)',
      fontSize: 12,
      color: 'var(--bk-content-secondary)'
    }
  }, "Hola,"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-display-alt)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--bk-content-default)'
    }
  }, "Margarita"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(BkIconButton, {
    name: "bell",
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 4,
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--bk-error)',
      border: '2px solid var(--bk-bg-base-200)'
    }
  })), /*#__PURE__*/React.createElement(BkIconButton, {
    name: "qr",
    size: 40
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(BkBalanceCard, {
    balance: "$ 24,650.50",
    account: "Cuenta debito \xB7 **** 4231",
    hidden: hidden,
    onToggle: onToggleHidden
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(BkShortcutBar, {
    items: [{
      id: 'send',
      icon: 'send',
      label: 'Enviar'
    }, {
      id: 'pay',
      icon: 'qr',
      label: 'Pagar'
    }, {
      id: 'recv',
      icon: 'arrowDownLeft',
      label: 'Recibir'
    }, {
      id: 'save',
      icon: 'piggy',
      label: 'Ahorrar'
    }],
    onPick: () => {}
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '0 20px 8px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-display-alt)',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: '22px',
      color: 'var(--bk-content-default)'
    }
  }, "Movimientos recientes"), /*#__PURE__*/React.createElement("button", {
    onClick: onMovementClick,
    style: {
      background: 'transparent',
      border: 0,
      fontFamily: 'var(--bk-font-body)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--bk-content-default)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      padding: 0
    }
  }, "Ver todos")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bk-bg-base-100)',
      border: '1px solid var(--bk-border-subtle)',
      borderRadius: 16,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, movements.map((m, i) => /*#__PURE__*/React.createElement(BkMovement, {
    key: m.id,
    direction: m.dir,
    title: m.t,
    subtitle: /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: m.s
      }
    }),
    amount: m.a,
    divider: i < movements.length - 1
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onCardClick,
    style: {
      background: 'var(--bk-info-pastel)',
      border: '1px solid var(--bk-info-pastel-border)',
      borderRadius: 16,
      padding: 16,
      display: 'flex',
      gap: 12,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(BkIcon, {
    name: "info",
    size: 22,
    style: {
      color: 'var(--bk-on-info-pastel)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-display-alt)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--bk-on-info-pastel)'
    }
  }, "Activa tu nueva tarjeta f\xEDsica"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bk-font-body)',
      fontSize: 13,
      color: 'var(--bk-on-info-pastel)',
      marginTop: 2
    }
  }, "Te lleg\xF3 hace 2 d\xEDas. Tarda 3 minutos.")), /*#__PURE__*/React.createElement(BkIcon, {
    name: "chevRight",
    size: 20,
    style: {
      color: 'var(--bk-on-info-pastel)'
    }
  })))));
};

// ── Account detail (full transactions list) ────────────
const MovementsScreen = ({
  onBack
}) => {
  const groups = [{
    date: 'Hoy',
    items: [{
      dir: 'in',
      t: 'Spotify México',
      s: '18:42 &middot; Folio 8312',
      a: '$ 1,450.00'
    }, {
      dir: 'out',
      t: 'Oxxo Polanco',
      s: '11:05 &middot; Folio 8310',
      a: '$ 132.50'
    }]
  }, {
    date: 'Ayer',
    items: [{
      dir: 'out',
      t: 'Rappi pedido #4823',
      s: '22:18 &middot; Folio 8298',
      a: '$ 287.90'
    }, {
      dir: 'in',
      t: 'Margarita González',
      s: '14:00 &middot; Folio 8290',
      a: '$ 3,200.00'
    }, {
      dir: 'out',
      t: 'Uber México',
      s: '08:45 &middot; Folio 8287',
      a: '$ 95.00'
    }]
  }, {
    date: '12 ene 2025',
    items: [{
      dir: 'out',
      t: 'CFE recibo de luz',
      s: '09:30 &middot; Folio 8270',
      a: '$ 845.00'
    }, {
      dir: 'in',
      t: 'Reembolso Amazon',
      s: '08:12 &middot; Folio 8268',
      a: '$ 412.00'
    }]
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--bk-bg-base-200)',
      overflow: 'auto',
      paddingBottom: 140
    }
  }, /*#__PURE__*/React.createElement(BkAppBar, {
    title: "Movimientos",
    onBack: onBack,
    large: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 12px',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(BkChip, {
    tone: "dark",
    size: "md"
  }, "Todos"), /*#__PURE__*/React.createElement(BkChip, {
    size: "md"
  }, "Ingresos"), /*#__PURE__*/React.createElement(BkChip, {
    size: "md"
  }, "Egresos"), /*#__PURE__*/React.createElement(BkChip, {
    size: "md"
  }, "Pendientes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      paddingTop: 4
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.date
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px 8px',
      fontFamily: 'var(--bk-font-display-alt)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--bk-content-secondary)'
    }
  }, g.date), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bk-bg-base-100)',
      border: '1px solid var(--bk-border-subtle)',
      borderRadius: 16,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, g.items.map((m, i) => /*#__PURE__*/React.createElement(BkMovement, {
    key: i,
    direction: m.dir,
    title: m.t,
    subtitle: /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: m.s
      }
    }),
    amount: m.a,
    divider: i < g.items.length - 1
  })))))));
};

// ── Settings — sectioned list ──────────────────────────
const SettingsScreen = ({
  onBack,
  onLogout
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    background: 'var(--bk-bg-base-200)',
    overflow: 'auto',
    paddingBottom: 140
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'var(--bk-gradient-primary)',
    paddingBottom: 16
  }
}, /*#__PURE__*/React.createElement(BkAppBar, {
  title: "Configuraciones",
  onBack: onBack,
  large: true
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 22,
    paddingTop: 16
  }
}, /*#__PURE__*/React.createElement(BkCardGroup, {
  title: "Seguridad"
}, /*#__PURE__*/React.createElement(BkListTile, {
  icon: "shield",
  title: "Cambiar PIN",
  supporting: "\xDAltima vez hace 3 meses",
  onClick: () => {}
}), /*#__PURE__*/React.createElement(BkListTile, {
  icon: "fingerprint",
  title: "Inicio con biom\xE9trico",
  supporting: "Face ID activado",
  trailing: /*#__PURE__*/React.createElement(BkChip, {
    tone: "success"
  }, "Activo")
}), /*#__PURE__*/React.createElement(BkListTile, {
  icon: "phone",
  title: "Dispositivos vinculados",
  supporting: "2 dispositivos"
}), /*#__PURE__*/React.createElement(BkListTile, {
  icon: "bell",
  title: "Alertas de seguridad",
  supporting: "Por correo y push"
})), /*#__PURE__*/React.createElement(BkCardGroup, {
  title: "App"
}, /*#__PURE__*/React.createElement(BkListTile, {
  icon: "globe",
  title: "Idioma",
  supporting: "Espa\xF1ol (M\xE9xico)"
}), /*#__PURE__*/React.createElement(BkListTile, {
  icon: "card",
  title: "Cuenta predeterminada",
  supporting: "D\xE9bito **** 4231"
})), /*#__PURE__*/React.createElement(BkCardGroup, {
  title: "Legal"
}, /*#__PURE__*/React.createElement(BkListTile, {
  icon: "doc",
  title: "T\xE9rminos y condiciones"
}), /*#__PURE__*/React.createElement(BkListTile, {
  icon: "doc",
  title: "Aviso de privacidad"
}), /*#__PURE__*/React.createElement(BkListTile, {
  icon: "doc",
  title: "Contratos vigentes",
  supporting: "3 documentos"
})), /*#__PURE__*/React.createElement(BkCardGroup, {
  title: "Ayuda"
}, /*#__PURE__*/React.createElement(BkListTile, {
  icon: "headphones",
  title: "Contactar a soporte",
  supporting: "Disponible 24/7"
}), /*#__PURE__*/React.createElement(BkListTile, {
  icon: "help",
  title: "Preguntas frecuentes"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '8px 16px 16px'
  }
}, /*#__PURE__*/React.createElement(BkButton, {
  variant: "outlined",
  full: true,
  onClick: onLogout
}, "Cerrar sesi\xF3n"))));

// ── Success / mascot empty state ───────────────────────
const SuccessScreen = ({
  onBack,
  onConfirm
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    background: 'var(--bk-bg-base-200)',
    display: 'flex',
    flexDirection: 'column'
  }
}, /*#__PURE__*/React.createElement(BkAppBar, {
  onBack: onBack,
  onClose: onBack
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 32px',
    textAlign: 'center',
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 200,
    height: 200,
    display: 'grid',
    placeItems: 'center'
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/illustrations/ajool-3d.png",
  style: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--bk-font-display)',
    fontWeight: 700,
    fontSize: 26,
    lineHeight: '30px',
    color: 'var(--bk-content-default)'
  }
}, "\xA1Operaci\xF3n exitosa!"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--bk-font-body)',
    fontSize: 16,
    lineHeight: '22px',
    color: 'var(--bk-content-secondary)',
    maxWidth: 280
  }
}, "Tu transferencia de $3,200.00 a Margarita G. se realiz\xF3 correctamente."), /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'var(--bk-info-pastel)',
    border: '1px solid var(--bk-info-pastel-border)',
    borderRadius: 16,
    padding: '12px 14px',
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
    textAlign: 'left',
    maxWidth: 320
  }
}, /*#__PURE__*/React.createElement(BkIcon, {
  name: "info",
  size: 20,
  style: {
    color: 'var(--bk-on-info-pastel)',
    flex: '0 0 auto',
    marginTop: 2
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--bk-font-body)',
    fontSize: 13,
    color: 'var(--bk-on-info-pastel)'
  }
}, "Folio ", /*#__PURE__*/React.createElement("strong", {
  style: {
    fontFamily: 'var(--bk-font-mono)'
  }
}, "PS-BE-83214")))), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '0 16px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }
}, /*#__PURE__*/React.createElement(BkButton, {
  variant: "filled",
  full: true,
  onClick: onConfirm
}, "Compartir"), /*#__PURE__*/React.createElement(BkButton, {
  variant: "outlined",
  full: true,
  onClick: onBack
}, "Volver al inicio")));
Object.assign(window, {
  SplashScreen,
  LoginScreen,
  HomeScreen,
  MovementsScreen,
  SettingsScreen,
  SuccessScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens.jsx", error: String((e && e.message) || e) }); }

})();
