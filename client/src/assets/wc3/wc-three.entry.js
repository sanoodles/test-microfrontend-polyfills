/*! Built with http://stenciljs.com */
const { h } = window.wc3;

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

class MyComponent {
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("p", { class: "wc-three" },
            "Web component 3. Also with Stencil 0.15.1. getText() is: ",
            this.getText());
    }
    static get is() { return "wc-three"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
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
    }; }
    static get style() { return ".wc-three {\n    background-color: deeppink;\n    color: white;\n    display: inline-block;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    max-width: 200px;\n    padding: 2em;\n}"; }
}

export { MyComponent as WcThree };
