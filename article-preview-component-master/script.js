console.log("hello world")
document.addEventListener("DOMContentLoaded", function () {
let shareContainer= document.querySelector(".share-container");
let popup = document.querySelector(".share-popup");
shareContainer.addEventListener("click",function(e){
    e.stopPropagation();
    popup.style.display=popup.style.display==="flex"?"none":"flex";
    console.log("clicked share button")
});
Document.addEventListener("click",function(){
    popup.style.display="none";
});
}
)
const mediaQuery=window.matchMedia("(max-width: 697px");

function handlingScreenChange(e){
    if(e.matches){
        setupSmallScreen();
    }
    else{
        removeSetUp();
    }
}
handlingScreenChange(mediaQuery);
mediaQuery.addEventListener('change',handlingScreenChange);
function setupSmallScreen(){
    document.addEventListener("DOMContentLoaded",function(){
const shareBtn=document.querySelector(".share-image");
const infoBlock=document.querySelector(".info");
shareBtn.addEventListener("click",function(e){
    e.stopPropagation();
    infoBlock.classList.toggle("active-share");
    })
})
}
function removeSetUp(){
    const infoBlock=document.querySelector(".info");
    infoBlock.classList.remove("active-share");
}