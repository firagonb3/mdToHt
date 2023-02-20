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
        <meta charset='UTF-8'>
        <title>MakDown to HTML</title>
        <style> /* Estilos para los encabezados */
        #ht h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin: 2rem 0 1.5rem;
        }
        
        #ht h2 {
            font-size: 2rem;
            font-weight: bold;
            margin: 1.5rem 0 1rem;
        }
        
        #ht h3 {
            font-size: 1.5rem;
            font-weight: bold;
            margin: 1rem 0 0.5rem;
        }
        
        /* Estilos para los párrafos */
        #ht p {
            font-size: 1rem;
            line-height: 1.5;
            margin: 1rem 0;
        }
        
        /* Estilos para las listas */
        #ht ul,
        #ht ol {
            margin: 1rem 0;
            padding-left: 2rem;
        }
        
        #ht li {
            font-size: 1rem;
            line-height: 1.5;
        }
        
        /* Estilos para los enlaces */
        #ht a {
            color: #007bff;
            text-decoration: underline;
        }
        
        /* Estilos para las imágenes */
        #ht img {
            max-width: 100%;
            height: auto;
        }
        
        /* Estilos para el código */
        #ht pre {
            background-color: #f7f7f7;
            padding: 1rem;
            overflow: auto;
            font-size: 0.9rem;
            border-radius: 0.3rem;
        }
        
        #ht code {
            background-color: #f3f3f3;
            border: 1px solid #ccc;
            border-radius: 4px;
            color: #333;
            display: inline-block;
            font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
            font-size: 14px;
            padding: 4px 8px;
          }
        /* Estilos para las citas */
        #ht blockquote {
            border-left: 5px solid #ccc;
            margin: 1rem 0;
            padding-left: 1rem;
            font-style: italic;
        }
        
        /* Estilos para las líneas horizontales */
        #ht hr {
            border: none;
            border-top: 1px solid #ccc;
            margin: 1.5rem 0;
        }
        
        table {
            border-collapse: collapse;
            margin: 1em 0;
            width: 100%;
            font-size: 0.9em;
            font-family: sans-serif;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
            background-color: #1e1e1e;
            color: #fff;
          }
          
          th, td {
            padding: 0.5em;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
          
          th {
            background-color: #444;
            color: #fff;
            border-bottom: 2px solid #ddd;
          }
          
          tbody tr:nth-of-type(even) {
            background-color: #333333;
          }
          
          tbody tr:hover {
            background-color: #444;
            color: #fff;
          } </style>
    </head>
    <body>
        ${context}
    </body>
    </html>`
}

