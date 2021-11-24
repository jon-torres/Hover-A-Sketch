'use strict';

// DOM
const container = document.getElementById('container');
const btnEraser = document.querySelector('.btn--eraser');
let rows = document.getElementsByClassName('gridRow');
let cells = document.querySelectorAll('.cell');
let newCell;

// Takes (rows, columns) arguments and makes a grid
const drawGrid = (numOfRows, numOfCols) => {
  // Creates rows
  for (let r = 0; r < numOfRows; r++) {
    let row = document.createElement('div');
    container.appendChild(row).className = 'gridRow';
  }
  // Creates columns
  for (let i = 0; i < rows.length; i++) {
    for (let c = 0; c < numOfCols; c++) {
      newCell = document.createElement('div');
      rows[i].appendChild(newCell).className = 'cell';
    }
  }
};

//  If the selected target is not the container box (div), paint it.
const paint = e => {
  if (e.target !== container) {
    // console.log(event.target);
    e.target.style.backgroundColor = 'magenta';
  }
};

const clearGrid = () => {
  let eraseGrid = document.querySelectorAll('.cell');
  for (let i = 0; i < eraseGrid.length; i++) {
    eraseGrid[i].style.backgroundColor = '';
  }
};

drawGrid(64, 64);

container.addEventListener('mouseover', paint);
btnEraser.addEventListener('click', clearGrid);
