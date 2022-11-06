// document.GetElemetentById("") henter inn noe fra HTML, basert på en ID
//HUSK! å sette ID i HTML
var gameTxt = document.getElementById("game-txt");
gameTxt.innerHTML = "Overkjørt av Javscript";

var bgtest = document.getElementById("bgtest");
//innerHTML er innholdet på INNSIDEN av taggene
var myGame = "Overwatch";
gameTxt.innerHTML = myGame;

//ALERT!
//En alert er en output til brukeren.
// alert("rawr");

//prompt
//prompt er en mulighet for å få input fra brukeren

/* var userGame = prompt("Skriv noe");
gameTxt.innerHTML = userGame;
console.log(userGame);

var userNumber1 = prompt("tall1:");
var userNumber2 = prompt("tall2:");

alert(userNumber1 + userNumber2);
*/
//parseInt
alert(
  `SLik ser det ut med parseInt ${
    parseInt(userNumber1) + parseInt(userNumber2)
  }`
);

var bgtest = prompt("bakgrunnsfarge:");
