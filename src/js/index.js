let input = document.querySelectorAll(".question-form")

let inputSpan = document.querySelectorAll(".span")

let button = document.querySelector(".button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    for (i = 0; i < input.length; i++) {
        if (input[i].value == "") {
            // console.log(input[i].classList)

            input[i].classList.add("incomplete-field")

            inputSpan[i].classList.add("error")
        }
    }
})

function addFilledField(input) {
    input.classList.add("filled-field")

    let bordaVermelha = input.classList.contains("incomplete-field");

    let inputIndex = parseFloat(input.classList[1])

    console.log(inputIndex)

    if (bordaVermelha) {
        input.classList.remove("incomplete-field")

        console.log("oi")

        inputSpan[inputIndex].classList.remove("error")
    }
}