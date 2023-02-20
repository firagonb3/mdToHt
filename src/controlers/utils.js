export function $(element) {
    const self = {
        e: element === document ? document : document.querySelector(element), 
        setLocalStorage: (namedata) => window.localStorage.setItem(namedata, self.e.value),
        getLocalStorage: (namedata) => self.e.value = window.localStorage.getItem(namedata) || "",
        on: (type, func) => self.e.addEventListener(type, func),
        ready: (func) => self.e.addEventListener('DOMContentLoaded', func),
        addHTML: (DOM) => self.e.innerHTML = DOM,
    }
    return self;
}