let btn=document.querySelector('button');
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
let email=document.querySelector('input');
let errorMsg = document.querySelector('.error-message');
let main=document.querySelector('.main');
let main2=document.querySelector('.main2');
let text=document.querySelector(".email");

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let content=document.querySelector('input').value;
    if(!isValidEmail(content)){
        errorMsg.innerText="Valid-Email required";  
        document.querySelector('input').style.backgroundColor="hsl(12, 83.30%, 92.90%)"  
    }
    else{
        text.innerText=content;
        main.style.display="none";
        main2.style.display = "flex";
    }
})
let btn2=document.querySelector('.btn2');
btn2.addEventListener("click",(event)=>{
    event.preventDefault();
    main2.style.display="none";
    main.style.removeProperty("display");
    errorMsg.innerText="";
    email.value="";
})

