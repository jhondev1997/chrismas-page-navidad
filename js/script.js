let searchBtn = document.getElementById('#search-btn');
let searchForm = document.querySelector(".header .search-form"),

busqueda = document.querySelector('[busqueda]');


searchBtn.onclick= ()=>{
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
}

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