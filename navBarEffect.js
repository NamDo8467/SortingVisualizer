const navItems = document.querySelectorAll(".main-nav ul li")

navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
        navItem.classList.add("active")
        navItems.forEach(item => {
            if (item != navItem && navItem.classList.contains("active")) {
                item.classList.remove("active")
            }
        })
    })
})
