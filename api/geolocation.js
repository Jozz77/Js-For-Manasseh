 const geolocationDiv = document.getElementById("location");
 const message = document.getElementById("message")
//  const geolocationButton = document.getElementById("button");

//  geolocationButton.addEventListener("click", () => {
//     try {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } catch(error) {
//       geolocationDiv.innerHTML = err;
//     //   console.log(error)
//     }
//   })

 function getLocation() {
    try {
      navigator.geolocation.getCurrentPosition(showPosition);
    } catch(err) {
      geolocationDiv.innerHTML = err;
    }
  }

  function writeMessage() {
    message.innerHTML = "I have written a new message"
  }
  
  function showPosition(position) {
    geolocationDiv.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }