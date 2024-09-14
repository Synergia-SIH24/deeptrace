import { f as pop, p as push } from "../../chunks/index3.js";
function _layout($$payload, $$props) {
  push();
  const { children } = $$props;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
