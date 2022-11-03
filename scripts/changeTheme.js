const changeThemeColorButton = document.querySelector(".change-theme-color-button")
const innerCircleOfChangeThemButton = document.querySelector(".inner-circle")
const body = document.querySelector("body")
const navBar = document.querySelector("nav ul")
changeThemeColorButton.addEventListener("click", () => {
    if (innerCircleOfChangeThemButton.style.backgroundColor == "gray") {
        innerCircleOfChangeThemButton.style.backgroundColor = "white"
    } else {
        innerCircleOfChangeThemButton.style.backgroundColor = "gray"
    }
    if (body.classList.contains("change-body-background-dark")) {
        body.classList.toggle("change-body-background-light")
    } else {
        body.classList.toggle("change-body-background-dark")
    }
    for (let item of navBar.children) {
        item.classList.toggle("change-text-color")
    }
})
