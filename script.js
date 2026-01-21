const container = document.querySelector("#container");

const divRow = document.createElement("div");
divRow.classList.add('divRow')
container.appendChild(divRow)


const squareDiv = document.createElement("div");
squareDiv.classList.add('divSquare')
divRow.appendChild(squareDiv)

const squareDiv2 = document.createElement("div");
squareDiv2.classList.add('divSquare')
divRow.appendChild(squareDiv2)