const { app, BrowserWindow  } = require('electron');

function createWindow() {
  win = new BrowserWindow();
  win.loadURL('https://www.google.com/');
}

app.on('ready', createWindow);
