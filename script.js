const container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
    let divRow = document.createElement("div");
    divRow.classList.add('divRow')
    container.appendChild(divRow)
    for (j = 0; j < 16; j++) {
        const squareDiv3 = document.createElement("div");
        squareDiv3.classList.add('divSquare')
        divRow.appendChild(squareDiv3)
    }
}