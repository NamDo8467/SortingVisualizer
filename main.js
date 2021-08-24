const startButton = document.querySelector(".start-btn");
const randomButton = document.querySelector(".random-list");
let numbers = document.querySelectorAll("input");
const numberList = document.querySelector(".number-list");
let arrayOfNumber = [];
// numbers.forEach((input) => {
//   input.readOnly = "true";
//   input.value = Math.floor(Math.random() * 10);
//   arrayOfNumber.push(input.value);
// });

function delay(millisecond) {
  return new Promise((resolve) => setTimeout(resolve, millisecond));
}
const startSorting = (number1, number2, currentIndex, nextIndex) => {
  number1.style.top = "10%";
  number1.style.transition = "top 1s ease";

  setTimeout(() => {
    number1.style.transform = `translateX(${130}%)`;
    number1.style.transition = "transform 1s ease";
  }, 1000);

  setTimeout(() => {
    if (parseInt(number1.value) > parseInt(number2.value)) {
      let temp = number1.value;
      number1.value = number2.value;
      number2.value = temp;

      number1.style.transform = `translateX(${0}%)`;
      number1.style.top = "40%";
      number1.style.transition = "transform 1s ease, top 1.5s ease";
    } else if (
      parseInt(number1.value) < parseInt(number2.value) ||
      parseInt(number1.value) == parseInt(number2.value)
    ) {
      number1.style.transform = "translateX(0)";
      number1.style.top = "40%";
      number1.style.transition = "transform 1s ease, top 1s ease";
    }
  }, 2000); 
};
startButton.addEventListener("click", async () => {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    console.log(i);
    for (let j = 0; j < numbers.length - 1; j++) {
      startSorting(numbers[j], numbers[j + 1], j, j + 1);
      await delay(3000);
      // console.log(count);
    }
  }
});

randomButton.addEventListener("click", () => {
  numbers.forEach((number) => {
    number.value = Math.floor(Math.random() * 10);
    arrayOfNumber.shift();
    arrayOfNumber.push(number.value);
  });
});
