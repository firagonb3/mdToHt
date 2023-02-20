import { button } from "./button.js";

export function header(list){ 
    const btn = button(list.btnId, list.btnText);
    const btn2 = button(list.btn2Id, list.btn2Text);
    return `<div class='header'><h2>${list.Titel}</h2><div>${btn}${btn2}</div></div>`
}