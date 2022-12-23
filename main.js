function createGrid(cellCount=16) {
    const grid = document.querySelector('#grid')

    for (let i = 0; i < cellCount; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < cellCount; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

let isMouseDown = false;

function drawOnMouseDown() {
    const selectColor = document.querySelector('#change-color');
    let currentColor = selectColor.options[selectColor.selectedIndex].value;
    const cells = document.querySelectorAll('.cell');
    selectColor.style.backgroundColor = currentColor;
    cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            isMouseDown = true;
            cell.style.backgroundColor = currentColor;
          });
          document.addEventListener('mouseup', () => {
            isMouseDown = false;
          });
        cell.addEventListener('mouseover', () => {
            if (isMouseDown) {
                cell.style.backgroundColor = currentColor
            };
        });
    });
}

function activateButtons() {
    const clearButton = document.querySelector('#clear-button')
    clearButton.addEventListener('click', clearGrid);

    const changeCellCountButton = document.querySelector('#change-cell-count-button')
    changeCellCountButton.addEventListener('click', changeCellCount);   
};

function activateColorSelect() {
    const selectColor = document.querySelector('#change-color');
    selectColor.addEventListener('change', () => {
        drawOnMouseDown();
    });
}

function clearGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

function changeCellCount() {
    const grid = document.querySelector('#grid')
    grid.innerHTML = ''
    let cellCount = prompt('How many cells per side? (1-100)');
    while (cellCount < 1 || cellCount > 100) {
        cellCount = prompt('Invalid amount. Enter an amount between 1 and 100.');
    }
    createGrid(cellCount);
    drawOnMouseDown();
}


window.addEventListener('load', () => {
    createGrid();
    activateButtons();
    activateColorSelect(); 
    drawOnMouseDown();
});