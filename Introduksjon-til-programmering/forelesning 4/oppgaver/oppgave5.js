pakkeInputField = document.getElementById("pakke-input-field");
pakkeBtn = document.getElementById("pakke-btn");

function pakkeliste() {
  var userInput = pakkeInputField.value;
  pakkeContainer = document.getElementById("container");
  pakkeContainer.innerHTML += `<p> ${userInput} <p/>`;
  pakkeInputField.value = "";
}

pakkeBtn.onclick = pakkeliste;
