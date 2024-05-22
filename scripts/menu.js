const botaoMenu = document.querySelector(".container");
const menu = document.querySelector(".lista-menu")

botaoMenu.addEventListener('click',() => {
    menu.classList.toggle('desativado')
})