let mode = document.getElementById('mode');
let sheet = document.getElementById('sheet');


mode.addEventListener('click', function () {

    let getTheme = localStorage.getItem('themeX');

    if (getTheme === null) {
        localStorage.setItem('themeX', 'light');
    };

    if (getTheme === 'light') {
        localStorage.setItem('themeX', 'dark');
        sheet.href = './static/css/dark.css';
    } else {
        localStorage.setItem('themeX', 'light');
        sheet.href = './static/css/light.css';
    }
});