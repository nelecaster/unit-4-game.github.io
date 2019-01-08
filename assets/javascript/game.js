var minNumber = 1;

var maxNumber = 120;

var randomNumber = randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumber);

function resetRandom() {
  rand1 = crystalNumbers[(Math.random() * crystalNumbers.length) | 0]
  console.log(rand1);



  rand2 = crystalNumbers[(Math.random() * crystalNumbers.length) | 0]
  console.log(rand2);


  rand3 = crystalNumbers[(Math.random() * crystalNumbers.length) | 0]
  console.log(rand3);

  rand4 = crystalNumbers[(Math.random() * crystalNumbers.length) | 0]
  console.log(rand4);
}




var wins = "";

var losses = "";

var counter = 0;

var crystalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

var randomCrystals = []

var randomCrystalElements = [];

var rand1 = crystalNumbers[(Math.random() * crystalNumbers.length) | 0]
console.log(rand1);



var rand2 = crystalNumbers[(Math.random() * crystalNumbers.length) | 0]
console.log(rand2);


var rand3 = crystalNumbers[(Math.random() * crystalNumbers.length) | 0]
console.log(rand3);

var rand4 = crystalNumbers[(Math.random() * crystalNumbers.length) | 0]
console.log(rand4);

function randomArray() {
  randomCrystals.push(rand1);
  randomCrystals.push(rand2);
  randomCrystals.push(rand3);
  randomCrystals.push(rand4);
}
randomArray();

$(document).ready(function () {
  // each crystal needs to be assigned a random value between 1 and 12 each round
  // computer picks a number between 19 and 120 each round
  $('#computer-number').html(randomNumber);
  $('#wins').html(wins);
  $('#losses').html(losses);

  for (var i = 0; i < randomCrystals.length; i++) {


    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "http://static4.wikia.nocookie.net/__cb20120501010503/zeldafanon/images/3/37/RedRupee.png");

    imageCrystal.attr("data-crystalvalue", randomCrystals[i]);

    randomCrystalElements.push(imageCrystal);
    $("#red-crystal").append(imageCrystal);
  }


  $(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  
    console.log(crystalValue);

    counter += crystalValue;

    $('.player-score').html(counter);

    if (counter === randomNumber) {
      wins++;
      $('#wins').html(wins);
      counter = 0;
      crystalValue = 0;
      randomCrystals.length = 0;
      resetRandom();
      randomArray();
      for (var i = 0; i < randomCrystals.length; i++) {  
        randomCrystalElements[i].attr("data-crystalvalue", randomCrystals[i]);
      }
      
      
      
    } else if (counter >= randomNumber) {
      losses++;
      $('#losses').html(losses);
      counter = 0;
      crystalValue = 0;
      randomCrystals.length = 0;
      resetRandom();
      randomArray();
      for (var i = 0; i < randomCrystals.length; i++) { 
        randomCrystalElements[i].attr("data-crystalvalue", randomCrystals[i]);
      }
      }
     
      
    






  });

})









// numbers player have picked are added up and displayed

// player number is compared to computer number

// if player number < computer number, round continues until a win or loss is counted

// if player number === computer number, +1 win

// if player number > computer number, +1 loss