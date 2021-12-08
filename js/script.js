
let busqueda = document.querySelector('[busqueda]');
let formBusqueda = document.querySelector('[form-busqueda]');

busqueda.onclick=()=>{
    busqueda.classList.toggle('fa-times');
    formBusqueda.classList.toggle('active');
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