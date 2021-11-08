let mode = document.querySelector('#mode');
let cmode = document.querySelector('#cmode');
// console.log(mode);

// console.log(cmode.href);

// localStorage.setItem('theme', 'light');

let getTheme = localStorage.getItem('themeX');

if (getTheme == null) {
    localStorage.setItem('themeX', 'light');
}

function ChangeTheme() {
    if (getTheme == 'light') {
        localStorage.setItem('themeX', 'dark');
        cmode.href = './static/css/light.css';
    } else {
        localStorage.setItem('themeX', 'light');
        cmode.href = './static/css/dark.css';
    }
}

mode.addEventListener("click", function(){
    ChangeTheme()
});