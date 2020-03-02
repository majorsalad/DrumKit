/*
Ex 1) Just sets the event listener to the first button element in the HTML because querySelector will only take one element even if they all share the same tag
document.querySelector("button").addEventListener("click", function() {
    alert("I got clicked");
});

*/
var buttonsArray = document.querySelectorAll("button"); //Selects all of the HTML button elements and stores them in an array in a variable called buttonsArray

for(var i=0; i<buttonsArray.length; i++){
    buttonsArray[i].addEventListener("click", function() { //adds an eventListener to each button in the buttonsArray
            var buttonInnerHTML = this.innerHTML; //takes the letter of the buttons that we made in the HTML. Grabbing their text in the html element
            playSound(buttonInnerHTML); //sends this character to the playSound function
            buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    playSound(event.key); //sends the character that was pressed on the keyboard to the playSound function
    buttonAnimation(event.key);
});

function playSound(buttonChar){
    switch(buttonChar){ //using a switch statement, plays the relevant sound of each button
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(buttonChar);
            break;
    }
}

function buttonAnimation(buttonChar){
    var activeButton = document.querySelector("." + buttonChar); //selecting the class of the button that was pressed so that we can add the "pressed" styles to it
    //to give off a button press animation

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();