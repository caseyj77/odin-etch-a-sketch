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
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; //used google (css-tricks.com) to help with this feature had no idea how to create a random color
        this.style.backgroundColor = randomColor;
    } else {
        this.style.backgroundColor = "black";
    }
    
}

// This function updates the size of the grid based on user input
function updateGrid() {
    // Get the input element where the user enters the new grid size
    const input = document.getElementById('grid-size');
    
    // Parse the input value to an integer with base 10
    const newSize = parseInt(input.value, 10);

    // Check if the parsed value is not a number or is less than or equal to 0
    if (!isNaN(newSize) && newSize > 0) {
        // If the input is valid, update the number of squares per side
        squaresPerSide = newSize;
        
        // Clear the current grid
        clearGrid();
        
        // Create a new grid with the updated size
        createGridCells();
    } else {
        // If the input is not a valid number or is less than or equal to 0, show an alert
        alert("Please enter a number greater than 0");
    }
}

function clearGrid() {
    sketchArea.innerHTML = ""; // removes grid
}

function resetGrid() {
    squaresPerSide = 16;
    clearGrid();
    createGridCells(); // resets grid to 16 by 16
}

document.getElementById('reset').addEventListener('click', resetGrid);
document.getElementById('random').addEventListener('click', function(){
    randomColorMode = !randomColorMode; // this toggles randomeColorMode on and off
})

createGridCells();