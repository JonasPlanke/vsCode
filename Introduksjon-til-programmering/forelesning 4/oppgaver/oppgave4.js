var counter = 0;
var catCounterTxt = document.getElementById("katt-counter");
var userBtn = document.getElementById("btn");
var imgContainer = document.getElementById("img-container");

function cat() {
  counter++;
  catCounterTxt.innerHTML = `Det er ${counter} katter`;
  imgContainer.innerHTML += `<img src="/forelesning3/katt.jfif" />`;
}

userBtn.onclick = cat;
