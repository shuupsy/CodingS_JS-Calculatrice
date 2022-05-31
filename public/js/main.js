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
    switch(signe.value) {
        case "+" : egal2.innerText = Number(nbr1Exo2.value) + Number(nbr2Exo2.value); break;
        case "-" : egal2.innerText = Number(nbr1Exo2.value) - Number(nbr2Exo2.value); break; 
        case "*" : egal2.innerText = Number(nbr1Exo2.value) * Number(nbr2Exo2.value); break; 
        case "/" : egal2.innerText = Number(nbr1Exo2.value) / Number(nbr2Exo2.value); break;
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



// btn3.addEventListener("click", () => {
//     switch(signe3.value) {
//         case "+" : egal2.innerText = Number(nbr1Exo2.value) + Number(nbr2Exo2.value); break;
//         case "-" : egal2.innerText = Number(nbr1Exo2.value) - Number(nbr2Exo2.value); break; 
//         case "*" : egal2.innerText = Number(nbr1Exo2.value) * Number(nbr2Exo2.value); break; 
//         case "/" : egal2.innerText = Number(nbr1Exo2.value) / Number(nbr2Exo2.value); break;
//     }
    
// })