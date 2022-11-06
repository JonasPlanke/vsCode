var tall = 10;
var userTall = Number(prompt("skriv tall:"));

if (userTall > tall) {
  alert("tallet ditt er større");
} else if (userTall < tall) {
  alert("lavt");
} else if (userTall === tall) {
  alert("riktig");
}
