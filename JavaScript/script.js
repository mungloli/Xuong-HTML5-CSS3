let header = document.querySelector('header');
let btn_menu = document.querySelector('.btn-show-menu');

btn_menu.onclick = function () {
    header.classList.toggle("show-menu");
}
