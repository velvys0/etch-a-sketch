const container = document.querySelector("#container");




for (i = 0; i < 16; i++) {
    let divRow = document.createElement("div");
    divRow.classList.add('divRow')
    container.appendChild(divRow)
    for (j = 0; j < 16; j++) {
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

buttonChangePixels.addEventListener('click', () => console.log('wahou'))