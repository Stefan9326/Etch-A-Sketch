function createGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    const cellCount = 16;

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
    document.body.insertBefore(grid, document.querySelector('.button-container'));
}

function allowDraw() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    });
}

function createButtons() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const clearButton = document.createElement('button');
    clearButton.classList.add('clear-button');
    clearButton.textContent = 'Clear Grid';

    const changeCellCountButton = document.createElement('button');
    changeCellCountButton.classList.add('change-cell-count-button');
    changeCellCountButton.textContent = 'Change Cell Count';
    
    const changeColorButton = document.createElement('button');
    changeColorButton.classList.add('change-color-button');
    changeColorButton.textContent = 'Change Color';

    buttonContainer.appendChild(clearButton);
    buttonContainer.appendChild(changeCellCountButton);
    buttonContainer.appendChild(changeColorButton);
    document.body.appendChild(buttonContainer);
};

createGrid();
allowDraw();
createButtons();