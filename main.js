const startButton = document.querySelector(".start-btn")
const randomButton = document.querySelector(".random-list")
// let numbers = document.querySelectorAll("input")
const numberList = document.querySelector(".number-list")

let isSorting = false
let numberOfLessThanComparison = 1
let numberOfSwaps = 0
let numberOfRounds = 0

let swaps = document.querySelector(".swaps")
let rounds = document.querySelector(".rounds")
const GO_UP = 2,
    GO_DOWN = 40,
    TRANSLATE_X = 120

function delay(millisecond) {
    return new Promise(resolve => setTimeout(resolve, millisecond))
}
const checkForValidValues = numbers => {
    for (const n of numbers) {
        if (n.value == "" || isNaN(parseInt(n.value))) {
            console.log(n.value)
            return false
        }
    }
}
const sort = async () => {
    isSorting = true
    let numbers = document.querySelectorAll("input")

    if (checkForValidValues(numbers) == false) {
        alert("Please enter all values")
        numbers.forEach(number => {
            number.value = ""
        })
        return
    }
    // let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            startSorting(numbers[j], numbers[j + 1])
            await delay(3000)
        }

        swaps.textContent = numberOfSwaps

        numberOfRounds += 1

        rounds.textContent = numberOfRounds
        if (numberOfLessThanComparison >= 4) {
            // if number of "less than" comparison is greater or equal to 4, it means that the list is sorted
            break
        }
    }
}
const startSorting = (number1, number2) => {
    number1.style.top = `${GO_UP}%`
    number1.style.transition = "top 1s ease"

    setTimeout(() => {
        number1.style.transform = `translateX(${TRANSLATE_X}%)`
        number1.style.transition = "transform 1s ease"
    }, 1000)

    setTimeout(() => {
        if (parseInt(number1.value) > parseInt(number2.value)) {
            let temp = number1.value
            number1.value = number2.value
            number2.value = temp

            number1.style.transform = `translateX(${0}%)`
            number1.style.top = `${GO_DOWN}%`
            number1.style.transition = "transform 1s ease, top 1.5s ease"
            numberOfLessThanComparison = -1
            numberOfSwaps += 1
        } else if (parseInt(number1.value) < parseInt(number2.value) || parseInt(number1.value) == parseInt(number2.value)) {
            number1.style.transform = "translateX(0)"
            number1.style.top = `${GO_DOWN}%`
            number1.style.transition = "transform 1s ease, top 1s ease"
            numberOfLessThanComparison += 1
        }
    }, 2000)
}
startButton.addEventListener("click", sort)

randomButton.addEventListener("click", () => {
    if (isSorting == true) {
        let numbers = document.querySelectorAll("input")
        numbers.forEach(number => {
            number.remove()
        })
        for (let i = 0; i < 5; i++) {
            let newInput = document.createElement("input")
            newInput.value = Math.floor(Math.random() * 10)
            numberList.appendChild(newInput)
        }
        isSorting = false
    } else {
        let numbers = document.querySelectorAll("input")
        numbers.forEach(number => {
            number.value = Math.floor(Math.random() * 10)
        })
    }
    swaps.textContent = 0
    rounds.textContent = 0
})
