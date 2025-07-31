var a=document.querySelectorAll("button");
for(var i=0;i<a.length;i++){
a[i].addEventListener("click",k);
}
function k(){
    var a=this.innerHTML;
    switch(a){
    case "w":
        var a=new Audio("sounds/crash.mp3");
        break;
    case "a":
        var a=new Audio("sounds/kick-bass.mp3");        break;

    case "s":
        var a=new Audio("sounds/snare.mp3");        break;

    case "d":
        var a=new Audio("sounds/tom-1.mp3");        break;

    case "j":
        var a=new Audio("sounds/tom-2.mp3");        break;

    case "k":
        var a=new Audio("sounds/tom-3.mp3");        break;

    case "l":
        var a=new Audio("sounds/tom-4.mp3");        break;
    default: console.log(a);}

a.play();
}
