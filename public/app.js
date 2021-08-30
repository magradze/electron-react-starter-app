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


// Dark mode toggle button
const checkbox = document.querySelector("#toggle")
const html = document.querySelector("html")

const toggleDarkMode = function(){
    checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark')
}

toggleDarkMode()
checkbox.addEventListener("click", toggleDarkMode)