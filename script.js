'use strict';

// DOM
const container = document.getElementById('container');
const btnEraser = document.querySelector('.btn--eraser');
let rows = document.getElementsByClassName('gridRow');
let cells = document.querySelectorAll('.cell');
let newCell;

// Takes (rows, columns) input and makes a grid
const drawGrid = function (numOfRows, numOfCols) {
  // Creates rows
  for (let r = 0; r < numOfRows; r++) {
    let row = document.createElement('div');
    container.appendChild(row).className = 'gridRow';
  }
  // Creates columns
  for (let i = 0; i < rows.length; i++) {
    for (let c = 0; c < numOfCols; c++) {
      let newCell = document.createElement('div');
      rows[i].appendChild(newCell).className = 'cell';
    }
  }
};

//  If the selected target is not the container box (div), paint it.
const paint = function (e) {
  if (e.target !== container) {
    // console.log(event.target);
    e.target.style.backgroundColor = 'magenta';
  }
};

const clearGrid = () => {
  let clearTarget = document.querySelectorAll('.cell');
  for (let i = 0; i < clearTarget.length; i++) {
    clearTarget[i].style.backgroundColor = '';
  }
};

drawGrid(16, 16);

container.addEventListener('mouseover', paint);
btnEraser.addEventListener('click', clearGrid);
