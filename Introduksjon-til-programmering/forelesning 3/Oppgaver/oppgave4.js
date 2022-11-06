var secret = "ferie";

var userInput = prompt("hva er det hemmelige ordet?");

if (userInput.toLowerCase() === secret) {
  alert("riktig da");
} else {
  alert("feil");
}
