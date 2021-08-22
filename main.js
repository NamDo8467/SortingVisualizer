const startButton = document.querySelector(".start-btn");
const randomButton = document.querySelector(".random-list");
let numberList = [...document.querySelectorAll("input")];
// console.log(numberList)
let arrayOfNumber = [];
numberList.forEach((input) => {
  input.readOnly = "true";
  input.value = Math.floor(Math.random() * 10);
  arrayOfNumber.push(input.value);
});
// console.log(arrayOfNumber)
// console.log(numberList[1].offsetTop)

function delay(millisecond) {
  return new Promise((resolve) => setTimeout(resolve, millisecond));
}
const startSorting = async (number1, number2, occurs) => {
  // alert("hello")
  let timer = setTimeout(() => {
    number1.style.top = "10%";
    number1.style.transition = "top 1s ease";
  }, 100);

  timer = setTimeout(() => {
    // alert("HEllo")
    number1.style.transform = `translateX(${occurs * 130}%)`;
    number1.style.transition = "transform 1s ease";
  }, 1000);
  timer = setTimeout(() => {
    if (parseInt(number1.value) > parseInt(number2.value)) {
      number2.style.transform = `translateX(${-130}%)`;
      number2.style.transition = "transform 1s ease";
      number1.style.top = "40%";
      number1.style.transition = "top 1s ease";
    } else if (
      parseInt(number1.value) < parseInt(number2.value) ||
      parseInt(number1.value) == parseInt(number2.value)
    ) {
      // number2.style.transform = `translateX(${-130}%)`;
      // number2.style.transition = "transform 1s ease";
      number1.style.transform = `translateX(${occurs * 130}%)`;
        number1.style.transition = "transform 1s ease";
      // number1.style.top = "40%";
      // number1.style.transition = "top 1s ease";
    }
  }, 2000);

  await delay(3500);
};
startButton.addEventListener("click", async () => {
  for (let i = 0; i < numberList.length - 1; i++) {
    // numberList.forEach(n => {
    //   console.log(n.value)
    // })
    let occurs = 1;
    for (let j = 0; j < numberList.length - 1; j++) {
      await startSorting(numberList[j], numberList[j + 1], occurs);
      let temp = numberList[j];
      numberList[j] = numberList[j + 1];
      numberList[j + 1] = temp;
      occurs++;
    }
  }
});

randomButton.addEventListener("click", () => {
  numberList.forEach((number) => {
    number.value = Math.floor(Math.random() * 10);
    arrayOfNumber.shift();
    arrayOfNumber.push(number.value);
  });
  // console.log(arrayOfNumber);
});
