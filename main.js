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

createGrid();
allowDraw();