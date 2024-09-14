import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function default_slot($$props) {
  var children = $$props.$$slots?.default;
  if (children === true) {
    return $$props.children;
  } else {
    return children;
  }
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export {
  cn as c,
  default_slot as d
};
