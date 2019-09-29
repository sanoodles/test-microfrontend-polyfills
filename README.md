# Findings

* Stencil 0.15 adds document-register-element
* Stencil 1.x WC adds Polymer
* Both document-register-element and Polymer try to polyfill window.CustomElementRegistry, and *iff* Polymer tries second, fails on IE with error:
  * `SCRIPT5045: Assignment to read-only properties is not allowed in strict mode`
  * Example: Angular client + Stencil 0.15 WC via `<script>` + Stencil 1.x WC via `<script>`
* core-js/es7/reflect overwrites window.customElements.define even for Chrome
* Stencil 0.15's `defineCustomElement` relies on the native definition for compatibility with Chrome
* *Iff* `defineCustomElement` is called after loading core-js/es7/reflect, fails on Chrome with error:
  * `Uncaught TypeError: Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`
  * Example: Angular client + core-js/es7/reflect + Stencil 0.15 WC via `defineCustomElement`
  * If the WC is loaded via `<script>`, it works
