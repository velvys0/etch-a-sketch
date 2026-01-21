const container = document.querySelector("#container");

let resolution = 16


function RandomColor() {
    return rgb = `background-color: rgb(${(Math.random()*255)}, ${(Math.random()*255)}, ${(Math.random()*255)})`
}



function newGrid() {
    if (document.querySelector('.divSquare') !== null) {
        allDivRow = document.querySelectorAll(".divRow")
        allDivRow.forEach((row) => {
            container.removeChild(row) 
        })
    }

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

    allDivSquare = document.querySelectorAll(".divSquare")
    allDivSquare.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.cssText = RandomColor()
        })
    })
}

newGrid()

const buttonChangePixels = document.querySelector('button')
buttonChangePixels.addEventListener('click', () => {
    let newRes = prompt("Entrer une résolution de pixels jusqu'à 100")

    if (newRes >= 100) {
        return
    }
    resolution = newRes
    newGrid()
})