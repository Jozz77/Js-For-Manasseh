function one() {
  return "This is Function 1";
}

function three() {
  return "This is Function 3";
}

async function myDisplay() {
    const showMessage = new Promise((resolve) => {
      setTimeout(() => {
        resolve("displays after 5 seconds");
      }, 5000);
    });
  
    const message = await showMessage; // Wait for the Promise to resolve
    document.getElementById("demo").innerHTML = message;
    // console.log("my promise", message);
  }
  
  

console.log(one());
console.log(myDisplay());
console.log(three());
