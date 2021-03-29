const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let win
const create = () => {
  win = new BrowserWindow({
    width: 1200,
    height: 700,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  })
  win.loadFile(path.resolve(__dirname, '../../renderer/pages/control/index.html'))
}

module.exports = {create}