const GRID = 600; 
let squaresPerSide = 16
let randomColorMode = false; //tracks whether the random button has been clicked

//create the grids within the sketchArea this is dynamic based on the size of the GRID
const sketchArea = document.querySelector("#screen-area"); 
sketchArea.style.width = sketchArea.style.height = `${GRID}px`;

function createGridCells() {
    const numSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${(GRID / squaresPerSide)-2}px`;

    for (let i = 0; i < numSquares; i++) {
        const gridCell = document.createElement("div")

        gridCell.style.width = gridCell.style.width = widthOrHeight;
        gridCell.classList.add('cell');
        
        sketchArea.appendChild(gridCell);

        gridCell.addEventListener('mouseover', changeColor); // event listener looking for the mouse to enter the cell and then changing its color
    }
}

function changeColor() {
    if (randomColorMode) {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        this.style.backgroundColor = randomColor;
    } else {
        this.style.backgroundColor = "black";
    }
    
}

function updateGrid() {
    const input = document.getElementById('grid-size');
    const newSize = parseInt(input.value, 10);

    if (!isNaN(newSize) && newSize >0) {
        squaresPerSide = newSize;
        clearGrid();
        createGridCells();
    } else {
        alert("Please enter a number greter than 0")
    }
}

function clearGrid() {
    sketchArea.innerHTML = "";
}

function resetGrid() {
    squaresPerSide = 16;
    clearGrid();
    createGridCells();
}

document.getElementById('reset').addEventListener('click', resetGrid);
document.getElementById('random').addEventListener('click', function(){
    randomColorMode = !randomColorMode;
})

createGridCells();