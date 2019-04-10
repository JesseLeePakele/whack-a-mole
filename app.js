window.onload = function(){

    
var dirt = document.getElementByClass("dirt");

var sound = document.getElementById("sound");

var grid = document.getElementById("dirtbox");

for(i=0; i<dirt.length i++){
    dirt[i].addEventListener("click", function(){
        if(dirt.innerHTML == ""){
            console.log("nothing is here");
        }else{
        dirt.innerHTML == "";
        sound.onplay();
            }
        });
    }

    function setMole(){
        var mole = document.createElement("DIV");
    }
    

}