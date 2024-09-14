import { k as rest_props, p as push, l as fallback, m as spread_attributes, n as slot, o as bind_props, e as pop, q as sanitize_props, A as element, x as spread_props, t as copy_payload, v as assign_payload, j as store_get, u as unsubscribe_stores, C as invalid_default_snippet, D as ensure_array_like, s as setContext, B as getContext } from './index3-DkBSGUoC.js';
import { t as twMerge, e as extendTailwindMerge, c as cn, d as default_slot } from './utils-Dl3k8kxZ.js';
import { d as derived, r as readable, g as get, w as writable } from './index2-D-UKSemM.js';

var l=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,u=e=>!e||typeof e!="object"||Object.keys(e).length===0,x=(e,o)=>JSON.stringify(e)===JSON.stringify(o);function i(e,o){e.forEach(function(r){Array.isArray(r)?i(r,o):o.push(r);});}function y(e){let o=[];return i(e,o),o}var a=(...e)=>y(e).filter(Boolean),p=(e,o)=>{let r={},c=Object.keys(e),f=Object.keys(o);for(let t of c)if(f.includes(t)){let s=e[t],n=o[t];typeof s=="object"&&typeof n=="object"?r[t]=p(s,n):Array.isArray(s)||Array.isArray(n)?r[t]=a(n,s):r[t]=n+" "+s;}else r[t]=e[t];for(let t of f)c.includes(t)||(r[t]=o[t]);return r},g=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim();

var ie={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},_=s=>s||void 0,M=(...s)=>_(y(s).filter(Boolean).join(" ")),R=null,v={},q=!1,j=(...s)=>b$1=>b$1.twMerge?((!R||q)&&(q=!1,R=u(v)?twMerge:extendTailwindMerge({...v,extend:{theme:v.theme,classGroups:v.classGroups,conflictingClassGroupModifiers:v.conflictingClassGroupModifiers,conflictingClassGroups:v.conflictingClassGroups,...v.extend}})),_(R(M(s)))):M(s),Z=(s,b)=>{for(let e in b)s.hasOwnProperty(e)?s[e]=M(s[e],b[e]):s[e]=b[e];return s},ce=(s,b$1)=>{let{extend:e=null,slots:N={},variants:F={},compoundVariants:U=[],compoundSlots:C=[],defaultVariants:W={}}=s,m={...ie,...b$1},S=e!=null&&e.base?M(e.base,s==null?void 0:s.base):s==null?void 0:s.base,g$1=e!=null&&e.variants&&!u(e.variants)?p(F,e.variants):F,A=e!=null&&e.defaultVariants&&!u(e.defaultVariants)?{...e.defaultVariants,...W}:W;!u(m.twMergeConfig)&&!x(m.twMergeConfig,v)&&(q=!0,v=m.twMergeConfig);let O=u(e==null?void 0:e.slots),$=u(N)?{}:{base:M(s==null?void 0:s.base,O&&(e==null?void 0:e.base)),...N},w=O?$:Z({...e==null?void 0:e.slots},u($)?{base:s==null?void 0:s.base}:$),h$1=u(e==null?void 0:e.compoundVariants)?U:a(e==null?void 0:e.compoundVariants,U),V=f=>{if(u(g$1)&&u(N)&&O)return j(S,f==null?void 0:f.class,f==null?void 0:f.className)(m);if(h$1&&!Array.isArray(h$1))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof h$1}`);if(C&&!Array.isArray(C))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof C}`);let K=(t,n,a=[],i)=>{let r=a;if(typeof n=="string")r=r.concat(g(n).split(" ").map(o=>`${t}:${o}`));else if(Array.isArray(n))r=r.concat(n.reduce((o,c)=>o.concat(`${t}:${c}`),[]));else if(typeof n=="object"&&typeof i=="string"){for(let o in n)if(n.hasOwnProperty(o)&&o===i){let c=n[o];if(c&&typeof c=="string"){let l=g(c);r[i]?r[i]=r[i].concat(l.split(" ").map(u=>`${t}:${u}`)):r[i]=l.split(" ").map(u=>`${t}:${u}`);}else Array.isArray(c)&&c.length>0&&(r[i]=c.reduce((l,u)=>l.concat(`${t}:${u}`),[]));}}return r},z=(t,n=g$1,a$1=null,i=null)=>{var J;let r=n[t];if(!r||u(r))return null;let o=(J=i==null?void 0:i[t])!=null?J:f==null?void 0:f[t];if(o===null)return null;let c=l(o),l$1=Array.isArray(m.responsiveVariants)&&m.responsiveVariants.length>0||m.responsiveVariants===!0,u$1=A==null?void 0:A[t],d=[];if(typeof c=="object"&&l$1)for(let[T,L]of Object.entries(c)){let ne=r[L];if(T==="initial"){u$1=L;continue}Array.isArray(m.responsiveVariants)&&!m.responsiveVariants.includes(T)||(d=K(T,ne,d,a$1));}let ae=c!=null&&typeof c!="object"?c:l(u$1),k=r[ae||"false"];return typeof d=="object"&&typeof a$1=="string"&&d[a$1]?Z(d,k):d.length>0?(d.push(k),d):k},P=()=>g$1?Object.keys(g$1).map(t=>z(t,g$1)):null,p=(t,n)=>{if(!g$1||typeof g$1!="object")return null;let a=new Array;for(let i in g$1){let r=z(i,g$1,t,n),o=t==="base"&&typeof r=="string"?r:r&&r[t];o&&(a[a.length]=o);}return a},D={};for(let t in f)f[t]!==void 0&&(D[t]=f[t]);let H=(t,n)=>{var i;let a=typeof(f==null?void 0:f[t])=="object"?{[t]:(i=f[t])==null?void 0:i.initial}:{};return {...A,...D,...a,...n}},I=(t=[],n)=>{let a=[];for(let{class:i,className:r,...o}of t){let c=!0;for(let[l,u]of Object.entries(o)){let d=H(l,n);if(Array.isArray(u)){if(!u.includes(d[l])){c=!1;break}}else if(d[l]!==u){c=!1;break}}c&&(i&&a.push(i),r&&a.push(r));}return a},ee=t=>{let n=I(h$1,t);if(!Array.isArray(n))return n;let a={};for(let i of n)if(typeof i=="string"&&(a.base=j(a.base,i)(m)),typeof i=="object")for(let[r,o]of Object.entries(i))a[r]=j(a[r],o)(m);return a},te=t=>{if(C.length<1)return null;let n={};for(let{slots:a=[],class:i,className:r,...o}of C){if(!u(o)){let c=!0;for(let l of Object.keys(o)){let u=H(l,t)[l];if(u===void 0||(Array.isArray(o[l])?!o[l].includes(u):o[l]!==u)){c=!1;break}}if(!c)continue}for(let c of a)n[c]=n[c]||[],n[c].push([i,r]);}return n};if(!u(N)||!O){let t={};if(typeof w=="object"&&!u(w))for(let n of Object.keys(w))t[n]=a=>{var i,r;return j(w[n],p(n,a),((i=ee(a))!=null?i:[])[n],((r=te(a))!=null?r:[])[n],a==null?void 0:a.class,a==null?void 0:a.className)(m)};return t}return j(S,P(),I(h$1),f==null?void 0:f.class,f==null?void 0:f.className)(m)},x$1=()=>{if(!(!g$1||typeof g$1!="object"))return Object.keys(g$1)};return V.variantKeys=x$1(),V.extend=e,V.base=S,V.slots=w,V.variants=g$1,V.defaultVariants=A,V.compoundSlots=C,V.compoundVariants=h$1,V};

function Card_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes({
    class: cn("p-6 pt-0", className),
    ...$$restProps
  })}><!---->`;
  slot($$payload, default_slot($$props), {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_header($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes({
    class: cn("flex flex-col space-y-1.5 p-6", className),
    ...$$restProps
  })}><!---->`;
  slot($$payload, default_slot($$props), {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_title($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "tag"]);
  push();
  let className = fallback($$props["class"], void 0);
  let tag = fallback($$props["tag"], "h3");
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes({
        class: cn("text-lg font-semibold leading-none tracking-tight", className),
        ...$$restProps
      })}`;
    },
    () => {
      $$payload.out += `<!---->`;
      slot($$payload, default_slot($$props), {});
      $$payload.out += `<!---->`;
    }
  );
  bind_props($$props, { class: className, tag });
  pop();
}
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
function disabledAttr(disabled) {
  return disabled ? true : void 0;
}
({
  type: "hidden",
  "aria-hidden": true,
  hidden: true,
  tabIndex: -1,
  style: styleToString({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function lightable(value) {
  function subscribe(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
makeElement("empty");
function makeElement(name, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function isHTMLElement(element2) {
  return element2 instanceof HTMLElement;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function noop() {
}
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function addMeltEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  if (typeof handler === "function") {
    const handlerWithMelt = withMelt((_event) => handler(_event));
    events.forEach((_event) => target.addEventListener(_event, handlerWithMelt, options));
    return () => {
      events.forEach((_event) => target.removeEventListener(_event, handlerWithMelt, options));
    };
  }
  return () => noop();
}
function dispatchMeltEvent(originalEvent) {
  const node = originalEvent.currentTarget;
  if (!isHTMLElement(node))
    return null;
  const customMeltEvent = new CustomEvent(`m-${originalEvent.type}`, {
    detail: {
      originalEvent
    },
    cancelable: true
  });
  node.dispatchEvent(customMeltEvent);
  return customMeltEvent;
}
function withMelt(handler) {
  return (event) => {
    const customEvent = dispatchMeltEvent(event);
    if (customEvent?.defaultPrevented)
      return;
    return handler(event);
  };
}
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function withGet(store) {
  return {
    ...store,
    get: () => get(store)
  };
}
withGet.writable = function(initial) {
  const internal = writable(initial);
  let value = initial;
  return {
    subscribe: internal.subscribe,
    set(newValue) {
      internal.set(newValue);
      value = newValue;
    },
    update(updater) {
      const newValue = updater(value);
      internal.set(newValue);
      value = newValue;
    },
    get() {
      return value;
    }
  };
};
withGet.derived = function(stores, fn) {
  const subscribers = /* @__PURE__ */ new Map();
  const get2 = () => {
    const values = Array.isArray(stores) ? stores.map((store) => store.get()) : stores.get();
    return fn(values);
  };
  const subscribe = (subscriber) => {
    const unsubscribers = [];
    const storesArr = Array.isArray(stores) ? stores : [stores];
    storesArr.forEach((store) => {
      unsubscribers.push(store.subscribe(() => {
        subscriber(get2());
      }));
    });
    subscriber(get2());
    subscribers.set(subscriber, unsubscribers);
    return () => {
      const unsubscribers2 = subscribers.get(subscriber);
      if (unsubscribers2) {
        for (const unsubscribe of unsubscribers2) {
          unsubscribe();
        }
      }
      subscribers.delete(subscriber);
    };
  };
  return {
    get: get2,
    subscribe
  };
};
const overridable = (_store, onChange) => {
  const store = withGet(_store);
  const update = (updater, sideEffect) => {
    store.update((curr) => {
      const next = updater(curr);
      let res = next;
      if (onChange) {
        res = onChange({ curr, next });
      }
      sideEffect?.(res);
      return res;
    });
  };
  const set = (curr) => {
    update(() => curr);
  };
  return {
    ...store,
    update,
    set
  };
};
const kbd = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p"
};
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = withGet(writable(value));
  });
  return result;
}
const defaults$1 = {
  disabled: false,
  required: false,
  name: void 0,
  value: "on",
  defaultChecked: false
};
function createCheckbox(props) {
  const withDefaults = { ...defaults$1, ...props };
  const options = toWritableStores(omit(withDefaults, "checked", "defaultChecked"));
  const { disabled, name, required, value } = options;
  const checkedWritable = withDefaults.checked ?? writable(withDefaults.defaultChecked);
  const checked = overridable(checkedWritable, withDefaults?.onCheckedChange);
  const root = makeElement("checkbox", {
    stores: [checked, disabled, required],
    returned: ([$checked, $disabled, $required]) => {
      return {
        "data-disabled": disabledAttr($disabled),
        disabled: disabledAttr($disabled),
        "data-state": $checked === "indeterminate" ? "indeterminate" : $checked ? "checked" : "unchecked",
        type: "button",
        role: "checkbox",
        "aria-checked": $checked === "indeterminate" ? "mixed" : $checked,
        "aria-required": $required
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "keydown", (e) => {
        if (e.key === kbd.ENTER)
          e.preventDefault();
      }), addMeltEventListener(node, "click", () => {
        if (disabled.get())
          return;
        checked.update((value2) => {
          if (value2 === "indeterminate")
            return true;
          return !value2;
        });
      }));
      return {
        destroy: unsub
      };
    }
  });
  const input = makeElement("checkbox-input", {
    stores: [checked, name, value, required, disabled],
    returned: ([$checked, $name, $value, $required, $disabled]) => {
      return {
        type: "checkbox",
        "aria-hidden": true,
        hidden: true,
        tabindex: -1,
        name: $name,
        value: $value,
        checked: $checked === "indeterminate" ? false : $checked,
        required: $required,
        disabled: disabledAttr($disabled),
        style: styleToString({
          position: "absolute",
          opacity: 0,
          "pointer-events": "none",
          margin: 0,
          transform: "translateX(-100%)"
        })
      };
    }
  });
  const isIndeterminate = derived(checked, ($checked) => $checked === "indeterminate");
  const isChecked = derived(checked, ($checked) => $checked === true);
  return {
    elements: {
      root,
      input
    },
    states: {
      checked
    },
    helpers: {
      isIndeterminate,
      isChecked
    },
    options
  };
}
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "keydown", keydown, {
    passive: false
  });
  return unsubscribe;
});
({
  prefix: "",
  disabled: readable(false),
  required: readable(false),
  name: readable(void 0)
});
function createLabel() {
  const root = makeElement("label", {
    action: (node) => {
      const mouseDown = addMeltEventListener(node, "mousedown", (e) => {
        if (!e.defaultPrevented && e.detail > 1) {
          e.preventDefault();
        }
      });
      return {
        destroy: mouseDown
      };
    }
  });
  return {
    elements: {
      root
    }
  };
}
const defaults = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: false,
  numberOfMonths: 1,
  pagedNavigation: false,
  weekStartsOn: 0,
  fixedWeeks: false,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: false,
  readonly: false,
  weekdayFormat: "narrow"
};
({
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  positioning: {
    placement: "bottom"
  },
  closeOnEscape: true,
  closeOnOutsideClick: true,
  onOutsideClick: void 0,
  preventScroll: false,
  forceVisible: false,
  locale: "en",
  granularity: void 0,
  disabled: false,
  readonly: false,
  minValue: void 0,
  maxValue: void 0,
  weekdayFormat: "narrow",
  ...omit(defaults, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function getOptionUpdater(options) {
  return function(key, value) {
    if (value === void 0)
      return;
    const store = options[key];
    if (store) {
      store.set(value);
    }
  };
}
function getAttrs(builders) {
  const attrs = {};
  builders.forEach((builder) => {
    Object.keys(builder).forEach((key) => {
      if (key !== "action") {
        attrs[key] = builder[key];
      }
    });
  });
  return attrs;
}
function Button$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href", "type", "builders", "el"]);
  push();
  let href = fallback($$props["href"], () => void 0, true);
  let type = fallback($$props["type"], () => void 0, true);
  let builders = fallback($$props["builders"], () => [], true);
  let el = fallback($$props["el"], () => void 0, true);
  const attrs = { "data-button-root": "" };
  if (builders && builders.length) {
    $$payload.out += "<!--[-->";
    const $$tag = href ? "a" : "button";
    element(
      $$payload,
      $$tag,
      () => {
        $$payload.out += `${spread_attributes({
          type: href ? void 0 : type,
          href,
          tabindex: "0",
          ...getAttrs(builders),
          ...$$restProps,
          ...attrs
        })}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, default_slot($$props), {});
        $$payload.out += `<!---->`;
      }
    );
  } else {
    $$payload.out += "<!--[!-->";
    const $$tag_1 = href ? "a" : "button";
    element(
      $$payload,
      $$tag_1,
      () => {
        $$payload.out += `${spread_attributes({
          type: href ? void 0 : type,
          href,
          tabindex: "0",
          ...$$restProps,
          ...attrs
        })}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, default_slot($$props), {});
        $$payload.out += `<!---->`;
      }
    );
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { href, type, builders, el });
  pop();
}
function getCheckboxData() {
  const NAME = "checkbox";
  const PARTS = ["root", "input", "indicator"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getCheckboxData();
  const getAttrs2 = createBitAttrs(NAME, PARTS);
  const checkbox = { ...createCheckbox(removeUndefined(props)), getAttrs: getAttrs2 };
  setContext(NAME, checkbox);
  return {
    ...checkbox,
    updateOption: getOptionUpdater(checkbox.options)
  };
}
function getCtx() {
  const { NAME } = getCheckboxData();
  return getContext(NAME);
}
function Checkbox$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "checked",
    "disabled",
    "name",
    "required",
    "value",
    "onCheckedChange",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let attrs, builder;
  let checked = fallback($$props["checked"], false);
  let disabled = fallback($$props["disabled"], () => void 0, true);
  let name = fallback($$props["name"], () => void 0, true);
  let required = fallback($$props["required"], () => void 0, true);
  let value = fallback($$props["value"], () => void 0, true);
  let onCheckedChange = fallback($$props["onCheckedChange"], () => void 0, true);
  let asChild = fallback($$props["asChild"], false);
  let el = fallback($$props["el"], () => void 0, true);
  const {
    elements: { root },
    states: { checked: localChecked },
    updateOption,
    getAttrs: getAttrs2
  } = setCtx({
    defaultChecked: checked,
    disabled,
    name,
    required,
    value,
    onCheckedChange: ({ next }) => {
      if (checked !== next) {
        onCheckedChange?.(next);
        checked = next;
      }
      return next;
    }
  });
  attrs = {
    ...getAttrs2("root"),
    disabled: disabled ? true : void 0
  };
  checked !== void 0 && localChecked.set(checked);
  updateOption("disabled", disabled);
  updateOption("name", name);
  updateOption("required", required);
  updateOption("value", value);
  builder = store_get($$store_subs ??= {}, "$root", root);
  Object.assign(builder, attrs);
  if (asChild) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, default_slot($$props), { builder });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({ ...builder, type: "button", ...$$restProps })}><!---->`;
    slot($$payload, default_slot($$props), { builder });
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    checked,
    disabled,
    name,
    required,
    value,
    onCheckedChange,
    asChild,
    el
  });
  pop();
}
function Checkbox_indicator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "el"]);
  push();
  var $$store_subs;
  let attrs;
  let asChild = fallback($$props["asChild"], false);
  let el = fallback($$props["el"], () => void 0, true);
  const {
    helpers: { isChecked, isIndeterminate },
    states: { checked },
    getAttrs: getAttrs2
  } = getCtx();
  function getStateAttr(state) {
    if (state === "indeterminate") return "indeterminate";
    if (state) return "checked";
    return "unchecked";
  }
  attrs = {
    ...getAttrs2("indicator"),
    "data-state": getStateAttr(store_get($$store_subs ??= {}, "$checked", checked))
  };
  if (asChild) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot(
      $$payload,
      default_slot($$props),
      {
        attrs,
        isChecked: store_get($$store_subs ??= {}, "$isChecked", isChecked),
        isIndeterminate: store_get($$store_subs ??= {}, "$isIndeterminate", isIndeterminate)
      }
    );
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...$$restProps, ...attrs })}><!---->`;
    slot(
      $$payload,
      default_slot($$props),
      {
        attrs,
        isChecked: store_get($$store_subs ??= {}, "$isChecked", isChecked),
        isIndeterminate: store_get($$store_subs ??= {}, "$isIndeterminate", isIndeterminate)
      }
    );
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { asChild, el });
  pop();
}
function getLabelData() {
  const NAME = "label";
  const PARTS = ["root"];
  const getAttrs2 = createBitAttrs(NAME, PARTS);
  return {
    NAME,
    getAttrs: getAttrs2
  };
}
function Label$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "el"]);
  push();
  var $$store_subs;
  let builder;
  let asChild = fallback($$props["asChild"], false);
  let el = fallback($$props["el"], () => void 0, true);
  const { elements: { root } } = createLabel();
  const { getAttrs: getAttrs2 } = getLabelData();
  const attrs = getAttrs2("root");
  builder = store_get($$store_subs ??= {}, "$root", root);
  Object.assign(builder, attrs);
  if (asChild) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, default_slot($$props), { builder });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<label${spread_attributes({ ...builder, ...$$restProps })}><!---->`;
    slot($$payload, default_slot($$props), { builder });
    $$payload.out += `<!----></label>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { asChild, el });
  pop();
}
function Label($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  Label$1($$payload, spread_props([
    {
      class: cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)
    },
    $$restProps,
    {
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, default_slot($$props), {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, { class: className });
  pop();
}
function Input($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "readonly"]);
  push();
  let className = fallback($$props["class"], void 0);
  let value = fallback($$props["value"], void 0);
  let readonly = fallback($$props["readonly"], void 0);
  $$payload.out += `<input${spread_attributes({
    class: cn("border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
    value,
    readonly,
    ...$$restProps
  })}>`;
  bind_props($$props, { class: className, value, readonly });
  pop();
}
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "variant", "size", "builders"]);
  push();
  let className = fallback($$props["class"], void 0);
  let variant = fallback($$props["variant"], "default");
  let size = fallback($$props["size"], "default");
  let builders = fallback($$props["builders"], () => [], true);
  Button$1($$payload, spread_props([
    {
      builders,
      class: cn(buttonVariants({ variant, size, className })),
      type: "button"
    },
    $$restProps,
    {
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, default_slot($$props), {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, { class: className, variant, size, builders });
  pop();
}
const buttonVariants = ce({
  base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
/**
 * @license lucide-svelte v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  push();
  let name = fallback($$props["name"], void 0);
  let color = fallback($$props["color"], "currentColor");
  let size = fallback($$props["size"], 24);
  let strokeWidth = fallback($$props["strokeWidth"], 2);
  let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
  let iconNode = fallback($$props["iconNode"], () => [], true);
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...$$restProps,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class)
    },
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    const [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out += `${spread_attributes({ ...attrs }, void 0, void 0, 3)}`;
    });
  }
  $$payload.out += `<!--]--><!---->`;
  slot($$payload, default_slot($$props), {});
  $$payload.out += `<!----></svg>`;
  bind_props($$props, {
    name,
    color,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode
  });
  pop();
}
function Check($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  Icon($$payload, spread_props([
    { name: "check" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, default_slot($$props), {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Minus($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "M5 12h14" }]];
  Icon($$payload, spread_props([
    { name: "minus" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, default_slot($$props), {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Checkbox($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "checked"]);
  push();
  let className = fallback($$props["class"], void 0);
  let checked = fallback($$props["checked"], false);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Checkbox$1($$payload2, spread_props([
      {
        class: cn("border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer box-content h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50", className),
        get checked() {
          return checked;
        },
        set checked($$value) {
          checked = $$value;
          $$settled = false;
        }
      },
      $$restProps,
      {
        children: ($$payload3) => {
          Checkbox_indicator($$payload3, {
            class: cn("flex h-4 w-4 items-center justify-center text-current"),
            children: invalid_default_snippet,
            $$slots: {
              default: ($$payload4, { isChecked, isIndeterminate }) => {
                if (isChecked) {
                  $$payload4.out += "<!--[-->";
                  Check($$payload4, { class: "h-3.5 w-3.5" });
                } else {
                  $$payload4.out += "<!--[!-->";
                  if (isIndeterminate) {
                    $$payload4.out += "<!--[-->";
                    Minus($$payload4, { class: "h-3.5 w-3.5" });
                  } else {
                    $$payload4.out += "<!--[!-->";
                  }
                  $$payload4.out += `<!--]-->`;
                }
                $$payload4.out += `<!--]-->`;
              }
            }
          });
        },
        $$slots: { default: true }
      }
    ]));
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { class: className, checked });
  pop();
}
function Logo($$payload) {
  $$payload.out += `<svg class="mx-auto" width="100" height="100"><circle cx="50" cy="50" r="25" stroke="white" stroke-width="2" fill="none"></circle><line x1="20" y1="50" x2="80" y2="50" stroke="white" stroke-width="2"></line></svg>`;
}

export { Button as B, Card_header as C, Input as I, Label as L, Card_content as a, Card_title as b, ce as c, Checkbox as d, Logo as e, Icon as f };
//# sourceMappingURL=Logo-DCeBNQj2.js.map
