import { r as registerInstance, h } from './core-f4dc7a8f.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("p", { class: "wc-two" }, "Web Component 2. With latest Stencil 1.x. ", h("code", null, "getText()"), " is: ", this.getText());
    }
    static get style() { return ".wc-two {\n    background-color: crimson;\n    color: white;\n    display: inline-block;\n    font-family: \'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif;\n    max-width: 300px;\n    padding: 2em;\n}"; }
};

export { MyComponent as wc_two };
