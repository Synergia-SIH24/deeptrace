import { w as spread_props, n as slot, q as sanitize_props, x as copy_payload, y as assign_payload, z as head } from "../../../../chunks/index3.js";
import { I as Icon, C as Card_header, a as Card_title, L as Logo, b as Card_content, c as Label, d as Input, e as Checkbox, B as Button } from "../../../../chunks/Logo.js";
import "clsx";
import { d as default_slot } from "../../../../chunks/utils.js";
function Milestone($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 13v8" }],
    ["path", { "d": "M12 3v3" }],
    [
      "path",
      {
        "d": "M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "milestone" },
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
function _page($$payload) {
  let checked = false;
  let password = "";
  let confirmPassword = "";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Register</title>`;
    });
    Card_header($$payload2, {
      class: "space-y-1",
      children: ($$payload3) => {
        Card_title($$payload3, {
          class: "text-2xl font-bold text-gradient",
          children: ($$payload4) => {
            Logo($$payload4);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Card_content($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<form method="POST" class="space-y-4"><div class="space-y-2">`;
        Label($$payload3, {
          for: "email",
          class: "text-gradient",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Email`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          name: "email",
          id: "email",
          placeholder: "abc@abc.com",
          type: "email",
          spellcheck: "false"
        });
        $$payload3.out += `<!----></div> <div class="space-y-2">`;
        Label($$payload3, {
          for: "password",
          class: "text-gradient",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Password`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          name: "password",
          id: "password",
          placeholder: checked ? "password" : "*&%#@!-;",
          type: checked ? "text" : "password",
          spellcheck: "false",
          get value() {
            return password;
          },
          set value($$value) {
            password = $$value;
            $$settled = false;
          }
        });
        $$payload3.out += `<!----></div> <div class="space-y-2">`;
        Label($$payload3, {
          for: "confirmPassword",
          class: "text-gradient",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Confirm password`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          name: "confirmPassword",
          id: "confirm-password",
          placeholder: checked ? "password" : "*&%#@!-;",
          type: checked ? "text" : "password",
          spellcheck: "false",
          get value() {
            return confirmPassword;
          },
          set value($$value) {
            confirmPassword = $$value;
            $$settled = false;
          }
        });
        $$payload3.out += `<!----></div> <div class="space-y-2"><div class="flex items-center space-x-2 mb-4">`;
        Checkbox($$payload3, {
          id: "terms",
          get checked() {
            return checked;
          },
          set checked($$value) {
            checked = $$value;
            $$settled = false;
          },
          "aria-labelledby": "terms-label"
        });
        $$payload3.out += `<!----> `;
        Label($$payload3, {
          id: "terms-label",
          for: "terms",
          class: "text-sm text-gray-500 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Show password?`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----></div></div> `;
        Button($$payload3, {
          class: "w-full bg-gradient",
          type: "submit",
          disabled: password !== confirmPassword,
          children: ($$payload4) => {
            Milestone($$payload4, { class: "mr-2 w-5" });
            $$payload4.out += `<!----> Register`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> <div class="mt-5 text-gray-500">`;
        Label($$payload3, {
          class: "font-normal",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Already have an account?`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> <a href="/login" class="text-sm text-primary cursor-pointer"><span class="text-gradient">Log In!</span></a></div></form>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
export {
  _page as default
};
