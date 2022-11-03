let numberOfLessThanComparison = 1
let numberOfSwaps = 0
let numberOfRounds = 0

let swaps = document.querySelector(".swaps")
let rounds = document.querySelector(".rounds")
const GO_UP = 2,
	GO_DOWN = 40,
	TRANSLATE_X = 480
let currentSmallestPointer = document.getElementById("current-smallest-pointer")

let minimumNumber = document.createElement("span")
function delay(millisecond) {
	return new Promise(resolve => setTimeout(resolve, millisecond))
}
const checkForValidValues = numbers => {
	for (const n of numbers) {
		if (n.value == "" || isNaN(parseInt(n.value))) {
			return false
		}
	}
}
const selectionSort = async event => {
	event.target.isSorting = true
	let numbers = document.querySelectorAll("input")

	if (checkForValidValues(numbers) == false) {
		alert("Please enter all values")
		numbers.forEach(number => {
			number.value = ""
		})
		return
	}

	// minimumNumber.textContent = `Minimum number is ${numbers[0].value}`
	// minimumNumber.appendChild(document.createElement("br"))
	document.querySelector(".analysis").prepend(minimumNumber)
	for (let i = 0; i < numbers.length - 1; i++) {
		let minIndex = i

		for (let j = i + 1; j < numbers.length; j++) {
			if (event.target.isSorting === false) {
				return
			}

			minIndex = await startSorting(numbers[minIndex], numbers[j], minIndex, j)

			await delay(1000)
		}

		let temp = numbers[minIndex].value
		numbers[minIndex].value = numbers[i].value
		numbers[i].value = temp
		currentSmallestPointer.style.transform = `translateX(${(i + 1) * TRANSLATE_X}%)`
		currentSmallestPointer.style.transition = "transform 1s ease"
		if (event.target.isSorting === false) {
			return
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
const startSorting = async (minValue, currentValue, minIndex, currentIndex) => {
	// let currentSmallestPointer = document.getElementById("current-smallest-pointer")
	// alert(currentValue.value)
	currentValue.style.top = `${GO_UP}%`
	currentValue.style.transition = "top 1s ease"

	setTimeout(() => {
		if (parseInt(minValue.value) > parseInt(currentValue.value) || parseInt(minValue.value) == parseInt(currentValue.value)) {
			currentValue.style.top = `${GO_DOWN}%`
			currentValue.style.transition = "top 1s ease"
			console.log(currentIndex, minIndex)
			// currentSmallestPointer.style.transform = `translateX(${(currentIndex - minIndex) * TRANSLATE_X}%)`
			currentSmallestPointer.style.transform = `translateX(${currentIndex * TRANSLATE_X}%)`

			currentSmallestPointer.style.transition = "transform 1s ease"
			minIndex = currentIndex
			// alert(minIndex)
		} else if (parseInt(minValue.value) < parseInt(currentValue.value)) {
			currentValue.style.top = `${GO_DOWN}%`
			currentValue.style.transition = "top 1s ease"
		}
	}, 1500)

	await delay(2000)
	return minIndex
}

export default selectionSort
