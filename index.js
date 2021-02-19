// Dice RNG - 2 dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// string from dice1.png - dice6.png through concatenation
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
// adding src through concatenation
var randomImageSource = "images/" + randomDiceImage;  //player1 img update
var randomImageSource2 = "images/" + randomDiceImage2; //player2 img update

// actually updating the images
var image1 = document.querySelectorAll("img")[0]; //1st img in src array
image1.setAttribute("src", randomImageSource);

var image2 = document.querySelectorAll("img")[1]; //2nd img in src array
image2.setAttribute("src", randomImageSource2);

// update h1 winner message
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Try Again";
}
