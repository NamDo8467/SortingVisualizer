const startButton = document.querySelector(".start-btn")
const randomButton = document.querySelector(".random-list")
const numberList = document.getElementsByClassName("number-list")[0]
const navBar = document.getElementsByTagName("ul")[0]
import bubbleSort from "./bubbleSort.js"
import selectionSort from "./selectionSort.js"

// let isSorting = false
let numberOfSwaps = 0
let numberOfRounds = 0

let swaps = document.querySelector(".swaps")
let rounds = document.querySelector(".rounds")

let isActive = ""

const checkActiveAlgorithm = () => {
	for (let i = 0; i < navBar.children.length; i++) {
		if (navBar.children[i].classList.contains("active")) {
			// isActive = navBar.children[i].textContent
			return navBar.children[i].textContent
		}
	}
}

for (let i = 0; i < navBar.children.length; i++) {
	navBar.children[i].addEventListener("click", () => {
		if (checkActiveAlgorithm() == "Bubble Sort") {
			window.location.href = "/views/index.html"
		} else if (checkActiveAlgorithm() == "Selection Sort") {
			window.location.href = "/views/selectionSort.html"
		}
	})
}
startButton.isSorting = false

startButton.addEventListener("click", event => {
	if (checkActiveAlgorithm() == "Bubble Sort") {
		bubbleSort(event)
	} else if (checkActiveAlgorithm() == "Selection Sort") {
		selectionSort(event)
		
	}
})

randomButton.addEventListener("click", () => {
	let numbers = document.getElementsByTagName("input")

	if (startButton.isSorting == true) {
		for (let i = 0; i < numbers.length; i++) {
			numbers[i].remove()
			i -= 1
		}

		for (let i = 0; i < 5; i++) {
			let newInput = document.createElement("input")
			newInput.value = Math.floor(Math.random() * 10)
			numberList.appendChild(newInput)
		}
		startButton.isSorting = false
	} else {
		for (let number of numbers) {
			number.value = Math.floor(Math.random() * 10)
		}
	}
	numberOfSwaps = 0
	numberOfRounds = 0
	swaps.textContent = numberOfSwaps
	rounds.textContent = numberOfRounds
})
