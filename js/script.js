// !Ni idea de por que no me funcionaban las lineas de abajo, cargue con otra forma, volvi y funcionó
let busqueda = document.querySelector("#search-btn");
let formBusqueda = document.querySelector(".search-form");

// let busqueda = document.querySelector('[busqueda]');
// let formBusqueda = document.querySelector('[form-busqueda]');

busqueda.onclick=()=>{
    busqueda.classList.toggle('fa-times');
    formBusqueda.classList.toggle('active1');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick=()=>{
    
    busqueda.classList.remove('fa-times');
    formBusqueda.classList.remove('active1');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// searchBtn.onclick= ()=>{
//     searchBtn.classList.toggle('fa-times');
//     searchForm.classList.toggle('active');
// }

// busqueda.forEach(button =>{
//     button.addEventListener('click', ()=>{
//         console.log("por fin se dio");
//         searchBtn.classList.toggle('fa-times');
//         searchForm.classList.toggle('active');
//     })
// })

// searchBtn.forEach(button => {
//     button.addEventListener('click',()=>{
//     searchBtn.classList.toggle('fa-times');
//     searchForm.classList.toggle('active');
//     })
    
// });

window.onscroll = ()=>{
    busqueda.classList.remove('fa-times');
    formBusqueda.classList.remove('active1');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index =0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}