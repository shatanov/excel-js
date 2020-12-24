export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.component = options.component || [];
    }

    getRoot() {
        const $root = document.createElement('div');
        this.component.forEach( (Component) => {
            const component = new Component();
            console.log(component)
            // $root.insertAdjacentElement('beforeend', component.toHTML())
        })
         return $root
    }

    render() {
        this.$el.append(this.getRoot())
    }
}