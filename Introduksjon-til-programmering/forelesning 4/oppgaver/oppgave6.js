likerInputField = document.getElementById("liker-input-field");
likerBtn = document.getElementById("liker-btn");

function likerliste() {
  var likerUserInput = likerInputField.value;
  likerContainer = document.getElementById("liker-container");
  likerContainer.innerHTML += `<p> ${likerUserInput} <p/>`;
  likerInputField.value = "";
}

likerBtn.onclick = likerliste;

ikkeInputField = document.getElementById("ikke-input-field");
ikkeBtn = document.getElementById("ikke-btn");

function ikkeliste() {
  var ikkeUserInput = ikkeInputField.value;
  ikkeContainer = document.getElementById("ikke-container");
  ikkeContainer.innerHTML += `<p> ${ikkeUserInput} <p/>`;
  ikkeInputField.value = "";
}

ikkeBtn.onclick = ikkeliste;
