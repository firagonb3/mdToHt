const { ipcRenderer } = require('electron');

import { textarealayaut } from "../components/textarealayaut.js";
import { mdtoht } from '../../controlers/conver.js';
import { $ } from "../../controlers/utils.js";

const md = "md";
const ht = "ht";

export const idmd = `#${md}`;
export const idht = `#${ht}`;

const data = "makdown"

export const converMdToHt = textarealayaut({
    id1: md,
    id2: ht
});

$(document).ready(() => {
    $(idmd).getLocalStorage(data);
    $(idht).addHTML(mdtoht($(idmd).e.value));

    $(idmd).on('input', (e) => {
        $(idht).addHTML(mdtoht(e.target.value));
    });

    $(idmd).on('dragover', (e) => {
        e.stopPropagation();
        e.preventDefault();
    });

    $(idmd).on('drop', async (e) => {
        e.preventDefault();
        const file = await ipcRenderer.invoke('readFile', `${e.dataTransfer.files[0].path}`);
        if (file !== undefined) {
            $(idmd).e.value = file;
            $(idht).addHTML(mdtoht($(idmd).e.value));
        } 
    });
});