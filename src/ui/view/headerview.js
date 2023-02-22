const { ipcRenderer } = require('electron');

import { header } from "../components/header.js";
import { idmd, idht } from "./textareaview.js";
import { $ } from "../../controlers/utils.js";

const idButton = "save";
const idButton2 = "export";
const data = "makdown";

const textButton1 = "Guardar";
const textButton2 = "Guardar*";

export const headerview = header({
    Titel: "Conversor de MakDown a HTML",
    btnText: "Guardar",
    btnId: idButton, 
    btn2Text: "Exportar",
    btn2Id: idButton2
});

$(document).ready(() => {
    $(`#${idmd}`).on('input', (e) => {
        $(`#${idButton}`).addHTML(textButton2);
    });

    $(`#${idButton}`).on('click', () => {
        $(`#${idmd}`).setLocalStorage(data);
        $(`#${idButton}`).addHTML(textButton1);
    });
    
    $(document).on("keydown", (e) => {
        if (e.ctrlKey && e.key === "s") {
            $(`#${idmd}`).setLocalStorage(data);
            $(`#${idButton}`).addHTML(textButton1);
        }
    });

    $(`#${idButton2}`).on('click', () => {
        ipcRenderer.send('mostrar-dialogo', `${$(`#${idht}`).e.outerHTML}`);
    });

    $(document).on("keydown", (e) => {
        if (e.ctrlKey && e.altKey && e.key === "s") {
            ipcRenderer.send('mostrar-dialogo', `${$(`#${idht}`).e.outerHTML}`);
        }
    });
});