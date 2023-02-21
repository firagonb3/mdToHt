import { textarealayaut } from "../components/textarealayaut.js";
import { mdtoht } from '../../controlers/conver.js';
import { $ } from "../../controlers/utils.js";

export const idmd = "md";
export const idht = "ht";
const data = "makdown"

export const converMdToHt = textarealayaut({
    id1: idmd,
    id2: idht
});

$(document).ready(() => {
    $(`#${idmd}`).getLocalStorage(data);
    $(`#${idht}`).addHTML(mdtoht($(`#${idmd}`).e.value));

    $(`#${idmd}`).on('input', (e) => {
        $(`#${idht}`).addHTML(mdtoht(e.target.value));
    });
});