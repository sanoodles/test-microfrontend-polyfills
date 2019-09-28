/*! Built with http://stenciljs.com */
wc1.loadBundle('wc-one', ['exports'], function (exports) {
    var h = window.wc1.h;
    function format(first, middle, last) {
        return ((first || '') +
            (middle ? " " + middle : '') +
            (last ? " " + last : ''));
    }
    var MyComponent = /** @class */ (function () {
        function MyComponent() {
        }
        MyComponent.prototype.getText = function () {
            return format(this.first, this.middle, this.last);
        };
        MyComponent.prototype.render = function () {
            return h("p", { class: "wc-one" }, "Web component 1. With Stencil 0.15.1. getText() is: ", this.getText());
        };
        Object.defineProperty(MyComponent, "is", {
            get: function () { return "wc-one"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MyComponent, "encapsulation", {
            get: function () { return "shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MyComponent, "properties", {
            get: function () {
                return {
                    "first": {
                        "type": String,
                        "attr": "first"
                    },
                    "last": {
                        "type": String,
                        "attr": "last"
                    },
                    "middle": {
                        "type": String,
                        "attr": "middle"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MyComponent, "style", {
            get: function () { return ".wc-one {\n    background-color: coral;\n    color: white;\n    display: inline-block;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    max-width: 200px;\n    padding: 2em;\n}"; },
            enumerable: true,
            configurable: true
        });
        return MyComponent;
    }());
    exports.WcOne = MyComponent;
    Object.defineProperty(exports, '__esModule', { value: true });
});
