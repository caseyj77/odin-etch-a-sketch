const GRID = 600; 
let rows = 16;
let cols = 16;

//create the grids within the sketchArea this is dynamic based on the size of the GRID
const sketchArea = document.querySelector("#screen-area"); 
sketchArea.style.width = `${GRID}px`;
sketchArea.style.height = `${GRID}px`;

// for loop that creates the cells using the rows and cols variables to create cells inside of the 'screen-area' div
function createGridCells() {
    for (let i = 0; i < (rows * cols); i++) {
        const gridCell = document.createElement("div")

        gridCell.style.width = `${(GRID / cols)-2}px`;
        gridCell.style.width = `${(GRID / rows)-2}px`; //had to oadd the -2 to account for the border size//
        gridCell.classList.add('cell');

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener('mouseover', changeColor); // event listenr looking for the mouse to enter the cell and then changing its color
    }
}

function changeColor() {
    this.style.backgroundColor = "black";
}

createGridCells();