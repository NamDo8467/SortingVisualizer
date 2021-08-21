const startButton = document.querySelector(".start-btn");
const randomButton = document.querySelector(".random-list");
let numberList = document.querySelectorAll("input");

startButton.addEventListener("click", () => {
  numberList[0].style.top = "10%";
  numberList[0].style.transition = "top 1s ease";

  let timer = setTimeout(() => {
    numberList[0].style.transform = "translateX(130%)";
    numberList[0].style.transition = "transform 1s ease";
  }, 1000);

  timer = setTimeout(() => {
    if (parseInt(numberList[0].value) > parseInt(numberList[1].value)) {
      numberList[1].style.transform = "translateX(-130%)";
      numberList[1].style.transition = "transform 1s ease";
    }
  }, 2000);
});

randomButton.addEventListener("click", () => {
  numberList.forEach((number) => {
    number.value = Math.floor(Math.random() * 10);
  });
});
