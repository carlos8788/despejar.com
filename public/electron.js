const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow(
    {
      width: 900,
      height: 680,
      webPreferences: {
        preload: path.join(__dirname, './main/preload.js'), // Ruta a tu archivo de preload
        contextIsolation: true,
      },
    });

  mainWindow.loadURL(isDev ? 'http://localhost:5173' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}



app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});



ipcMain.on('mi-canal', (event, mensaje) => {
  console.log('Mensaje recibido:', mensaje);
  // Puedes responder a la ventana de renderizado aquí si lo deseas
  event.reply('mi-canal-respuesta', 'Esta es la respuesta');
});
