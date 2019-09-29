/*! Built with http://stenciljs.com */
wc3.loadBundle('wc-three', ['exports'], function (exports) {
    var h = window.wc3.h;
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
            return h("p", { class: "wc-three" }, "Web component 3. Also with Stencil 0.15.1. getText() is: ", this.getText());
        };
        Object.defineProperty(MyComponent, "is", {
            get: function () { return "wc-three"; },
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
            get: function () { return ".wc-three {\n    background-color: deeppink;\n    color: white;\n    display: inline-block;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    max-width: 200px;\n    padding: 2em;\n}"; },
            enumerable: true,
            configurable: true
        });
        return MyComponent;
    }());
    exports.WcThree = MyComponent;
    Object.defineProperty(exports, '__esModule', { value: true });
});
