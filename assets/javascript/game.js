//var favColor = prompt("What is your favorite color?");

var HalloweenWords = ["skeleton",
    "pumpkin",
    "witch",
    "spiderweb",
    "samhain",
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



//Initialize counter of how many wins at 0
var winCounter = 0;

//grabs "wins-amount" from the html 
var scoreCounter = document.getElementById("wins-amount");

//initializes counter as equal to zero, and sends it back
//to "wins-amount" in the html file
var counter = 0;
scoreCounter.textContent = counter;
console.log("scoreCounter is " + scoreCounter);

//grabs letters-guessed from the HTML
var lettersGuessed = document.getElementById("letters-guessed");

//grabs "guesses-left" from the html
var guessesLeft = document.getElementById("guesses-left");



//Randomly choose one word from the array HalloweenWords for the user to guess
var wordToGuess = HalloweenWords[Math.floor(Math.random() * HalloweenWords.length)];

//Initialize counter of how many guesses left at 12
// var guessesLeft = 12;

console.log("The word to guess is " + wordToGuess);

var alreadyGuessed = [];

var lettersAndBlanks = [];

lettersGuessed.textContent = "None";


//creates a variable "guesses" that keeps track of how many guesses are left

var guesses = 12;


//when the user presses a key
document.onkeyup = function (event) {
    var lettersAndBlanksString = document.getElementById("letters-and-blanks");
    console.log("lettersAndBlanksString is " + lettersAndBlanksString);

    //set letters-and-blanks to be empty

    lettersAndBlanksString.textContent = " ";

    for (var i = 0; i < wordToGuess.length; i++) {
        //put a _ into lettersAndBlanks for each letter in wordToGuess
        lettersAndBlanks.push("_");

        //set letters-and-blanks to be as many _ as there are letters in the wordToGuess 
        lettersAndBlanksString.textContent += lettersAndBlanks[i] + " ";

    }



    //sends guessesLeft back to the HTML
    // guessesLeft.textContent = guesses;
    // console.log("first guesses is " + guesses);


    console.log("lettersAndBlanks is " + lettersAndBlanks);
    console.log(lettersGuessed);
    var userInput = event.key;


    //initialize variable to say whether the letter was not in the word, and sets it to true


    var notInWord = true;


    //if userInput is in wordToGuess
    //then add it to letters-and-blanks
    for (var i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === userInput) {
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

    //creates checkLetters and sets it equal to what lettersAndBlanks should be (workaround)
    var checkLetters = [];

    for(var j = 0; j<wordToGuess.length; j++){
        checkLetters[j] = lettersAndBlanks[j];
    }

    console.log("checkLetters is " + checkLetters);

    var hasWon = false;

    //temporarily resets letters-and-blanks to empty
    lettersAndBlanksString.textContent = "";

    //puts the appropriate letters and blank spaces in letters-and-blanks in the html
    for (var k = 0; k < wordToGuess.length; k++) {
        lettersAndBlanksString.textContent += (lettersAndBlanks[k] + " ");
    }


    console.log("notInWord is " + notInWord);

    //else
    //adds key pressed to alreadyGuessed array
    if (notInWord) {
        alreadyGuessed.push(userInput);
        notInWord = false;
        
    }

    console.log("alreadyGuessed is " + alreadyGuessed);

    //sets variable "guesses" to 12 minus however many letters the user has guessed
    guesses = 12 - alreadyGuessed.length;

    console.log("second guesses is " + guesses);

    console.log("notInWord is " + notInWord);

    //send the number of guesses left back to the html

    guessesLeft.textContent = guesses;

    //send the alreadyGuessed array back to the html file
    lettersGuessed.textContent = alreadyGuessed;

    //checks if the user has won
    if(checkLetters.indexOf("_")==(-1)){
        hasWon = true;
    }

    //if the user wins
    if(hasWon){
        console.log("The user has won!!!");
        counter++;
        scoreCounter.textContent = counter;
        //picks a new word
        wordToGuess = HalloweenWords[Math.floor(Math.random() * HalloweenWords.length)];
        //sets all the variables back to their original values
        console.log("The word to guess is " + wordToGuess);
        alreadyGuessed = [];
        lettersAndBlanks = [];
        lettersGuessed.textContent = "None";
        guesses = 12;
        
        guessesLeft.textContent = guesses;
        lettersAndBlanksString.textContent = "Congratulations, you won! Press any key for your next game!";
        

    }
     //if the user loses, start a new game the same way as above,
    //except that "counter" isn't increased
    else if(guesses==0){
        console.log("The user has lost")
        wordToGuess = HalloweenWords[Math.floor(Math.random() * HalloweenWords.length)];
        //sets all the variables back to their original values
        console.log("The word to guess is " + wordToGuess);
        alreadyGuessed = [];
        lettersAndBlanks = [];
        lettersGuessed.textContent = "None";
        guesses = 12;
        
        // guessesLeft.textContent = guesses;
        lettersAndBlanksString.textContent = "Oh no, you lost! Press any key to begin another game!"
    }
}
console.log("The javascript is running");