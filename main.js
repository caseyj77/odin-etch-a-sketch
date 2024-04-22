const GRID = 600; 
let squaresPerSide = 16

//create the grids within the sketchArea this is dynamic based on the size of the GRID
const sketchArea = document.querySelector("#screen-area"); 
sketchArea.style.width = sketchArea.style.height = `${GRID}px`;

// for loop that creates the cells using the rows and cols variables to create cells inside of the 'screen-area' div



function createGridCells() {
    const numSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${(GRID / squaresPerSide)-2}px`;

    for (let i = 0; i < numSquares; i++) {
        const gridCell = document.createElement("div")

        gridCell.style.width = gridCell.style.width = widthOrHeight;
        gridCell.classList.add('cell');
        
        sketchArea.appendChild(gridCell);

        gridCell.addEventListener('mouseover', changeColor); // event listenr looking for the mouse to enter the cell and then changing its color
    }
}

function changeColor() {
    this.style.backgroundColor = "black";
}




createGridCells();