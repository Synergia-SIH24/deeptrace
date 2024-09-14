import { k as rest_props, l as fallback, m as spread_attributes, n as slot, o as bind_props, f as pop, q as sanitize_props, p as push } from "../../../chunks/index3.js";
import { c as cn, d as default_slot } from "../../../chunks/utils.js";
import "clsx";
function Card($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes({
    class: cn("bg-card text-card-foreground rounded-lg border shadow-sm", className),
    ...$$restProps
  })}><!---->`;
  slot($$payload, default_slot($$props), {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
function _layout($$payload, $$props) {
  push();
  const { children } = $$props;
  Card($$payload, {
    class: "mx-auto max-w-sm max-h-sm mt-[3.6rem] p-3 card-backdrop",
    children: ($$payload2) => {
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  _layout as default
};
