// Used TWO Sswitch cases for mouse clicks and key presses


/* for( var i = 0; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        
        switch(buttonInnerHTML){
            case "w":               
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                alert("hi");

            break;

            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            break;

            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            break;

            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
            break;

            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
            break;

            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
            break;

            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
            break;

            default:
                console.log;


        }
    }
    )

    document.addEventListener("keydown", function(event){
        var pressedkey = event.key;

        switch(pressedkey){
            case "w":               
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            break;

            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            break;

            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            break;

            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
            break;

            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
            break;

            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
            break;

            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
            break;

            default:
                console.log;


        }
    })
  
}
 */


// Using just a single Switch Case after getting value from two different functions for Mouse click and 
// key presses, and then using the value in the switch case.




/* 
 added event listener (CLICK) to every button we created by html on the page by using forloop and going through
 every DRUM CLASS and adding the "CLICK", then made a function to get the value of which word/button is pressed
 by the THIS attribute, and stored it in a variable BUTTONCLICKED, and passed the variable to the 
MAKESOUND FUNCTION */

for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonclicked = this.innerHTML;
        makesound(buttonclicked); 
        buttonAnimate(buttonclicked);
    })
}

/* 
Added the event listener KEYDOWN, which listens to all the key pressed while on the pageXOffset, and then Added
a function with in built parameter EVENT which tells us the about which key triggered the KEYDOWN and we know the different attributes of the current key pressed,
out of whihc we take attribute KEY which can be a,b,c,etc. pressend currently, then store it in variable 
PRESSEDKEY, and pass it on the function MAKESOUND */

document.addEventListener("keydown", function(event){
    var pressedkey = event.key;
    makesound(pressedkey);
    buttonAnimate(pressedkey);
})



function makesound(key){

    switch(key){
        case "w":               
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

        default:
            console.log;


    }

}

function buttonAnimate(currentKey){
        
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200)
}