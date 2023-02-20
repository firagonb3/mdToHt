const body = document.querySelector('body');
DOMcreate();

const header = document.querySelector('header');
const main = document.querySelector('main');

export function addViewHeader(view) {
    header.innerHTML += view;
}

export function addViewMain(view) {
    main.innerHTML += view;
}

export function DOMcreate() {
    body.innerHTML = "<header></header>";
    body.innerHTML += "<main></main>";
}