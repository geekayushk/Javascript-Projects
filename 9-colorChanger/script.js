const button = document.querySelectorAll(".button")
const body = document.body;

button.forEach((btn) => {
    // console.log(btn)
    btn.addEventListener("click", (e) => {
        console.log(e)
        console.log(e.target)
        if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "orange") {
            body.style.backgroundColor = e.target.id
        }
    })
})