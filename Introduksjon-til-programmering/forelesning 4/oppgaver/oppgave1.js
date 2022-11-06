var gammelTxt = document.getElementById("gammel-txt");
var userBtn = document.getElementById("btn");

function bytteTekst() {
  gammelTxt.innerHTML = "dette er ny tekst";
}

userBtn.onclick = bytteTekst;
