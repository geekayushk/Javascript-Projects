const input=document.querySelector(".input");
const button=document.querySelector(".button");
const search=document.querySelector(".search");

button.addEventListener("click", () =>{
    search.classList.toggle("active");
    input.focus();
})