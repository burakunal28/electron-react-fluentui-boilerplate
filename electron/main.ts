import { app, BrowserWindow, ipcMain, nativeTheme, screen } from 'electron';
import * as path from 'path';

let win: BrowserWindow | null
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

ipcMain.handle('maximize-window', async ()  => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const minWidth = Math.round(width * 0.7);
  const minHeight = Math.round(height * 0.7);

  if (win) {
    win.setMinimumSize(minWidth, minHeight);
    win.maximize();
  }
});

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const minWidth = Math.round(width * 0.7);
  const minHeight = Math.round(height * 0.7);

  win = new BrowserWindow({
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: nativeTheme.shouldUseDarkColors ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0)',
      symbolColor: '#5860FF',
    },
    minWidth: minWidth,
    minHeight: minHeight,
    webPreferences: {
      preload: path.join(__dirname, '..', 'dist', 'preload.js'),
    },
  });

  win.maximize();

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'))
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(createWindow)