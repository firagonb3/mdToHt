const { dialog } = require('electron');
const path = require('path');
const fs = require('fs');

function dialogExporFile(context) {
    dialog.showSaveDialog({
        title: 'Exportar: md a HTML',
        defaultPath: path.join(__dirname, './index.html'),
        buttonLabel: 'Exportar',
        filters: [
            {
                name: 'Archivo de HTML',
                extensions: ['html']
            },],
        properties: []
    }).then(file => {
        if (file.canceled == false) {
            fs.writeFile(file.filePath.toString(),
                templated(context), function (err) {
                    if (err) throw err;
                });
        }
    }).catch(err => {
        console.log(err)
    });
}

module.exports = {
    dialogExporFile
};


function templated(context) {
    return `<!DOCTYPE html>
    <html lang='es'>
    <head>
        #ht h1,#ht h2,#ht h3{font-weight:700}#ht ol,#ht p,#ht ul{margin:1rem 0}tbody tr:hover,th
        {background-color:#444;color:#fff}table,th{color:#fff}#ht h1{font-size:2.5rem;margin:2rem 0 1.5rem}
        #ht h2{font-size:2rem;margin:1.5rem 0 1rem}#ht h3{font-size:1.5rem;margin:1rem 0 .5rem}#ht li,
        #ht p{font-size:1rem;line-height:1.5}#ht ol,#ht ul{padding-left:2rem}#ht a{color:#007bff;
        text-decoration:underline}#ht img{max-width:100%;height:auto}#ht pre{background-color:#f7f7f7;
        padding:1rem;overflow:auto;font-size:.9rem;border-radius:.3rem}#ht code{background-color:#f3f3f3;
        border:1px solid #ccc;border-radius:4px;color:#333;display:inline-block;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;
        font-size:14px;padding:4px 8px}#ht blockquote{border-left:5px solid #ccc;margin:1rem 0;
        padding-left:1rem;font-style:italic}#ht hr{border:none;border-top:1px solid #ccc;margin:1.5rem 0}
        table{border-collapse:collapse;margin:1em 0;width:100%;font-size:.9em;font-family:sans-serif;
        box-shadow:0 0 20px rgba(0,0,0,.15);background-color:#1e1e1e}td,th{padding:.5em;text-align:left;
        border-bottom:1px solid #ddd}th{border-bottom:2px solid #ddd}tbody tr:nth-of-type(2n)
        {background-color:#333}</style>
    </head>
    <body>
        ${context}
    </body>
    </html>`
}

