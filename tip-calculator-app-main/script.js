const amountInput = document.getElementById("amount");
const custom = document.querySelector("#custom");
const people = document.querySelector("#people");
const tip_amt = document.querySelector(".tip-amt");
const total_amt = document.querySelector(".total-amt");
const five = document.querySelector(".five");
const ten = document.querySelector(".ten");
const fifteen = document.querySelector(".fifteen");
const tfive = document.querySelector(".tfive");
const fifty = document.querySelector(".fifty");
const reset = document.querySelector(".reset");
const error=document.querySelector(".error");

let currentValue = 0;
let customval = 0;
let peopleval = 0;

// Call this function after any input changes
function calculate() {
  if (currentValue > 0 && peopleval > 0) {
    const tipPercentage = parseFloat(customval) || 0;
    const tip = (currentValue * tipPercentage) / 100;
    const total = currentValue + tip;
    const tipPerPerson = tip / peopleval;
    const totalPerPerson = total / peopleval;

    tip_amt.innerText = "$"+tipPerPerson.toFixed(2);
    total_amt.innerText = "$"+totalPerPerson.toFixed(2);
  }else if(peopleval<=0){
    error.innerText="Can't be zero"
  }
   else {
    tip_amt.innerText = "$0.00";
    total_amt.innerText = "$0.00";
  }
}

amountInput.addEventListener("input", function () {
  currentValue = parseFloat(amountInput.value) || 0;
  calculate();
});

custom.addEventListener("input", function () {
  customval = parseFloat(custom.value) || 0;
  calculate();
});

people.addEventListener("input", function () {
  peopleval = parseInt(people.value) || 0;
  calculate();
});
five.addEventListener("click",function(){
  customval=5;
  calculate();
})
ten.addEventListener("click",function(){
  customval=10;
  calculate();
})
fifteen.addEventListener("click",function(){
  customval=15;
  calculate();
})
tfive.addEventListener("click",function(){
  customval=25;
  calculate();
})
fifty.addEventListener("click",function(){
  customval=50;
  calculate();
})
reset.addEventListener("click",function(){
  // tip_amt.innerText = "0.00";
  // total_amt.innerText = "0.00";
  // amountInput.value="";
  // custom.value="";
  // people.value="";
  //  error.innerText=""
  location.reload();


})

