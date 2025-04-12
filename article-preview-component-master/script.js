console.log("hello world")
document.addEventListener("DOMContentLoaded", function () {
    let shareContainer= document.querySelector(".share-container");
let popup = document.querySelector(".share-popup");
const infoBlock = document.querySelector(".info");
shareContainer.addEventListener("click",function(e){
    e.stopPropagation();
    
    console.log("clicked share button")

    if(window.innerWidth<=650){
       infoBlock.classList.toggle("change");
       popup.classList.toggle("new-share-popup");
        
    }
    else{
        popup.style.display=popup.style.display==="flex"?"none":"flex";
    }
    console.log("outside")
});


//responsive logic
const mediaQuery=window.matchMedia("(max-width: 650px)");
function handlingScreen(e){
    if(!e.matches){
        popup.style.display='none';
        infoBlock.classList.remove("change");
        popup.classList.remove("new-share-popup");

    }
}
handlingScreen(mediaQuery);
mediaQuery.addEventListener("change",handlingScreen

)});
