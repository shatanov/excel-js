class Dom {
    constructor(selector) {
        this.$el = typeof('string') ?
        document.querySelector(selector) :
        selector;    
    }
    html(html) {
        if(typeof(html) === 'string') {
            this.$el.innerHTML = html;
        }
        return this.$el.outerHTML.trim();
    }
    append(){

    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tag, className) => {
    const el = document.createElement(tag);
    if(className){
        el.classList.add(className)
    }
    return el
}
