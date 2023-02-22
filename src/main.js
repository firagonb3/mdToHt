const { app, BrowserWindow, ipcMain } = require('electron');
const isPackaged = require('electron-is-packaged');
const { dialogExporFile } = require('./controlers/dialogExporFilesControler')
const { readFile } = require('./controlers/readFilesControler')

const createWindow = () => {
    const win = new BrowserWindow({
        fullscreenable: false,
        width: 1000,
        minWidth: 850,
        height: 700,
        minHeight: 200,
        center: true,
        show: false,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.once('ready-to-show', () => {
        if (isPackaged.isPackaged === false) {
            win.setMenuBarVisibility(false);
            win.webContents.openDevTools();
        } else {
            win.setMenu(null);
        }
        win.show();
    });

    win.loadFile('src/ui/index.html');
}

app.whenReady().then(() => {
    createWindow();
})

app.on('window-all-closed', () => {
    app.quit();
})

const documentsPath = app.getPath('documents');

ipcMain.on('mostrar-dialogo', (event, context) => {
    dialogExporFile(context, documentsPath);
});

ipcMain.handle('readFile', async (event, path) => {
    const file = await readFile(path)
    console.log(file)
    return file;
});