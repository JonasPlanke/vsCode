counter = 0;
btnPlus = document.getElementById("button-plus");
btnMinus = document.getElementById("button-minus");
counterContainer = document.getElementById("counter-container");
kattImg = document.getElementById("katt-img");
bunnymg = document.getElementById("bunny-img");

function buttonPressMinus() {
  counter--;
  counterContainer.innerHTML = counter;
}

function buttonPressPlus() {
  counter++;
  counterContainer.innerHTML = counter;
  if (counter > 9) {
    kattImg.innerHTML = `<img src="/forelesning3/bunny.jfif">`;
  } else {
    kattImg.innerHTML = "";
  }
}

btnPlus.onclick = buttonPressPlus;
btnMinus.onclick = buttonPressMinus;
