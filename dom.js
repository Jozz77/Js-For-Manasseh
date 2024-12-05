
const h1 = document.getElementById("h1").innerHTML
const body = document.getElementById("body")
const Image = document.getElementById("image").setAttribute("alt", "bad") 


// console.log(h1);

// access the parent container where you to add the new element
const mainBody = document.getElementById("main");

// create the element
const p = document.createElement("p");
const p2 = document.createElement("p");

// give the elememt content
p.innerHTML = " This is a new p I created"
p2.innerHTML = " This is a new p2 I created"

// add the new element to the parent container
mainBody.appendChild(p)
mainBody.appendChild(p2)

// change the color of the p contents
p.style.color = "yellow"
p2.style.color = "blue"
mainBody.style.backgroundColor = 'black'
mainBody.style.padding = "1rem"
mainBody.style.display = "flex"
mainBody.style.justifyContent = "space-between"

console.log(mainBody);

 