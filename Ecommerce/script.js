let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick=function(){
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll=function(){

    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}