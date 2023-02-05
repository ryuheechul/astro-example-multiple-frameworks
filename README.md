# astro-example-multiple-frameworks

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/github-tkuvgl)

This code is based on https://astro.new/framework-multiple?on=github or https://github.com/withastro/astro/tree/latest/examples/framework-multiple

But I made to few changes to prove some concepts:

1. multiple framework components are nested to each other to see if that works
2. add stro counter
3. pass function from both astro to svelte and svelte to svelte

regarding `3.`:

- svelte to svelte works
- but not astro to svelte [as the documentation already warned]

And below is it's original readme at the time of "forking"

---

# Kitchen Sink: Microfrontends with Astro

(https://docs.astro.build/en/core-concepts/framework-components/#passing-props-to-framework-components)

```
npm create astro@latest -- --template framework-multiple
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/framework-multiple)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/withastro/astro/tree/latest/examples/framework-multiple)

This example showcases Astro's built-in support for multiple frameworks ([React](https://reactjs.org), [Preact](https://preactjs.com), [Svelte](https://svelte.dev), and [Vue (`v3.x`)](https://v3.vuejs.org/)).

No configuration is needed to enable these frameworks—just start writing components in `src/components`.
