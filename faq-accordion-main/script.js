const img = document.querySelectorAll(".img");

img.forEach((item, index) => {
  item.addEventListener("click", () => {
    const answer = document.querySelector(`.ans${index + 1}`);
    const isVisible = answer.classList.contains("show");
    if (!isVisible) {
      answer.classList.add("show");
      item.src = "./assets/images/icon-minus.svg";
    }
    else{
        answer.classList.remove("show");
        item.src="./assets/images/icon-plus.svg";
    }
  });
});
