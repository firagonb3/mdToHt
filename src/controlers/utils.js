export function $(element) {
    const self = {
        e: element === document ? document : document.querySelector(element),
        ready: (func) => self.e.addEventListener('DOMContentLoaded', func),
        on: (type, func) => self.e.addEventListener(type, func),
        setLocalStorage: (namedata) => window.localStorage.setItem(namedata, self.e.value),
        getLocalStorage: (namedata) => self.e.value = window.localStorage.getItem(namedata) || "",
        addHTML: (DOM) => self.e.innerHTML = DOM,
    }
    return self;
}