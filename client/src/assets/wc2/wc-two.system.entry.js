System.register(['./core-b64a7007.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            function format(first, middle, last) {
                return ((first || '') +
                    (middle ? " " + middle : '') +
                    (last ? " " + last : ''));
            }
            var MyComponent = exports('wc_two', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                }
                class_1.prototype.getText = function () {
                    return format(this.first, this.middle, this.last);
                };
                class_1.prototype.render = function () {
                    return h("p", { class: "wc-two" }, "Web Component 2. With latest Stencil 1.x. ", h("code", null, "getText()"), " is: ", this.getText());
                };
                Object.defineProperty(class_1, "style", {
                    get: function () { return ".wc-two {\n    background-color: crimson;\n    color: white;\n    display: inline-block;\n    font-family: \'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif;\n    max-width: 300px;\n    padding: 2em;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
