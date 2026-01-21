const container = document.querySelector("#container");

resolution = 16


for (i = 0; i < resolution; i++) {
    let divRow = document.createElement("div");
    divRow.classList.add('divRow')
    container.appendChild(divRow)
    for (j = 0; j < resolution; j++) {
        const divSquare = document.createElement("div");
        divSquare.classList.add('divSquare')
        divRow.appendChild(divSquare)
    }
}

const allDivSquare = document.querySelectorAll(".divSquare")

allDivSquare.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.cssText = 'background-color: red'
    })
})


const buttonChangePixels = document.querySelector('button')

buttonChangePixels.addEventListener('click', () => {
    let newRes = prompt("Entrer une résolution de pixels jusqu'à 100")
    resolution = newRes
})