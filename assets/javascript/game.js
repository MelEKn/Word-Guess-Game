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

var wordToGuess =  HalloweenWords[Math.floor(Math.random() * HalloweenWords.length)]; 

console.log("The word to guess is " + wordToGuess);

document.onkeyup = function(event){
    var userInput = event.key;

}
    console.log("The javascript is running");