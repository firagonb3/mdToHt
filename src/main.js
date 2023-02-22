const {app, BrowserWindow, ipcMain} = require('electron');
const { dialogExporFile } = require("./controlers/dialogExporFilesControler")

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
        //win.setMenu(null)
        win.webContents.openDevTools()
        win.setMenuBarVisibility(false)
        win.show()
    });

    win.loadFile('src/ui/index.html');
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
})

ipcMain.on('mostrar-dialogo', (event, context) => {
    dialogExporFile(context);
});