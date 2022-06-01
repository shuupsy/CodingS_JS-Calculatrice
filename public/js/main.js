// Exo1
let nbr1Exo1 = document.querySelectorAll("input")[0]
let nbr2Exo1 = document.querySelectorAll("input")[1]

let btn1 = document.getElementsByTagName("button")[0]
let egal1 = document.getElementById("response1")

btn1.addEventListener("click", () => {
    egal1.innerText = Number(nbr1Exo1.value) + Number(nbr2Exo1.value)
})

// Exo2
let nbr1Exo2 = document.querySelectorAll("input")[2]
let nbr2Exo2 = document.querySelectorAll("input")[3]

let btn2 = document.getElementsByTagName("button")[1]

let signe = document.querySelectorAll("select")[0]
let egal2 = document.getElementById("response2")

btn2.addEventListener("click", () => {
    switch (signe.value) {
        case "+":
            egal2.innerText = Number(nbr1Exo2.value) + Number(nbr2Exo2.value);
            break;
        case "-":
            egal2.innerText = Number(nbr1Exo2.value) - Number(nbr2Exo2.value);
            break;
        case "*":
            egal2.innerText = Number(nbr1Exo2.value) * Number(nbr2Exo2.value);
            break;
        case "/":
            egal2.innerText = Number(nbr1Exo2.value) / Number(nbr2Exo2.value);
            break;
    }

})

// Exo3
let nbr1Exo3 = document.querySelectorAll("input")[4]
let nbr2Exo3 = document.querySelectorAll("input")[5]

let signe3 = document.getElementsByTagName("i")[3]

let signeplus = document.getElementsByClassName("m-1")[0]
signeplus.addEventListener("click", () => {
    signe3.setAttribute("class", "fas fa-plus")
})

let signemoins = document.getElementsByClassName("m-1")[1]
signemoins.addEventListener("click", () => {
    signe3.setAttribute("class", "fas fa-minus")
})

let signefois = document.getElementsByClassName("m-1")[2]
signefois.addEventListener("click", () => {
    signe3.setAttribute("class", "fas fa-times")
})

let signedivise = document.getElementsByClassName("m-1")[3]
signedivise.addEventListener("click", () => {
    signe3.setAttribute("class", "fas fa-divide")
})


let btn3 = document.getElementsByTagName("button")[2]
let egal3 = document.getElementById("response3")


btn3.addEventListener("click", () => {
    if (signe3.getAttribute("class") === "fas fa-plus") {
        egal3.innerText = Number(nbr1Exo3.value) + Number(nbr2Exo3.value);
    } else if (signe3.getAttribute("class") === "fas fa-minus") {
        egal3.innerText = Number(nbr1Exo3.value) - Number(nbr2Exo3.value);
    } else if (signe3.getAttribute("class") === "fas fa-times") {
        egal3.innerText = Number(nbr1Exo3.value) * Number(nbr2Exo3.value);
    } else {
        egal3.innerText = Number(nbr1Exo3.value) / Number(nbr2Exo3.value);
    }
})


// Exo4
let nbr1Exo4 = document.querySelectorAll("input")[6]
let nbr2Exo4 = document.querySelectorAll("input")[7]

let signe4 = document.getElementsByTagName("i")[9]
let egal4 = document.getElementById("response4")
let btn4 = document.getElementsByTagName("button")[7]

console.log(btn4)

// Exo4 - changement de chiffres
let un = document.getElementsByClassName("m-1")[4]
un.addEventListener("click", () => {
    if (nbr1Exo4.value !== "1") {
        nbr1Exo4.value = "1"
    } else {
        nbr2Exo4.value = "1"
        
    }
})
let deux = document.getElementsByClassName("m-1")[5]
deux.addEventListener("click", () => {
    if (nbr1Exo4.value !== "2") {
        nbr1Exo4.value = "2"
    } else {
        nbr2Exo4.value = "2"
        
    }
})

let trois = document.getElementsByClassName("m-1")[6]
trois.addEventListener("click", () => {
    if (nbr1Exo4.value !== "3") {
        nbr1Exo4.value = "3"
    } else {
        nbr2Exo4.value = "3"
        
    }
})

let quatre = document.getElementsByClassName("m-1")[7]
quatre.addEventListener("click", () => {
    if (nbr1Exo4.value !== "4") {
        nbr1Exo4.value = "4"
    } else {
        nbr2Exo4.value = "4"
        
    }
})

let cinq = document.getElementsByClassName("m-1")[8]
cinq.addEventListener("click", () => {
    if (nbr1Exo4.value !== "5") {
        nbr1Exo4.value = "5"
    } else {
        nbr2Exo4.value = "5"
        
    }
})

let six = document.getElementsByClassName("m-1")[9]
six.addEventListener("click", () => {
    if (nbr1Exo4.value !== "6") {
        nbr1Exo4.value = "6"
    } else {
        nbr2Exo4.value = "6"
        
    }
})

let sept = document.getElementsByClassName("m-1")[10]
sept.addEventListener("click", () => {
    if (nbr1Exo4.value !== "7") {
        nbr1Exo4.value = "7"
    } else {
        nbr2Exo4.value = "7"
        
    }
})

let huit = document.getElementsByClassName("m-1")[11]
huit.addEventListener("click", () => {
    if (nbr1Exo4.value !== "8") {
        nbr1Exo4.value = "8"
    } else {
        nbr2Exo4.value = "8"
        
    }
})

let neuf = document.getElementsByClassName("m-1")[12]
neuf.addEventListener("click", () => {
    if (nbr1Exo4.value !== "9") {
        nbr1Exo4.value = "9"
    } else {
        nbr2Exo4.value = "9"
        
    }
})

let zero = document.getElementsByClassName("m-1")[13]
zero.addEventListener("click", () => {
    if (nbr1Exo4.value !== "0") {
        nbr1Exo4.value = "0"
    } else {
        nbr2Exo4.value = "0"
        
    }
})


// Exo4 - changement de signe
let plus = document.getElementsByClassName("m-1")[14]
plus.addEventListener("click", () => {
    signe4.setAttribute("class", "fas fa-plus")
})

let moins = document.getElementsByClassName("m-1")[15]
moins.addEventListener("click", () => {
    signe4.setAttribute("class", "fas fa-minus")
})

let fois = document.getElementsByClassName("m-1")[16]
fois.addEventListener("click", () => {
    signe4.setAttribute("class", "fas fa-times")
})

let divise = document.getElementsByClassName("m-1")[17]
divise.addEventListener("click", () => {
    signe4.setAttribute("class", "fas fa-divide")
})

// Exo4 - Calcul
btn4.addEventListener("click", () => {
    if (signe4.getAttribute("class") === "fas fa-plus") {
        egal4.innerText = Number(nbr1Exo4.value) + Number(nbr2Exo4.value);
    } else if (signe4.getAttribute("class") === "fas fa-minus") {
        egal4.innerText = Number(nbr1Exo4.value) - Number(nbr2Exo4.value);
    } else if (signe4.getAttribute("class") === "fas fa-times") {
        egal3.innerText = Number(nbr1Exo4.value) * Number(nbr2Exo4.value);
    } else {
        egal4.innerText = Number(nbr1Exo4.value) / Number(nbr2Exo4.value);
    }
})