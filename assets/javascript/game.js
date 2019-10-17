//var favColor = prompt("What is your favorite color?");

var HalloweenWords = ["skeleton",
            "pumpkin",
            "witch",
            "trick or treat",
            "All Hallows Eve",
            "costume",
            "scarecrow",
            "candy",
            "ghost",
            "candy corn",
            "apple cider",
            "decorations",
            "broomstick",
            "spooky",
            "Frankenstein",
            "October",
            "Dracula"
]

//Randomly choose one word from the array HalloweenWords for the user to guess
var wordToGuess =  HalloweenWords[Math.floor(Math.random() * HalloweenWords.length)]; 

//Initialize counter of how many wins at 0
var winCounter = 0;

//Initialize counter of how many guesses left at 12
var guessesLeft = 12; 

console.log("The word to guess is " + wordToGuess);

//initializes lettersGuessed to the html file id "letters-guessed"
//and sets it as an empty array

var lettersGuessed = document.getElementById("letters-guessed"); 

var alreadyGuessed= [];

var lettersAndBlanks ="";

for(var i=0; i<wordToGuess.length; i++){
    lettersAndBlanks += "_ ";
}

console.log("lettersAndBlanks is " + lettersAndBlanks);

console.log(lettersGuessed);

 lettersGuessed.textContent = "None";

//grabs "wins-amount" from the html 
var scoreCounter = document.getElementById("wins-amount");

//initializes counter as equal to zero, and sends it back
//to "wins-amount" in the html file
var counter = 0;
scoreCounter.textContent = counter;
console.log(scoreCounter);



document.onkeyup = function(event){
    var userInput = event.key;
    alert("You just pushed " + userInput);

    //if userInput is in wordToGuess
    //then add it to letters-and-blanks

    //else
    //adds any key pressed to alreadyGuessed array
    alreadyGuessed.push(userInput);
    console.log(lettersGuessed);

    //send the alreadyGuessed array back to the html file
    lettersGuessed.textContent = alreadyGuessed;



}
    console.log("The javascript is running");