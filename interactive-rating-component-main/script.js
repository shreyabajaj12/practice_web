const submit = document.querySelector(".submit");
const marks = document.querySelector(".marks");
const card2 = document.querySelector(".card2");
const card = document.querySelector(".card");

let number;
const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        number = index + 1;
        stars.forEach(s => s.style.backgroundColor = "black");
        star.style.backgroundColor = "hsl(210, 1.60%, 24.70%)";
    });
});
 
submit.addEventListener("click", () => {
    if (number === undefined) {
        alert("Please select a rating before submitting!");
        return;
    }

    marks.innerText = `You selected ${number} out of 5`;
    card2.style.display = "flex";
    card.style.display = "none";
});
