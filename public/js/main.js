// Exo1
let nbr1Exo1 = document.querySelectorAll("input")[0]
let nbr2Exo1 = document.querySelectorAll("input")[1]

let btn1 = document.getElementsByTagName("button")[0]
let egal = document.getElementById("response1")

btn1.addEventListener("click", () => {
    egal.innerText = Number(nbr1Exo1.value) + Number(nbr2Exo1.value)
})

// Exo2
let nbr1Exo2 = document.querySelectorAll("input")[2]
let nbr2Exo2 = document.querySelectorAll("input")[3]