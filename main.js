const {app, BrowserWindow} = require('electron')

//function that opens a new window
function createWindow() {
    window = new BrowserWindow({width: 100%, height: 100%})

    window.loadFile('index.html')
}

app.on('ready', createWindow)