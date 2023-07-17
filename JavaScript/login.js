

let btn_login = document.querySelector('.btn-login');
let btn_register = document.querySelector('.btn-register');
let login_page = document.querySelector('.login');

btn_login.onclick = () => {
    login_page.classList.remove('register');
}
btn_register.onclick = () => {
    login_page.classList.add('register');
}