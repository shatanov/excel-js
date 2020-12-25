class Dom {

}

export function $() {
    return new Dom()
}

$.create = (tag, className) => {
    const el = document.createElement(tag);
    if(className){
        el.classList.add(className)
    }
    return el
}
