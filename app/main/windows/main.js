const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let win
const create = () => {
  win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  })
  if(isDev) {
    win.loadURL('http://localhost:3000')
  }else{
    win.loadFile(path.resolve(__dirname, '../renderer/pages/main/index.html'))
  }
  win.webContents.openDevTools()
}

const send = (channel, ...args) => {
  win.webContents.send(channel, ...args)
}

module.exports = {create,send}