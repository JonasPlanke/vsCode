var pw = "ferie";
var penger = 1000;

var userInput = prompt("Passord:");

if (userInput === pw) {
  alert(`Du har ${penger}kr`);
} else {
  alert("feil passord");
}

var taut = prompt("ønsker du å ta ut? Ja/Nei");

if (taut.toLowerCase() === "ja") {
  var userUtak = Number(prompt("hvor mye vil du ta ut?"));
  alert(`Du har ${penger - userUtak}kr igjen`);
} else {
  alert("god jul");
}
