const $ = require('jquery')
const { remote } = require('electron')

var win = remote.getCurrentWindow()

$('#minimizeBtn').on('click', () => {
    win.minimize()
})

$('#maximizeBtn').on('click', () => {
    if(!win.isMaximized()){
        win.maximize()
    } else {
        win.unmaximize()
    }
})

$('#closeBtn').on('click', () => {
    win.close()
})