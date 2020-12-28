class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string' ?
        document.querySelector(selector) :
        selector;    
    }
    html(html) {
        if(typeof(html) === 'string') {
            this.$el.innerHTML = html;
            return this;
        }
        return this.$el.outerHTML.trim();
    }
    clear(){
        this.html('');
        return this;
    }
    append(node){
        if(node instanceof Dom){
            node = node.$el
        }
        if(Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this;
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tag, className) => {
    const el = document.createElement(tag);
    if(className){
        el.classList.add(className);
    }
    return $(el);
}
