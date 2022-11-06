var secret = "ferie";

var btn = document.getElementById("btn");

function passord() {
  var userInput = prompt("hva er det hemmelige ordet?");
  if (userInput.toLowerCase() === secret) {
    alert("riktig da");
  } else {
    alert("feil");
  }
}

btn.onclick = passord;
