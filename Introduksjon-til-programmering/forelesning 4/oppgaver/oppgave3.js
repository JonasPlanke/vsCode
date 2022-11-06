var secretNumber = 96;
var btn = document.getElementById("btn");

function gjetteNumber() {
  var userGjett = prompt("gjett et tall");
  if (userGjett == secretNumber) {
    alert("riktig");
  }
  if (userGjett > secretNumber) {
    alert("for stort");
  }
  if (userGjett < secretNumber) {
    alert("for lite");
  }
}
btn.onclick = gjetteNumber;
