/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<
    Record<string, never>, // props：不允许任何 prop
    object, // raw bindings：任意对象
    unknown
  >;
  export default component;
}
