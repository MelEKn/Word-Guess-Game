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
            "frankenstein",
            "october",
            "dracula"
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


 lettersGuessed.textContent = "None";

//grabs "wins-amount" from the html 
var scoreCounter = document.getElementById("wins-amount");

//grabs "guesses-left" from the html
var guessesLeft = document.getElementById("guesses-left");

//creates a variable "guesses" that keeps track of how many guesses are left

var guesses = 12;

//initializes counter as equal to zero, and sends it back
//to "wins-amount" in the html file
var counter = 0;
scoreCounter.textContent = counter;
console.log("scoreCounter is " + scoreCounter);




document.onkeyup = function(event){
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



//sends guessesLeft back to the HTML
guessesLeft.textContent = guesses;


console.log("lettersAndBlanks is " + lettersAndBlanks);
console.log("lettersAndBlanksString is " + lettersAndBlanksString);

console.log(lettersGuessed);
    var userInput = event.key;
    alert("You just pushed " + userInput);


//initialize variable to say whether the letter was not in the word, and sets it to true

    
var notInWord = true;
    

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
            
    //sets notInWord to false if the letter was in the word
     notInWord = false;

      

        }
        
            
           
    }
    console.log(lettersAndBlanks[i] + " is lettersAndBlanks[i]");
    console.log("lettersAndBlanks is " + lettersAndBlanks);

    //temporarily resets letters-and-blanks to empty
    lettersAndBlanksString.textContent = "";

    //puts the appropriate letters and blank spaces in letters-and-blanks in the html
     for(var k=0; k<wordToGuess.length; k++){
         lettersAndBlanksString.textContent += (lettersAndBlanks[k] + " ");
     }

    
     console.log("notInWord is " + notInWord);

    //else
    //adds key pressed to alreadyGuessed array
    if(notInWord){
    alreadyGuessed.push(userInput);
    notInWord = false;
    }

    console.log("alreadyGuessed is " + alreadyGuessed);

    //sets variable "guesses" to 12 minus however many letters the user has guessed
    guesses = 12 - alreadyGuessed.length;

    console.log("guesses is " + guesses);
    
    console.log("notInWord is " + notInWord);

    //send the number of guesses left back to the html

    guessesLeft.textContent = guesses;

    //send the alreadyGuessed array back to the html file
    lettersGuessed.textContent = alreadyGuessed;


}
    console.log("The javascript is running");