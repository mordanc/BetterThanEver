const {app, BrowserWindow} = require('electron')

//function that opens a new window
function createWindow() {
    window = new BrowserWindow({width: 1400, height: 1000})

    window.loadFile('index.html')
}

app.on('ready', createWindow)