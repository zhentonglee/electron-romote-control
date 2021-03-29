const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const handleIPC = require('./ipc')
const {create: createMainWindow} = require('./windows/main')
// const {create: createControlWindow} = require('./windows/control')

app.whenReady().then(() => {
  createMainWindow()
  // createControlWindow()
  handleIPC()
  require('./robot.js')()
})
// 在Electron9.0后就不允许在渲染进程中使用原生的模块
// app.allowRendererProcessReuse = false;