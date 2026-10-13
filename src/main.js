const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
    "X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
    "y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const genPasswordBtn = document.getElementById("gen-password-btn")
const firstPassword = document.getElementById("first-password")
const secondPassword = document.getElementById("second-password")

const formEl = document.getElementById("form")
const inputEl = document.getElementById("input-el")
const passwordEl = document.getElementById("password-el")

genPasswordBtn.addEventListener("click", generatePasswords)
formEl.addEventListener("submit", getInput)

function getInput(event) {
    event.preventDefault()
    passwordEl.textContent = `Password length- ${inputEl.value}`
}

function getPassword() {
    let password = ""
    let passwordLength = inputEl.value

    for(let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        let passwordChar = characters[randomIndex]
        password += passwordChar
    }
    return password
}

function generatePasswords() {
    firstPassword.value = getPassword()
    secondPassword.value = getPassword()
    inputEl.value = ""
}


