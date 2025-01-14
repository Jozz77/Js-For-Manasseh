const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const message = document.getElementById("message");

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission for validation

  let nameError = nameInput.validationMessage; // Validation message for name
  let numberError = numberInput.validationMessage; // Validation message for number

  if (!nameInput.checkValidity() || !numberInput.checkValidity()) {
    // Display validation errors
    message.innerHTML = `${nameError}<br>${numberError}`;
    message.style.color = "red"; // Optional: Make errors visually distinct
  } else {
    // All inputs are valid
    message.innerHTML = "Form submitted successfully!";
    message.style.color = "green"; // Optional: Indicate success
  }
});
