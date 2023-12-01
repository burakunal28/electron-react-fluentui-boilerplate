import { app, BrowserWindow, ipcMain, nativeTheme, screen } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')

let win: BrowserWindow | null = null;

ipcMain.handle('get-user-settings', async () => {
  const dirPath = path.join(__dirname, '../db');
  const filePath = path.join(dirPath, 'userSession.json');
  if (fs.existsSync(filePath)) {
    // Read user settings from file
    const settings = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return settings;
  }
  return null;
});

ipcMain.handle('save-settings', async (_, settings) => {
  const dirPath = path.join(__dirname, '../db');
  const filePath = path.join(dirPath, 'userSession.json');

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Save user settings to file
  fs.writeFileSync(filePath, JSON.stringify(settings, null, 2));
});

ipcMain.handle('theme-change', (_, theme) => {
  // Change the native theme
  nativeTheme.themeSource = theme;
});

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const windowWidth = Math.round(width * 0.8);
  const windowHeight = Math.round(height * 0.8);

  win = new BrowserWindow({
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: nativeTheme.shouldUseDarkColors ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0)',
      symbolColor: '#F90400',
    },
    width: windowWidth,
    height: windowHeight,
    minWidth: Math.round(width * 0.6),
    minHeight: Math.round(height * 0.6),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.maximize(); 

  win.setMenuBarVisibility(false);

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(process.env.DIST, 'index.html'));
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
    win = null;
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

if (typeof require !== 'undefined' && require?.main === module) {
  app.whenReady().then(createWindow);
}