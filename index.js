

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  
      var buttonInnerHTML = this.innerHTML;
  
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML)
  
    });
  
  }
  
  document.addEventListener("keypress", function(event) {
  
    makeSound(event.key);
    buttonAnimation(event.key);

  });
  
  
  function makeSound(key) {
  
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
  
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
  
      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
  
      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
  
      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
  
      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
  
      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
  
  
      default: alert("press the given key ");
  
    }
  }

  function buttonAnimation(currentkey){
    var activeButton= document.querySelector("."+currentkey);
     activeButton.classList.add("pressed");
     setTimeout(function(){
        activeButton.classList.remove("pressed")
     },100)
  }
  
  
 

/*//function HouseKeeper (yearsOfExprience, name, things) {
    this.yearsOfExprience=yearsOfExprience;
    this.name=name;
    this.things=things; 
    this.cleaning = function(){
        alert("cleaning in process ")
    }  
} now this a constructor function decleared now how to use it
var HouseKeeper1 = new HouseKeeper (12,"sadmjv",["washing","cleaning"]);
here values are assigned 

var HouseKeeper2 = new HouseKeeper (12,"sadssmjv",["washing","cleaning","slam"]);

we can access anything using this function 

console.log(this.HouseKeeper2.things);
VM909:1 (3) ['washing', 'cleaning', 'slam']

// here we can add method to it is just a function which is delecared in a function 
this.cleaning()
this will generate an alert it is a method */





