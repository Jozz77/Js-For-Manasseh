
const footerh1 = document.getElementById("footerh1");
const divA = document.getElementById("divA");

console.log(divA)




footerh1.addEventListener("click", function(){
   footerh1.textContent = "You clicked this footer"
})

divA.addEventListener("mouseover", function() {
    divA.textContent = "I'm hovered"
    divA.style.color = "blue"
})
