import { h as escape_html, j as store_get, u as unsubscribe_stores, e as pop, p as push } from './index3-DkBSGUoC.js';
import { p as page } from './stores-CjN4l2Ou.js';
import './exports-BGi7-Rnc.js';

function Error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <p>${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</p>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { Error as default };
//# sourceMappingURL=error.svelte-CR364CIt.js.map
