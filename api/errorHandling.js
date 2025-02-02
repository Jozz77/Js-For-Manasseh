let x = 5;

try {
  x = y + 1;   
  document.getElementById("demo").innerHTML = x;
}
catch(err) {
  document.getElementById("demo").innerHTML = err;
} finally {
    document.getElementById("pTag").innerHTML = "I dont send if there is an error or not";
}