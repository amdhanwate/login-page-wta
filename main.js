const email = document.querySelector("#email")
const password = document.querySelector("#password")
const submitBtn = document.querySelector(".btn")

let matchEmailRegex = /[a-zA-Z]{1}[a-zA-Z0-9]{2,}@[a-zA-Z]{1}[a-zA-Z0-9\.\-_]{2,}\.[a-zA-Z]{1}[a-zA-Z]{2,}/
let matchPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (matchEmailRegex.test(email.value)) {
        if (password.value.length > 8) {
            alert("Validation Successful!")
        } else {
            alert("Password must be atleat 8 characters long!")
        }
    } else {
        alert("Please Enter Valid email Address!")
    }
})