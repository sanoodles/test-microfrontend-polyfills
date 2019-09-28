# TestAngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3.

If memory serves, the findings so far have been:

* Angular client + Stencil 1.x WC + Stencil 0.15 WC + core-js es7 reflect = works on Chrome but not on IE
* Angular client + Stencil 0.15 WC + Stencil 0.15 WC + core-js es7 reflect = works on IE but not on Chrome
* Angular client + Stencil 0.15 WC + Stencil 0.15 WC = works on Chrome and IE

## TODO

Try the above ones again with PoC WCs in this repo

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
