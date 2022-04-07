
var numOfButtons=document.querySelectorAll(".drum").length;

 for(var i=0;i<numOfButtons;i++){
     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var clickedButton=this.innerHTML;

       playSound(clickedButton);
       changeColor(clickedButton);

     })
 }
 //above is the code for mouse click on the drumkit icons

 document.addEventListener("keypress",function(event){

   playSound(event.key);
   changeColor(event.key);

     })
//above is the code for keyboard button clicks

function playSound(button){//this function is called in the above code

  switch(button){
    case "w":var audio1=new Audio("sounds/tom-1.mp3");
             audio1.pitch=3;
             audio1.play();
    break;
    case "a":var audio2=new Audio("sounds/tom-2.mp3");
             audio2.play();
    break;
    case "s":var audio3=new Audio("sounds/tom-3.mp3");
             audio3.play();
    break;
    case "d":var audio4=new Audio("sounds/tom-4.mp3");
             audio4.play();
    break;
    case "j":var audio5=new Audio("sounds/kick-bass.mp3");
             audio5.play();
    break;
    case "k":var audio6=new Audio("sounds/snare.mp3");
             audio6.play();
    break;
    case "l":var audio7=new Audio("sounds/crash.mp3");
             audio7.play();
    break;
    default:
    }
}

function changeColor(currentButton){
  var selectedButton=document.querySelector("."+currentButton);
  selectedButton.classList.add("pressed");
  setTimeout(function(){
    selectedButton.classList.remove("pressed");
  },120);
}
