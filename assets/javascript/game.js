//var favColor = prompt("What is your favorite color?");

var HalloweenWords = ["skeleton",
            "pumpkin",
            "witch",
            "spiderweb",
            "Samhain",
            "costume",
            "scarecrow",
            "candy",
            "ghost",
            "chocolate",
            "cider",
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

var lettersAndBlanks=[];
var lettersAndBlanksString = document.getElementById("letters-and-blanks"); 
console.log("lettersAndBlanksString is " + lettersAndBlanksString);

//set letters-and-blanks to be empty

 lettersAndBlanksString.textContent=" ";

for(var i=0; i<wordToGuess.length; i++){
    //put a _ into lettersAndBlanks for each letter in wordToGuess
    lettersAndBlanks.push("_");

    //set letters-and-blanks to be as many _ as there are letters in the wordToGuess 
     lettersAndBlanksString.textContent += lettersAndBlanks[i] + " ";
    
}


console.log("lettersAndBlanks is " + lettersAndBlanks);
lettersAndBlanksString = document.getElementById("letters-and-blanks"); 

console.log("lettersAndBlanksString is " + lettersAndBlanksString);



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
    for(var i=0; i<wordToGuess.length; i++){
        if(wordToGuess[i] === userInput){
            console.log(lettersAndBlanks[i] + "is the blank");
            console.log(wordToGuess[i] + " is wordToGuess[i]")
            lettersAndBlanks[i] = wordToGuess[i];
            console.log(lettersAndBlanks[i] + " is lettersAndBlanks[i]");
            console.log("The if statement ran");
            console.log("lettersAndBlanks is " + lettersAndBlanks);
        }
    }

    //else
    //adds key pressed to alreadyGuessed array
    alreadyGuessed.push(userInput);
    console.log(lettersGuessed);

    //send the alreadyGuessed array back to the html file
    lettersGuessed.textContent = alreadyGuessed;



}
    console.log("The javascript is running");