const body = document.querySelector("#body");
const darkmode = document.querySelector("#darkmode");

darkmode.addEventListener("click", function(){
    body.classList.toggle("active");
});