let busqueda = document.querySelector("#search-btn");
let formBusqueda = document.querySelector(".search-form")


// let busqueda = document.querySelector('[busqueda]');
// let formBusqueda = document.querySelector('[form-busqueda]');

busqueda.onclick=()=>{
    busqueda.classList.toggle('fa-times');
    formBusqueda.classList.toggle('active1');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active2');
}

let menu = document.querySelector('[menu]');
let navbar = document.querySelector('[navbar]');

menu.onclick=()=>{
    
    busqueda.classList.remove('fa-times');
    formBusqueda.classList.remove('active1');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active2');
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
    navbar.classList.remove('active2');
}