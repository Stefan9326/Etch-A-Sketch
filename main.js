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

function activateButton() {
    const clearButton = document.querySelector('#clear-button')
    clearButton.addEventListener('click', clearGrid);
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

function activateSlider() {
    const resolutionSlider = document.querySelector('#resolution-slider')
    resolutionSlider.addEventListener('change', () => {
        const grid = document.querySelector('#grid')
        grid.innerHTML = ''
        createGrid(resolutionSlider.value);
        drawOnMouseDown();
        });
}


window.addEventListener('load', () => {
    createGrid();
    activateButton();
    activateColorSelect();
    activateSlider(); 
    drawOnMouseDown();
});