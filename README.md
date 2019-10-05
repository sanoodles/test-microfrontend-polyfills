# TestAngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3.

## Findings

* Stencil 0.15 adds document-register-element
* Stencil 1.x WC adds Polymer
* Both document-register-element and Polymer try to polyfill window.CustomElementRegistry, and *iff* Polymer tries second, fails on IE with error:
  * `SCRIPT5045: Assignment to read-only properties is not allowed in strict mode`
  * Example: Angular client + Stencil 0.15 WC via `<script>` + Stencil 1.x WC via `<script>`
  * Solution: Make both WC Stencil 0.15
* core-js/es7/reflect overwrites window.customElements.define even for Chrome
* Stencil 0.15's `defineCustomElement` relies on the native definition for compatibility with Chrome
* *Iff* `defineCustomElement` is called after loading core-js/es7/reflect, fails on Chrome with error:
  * `Uncaught TypeError: Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`
  * Example: Angular client + core-js/es7/reflect + Stencil 0.15 WC via `defineCustomElement`
  * Solutions:
    * Load the WC(s) via `<script>`
    * Not use core-js/es7/reflect

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
