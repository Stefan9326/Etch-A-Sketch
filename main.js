function createGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    const cellCount = getCellCount();

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

    clearButton.addEventListener('click', () => {
        clearGrid();
    });

    changeCellCountButton.addEventListener('click', () => {
        changeCellCount();
    });

    buttonContainer.appendChild(clearButton);
    buttonContainer.appendChild(changeCellCountButton);
    document.body.appendChild(buttonContainer);
};

function createColorSelect() {
    const selectColor = document.createElement('select');
    selectColor.classList.add('select-color');
    const colors = ['black', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'white'];
    colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        selectColor.appendChild(option);
    });

    selectColor.addEventListener('change', () => {
        let currentColor = selectColor.options[selectColor.selectedIndex].value;
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.removeEventListener('mouseover', () => {
                cell.style.backgroundColor = 'black';
            });
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = currentColor;
            });
        });
    });

    document.body.appendChild(selectColor);
}

function clearGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

function getCellCount() {
    let cellCount = prompt('How many cells per side? (1-100)');
    while (cellCount < 1 || cellCount > 100) {
        cellCount = prompt('Invalid amount. Enter an amount between 1 and 100.');
    }
    return cellCount;
}

function changeCellCount() {
    document.body.innerHTML = '';
    main();
}


function main() {
    createGrid();
    createButtons();
    createColorSelect();
    allowDraw();
}

main();