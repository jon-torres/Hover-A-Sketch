'use strict';

// DOM

const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.querySelectorAll('.cell');

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

const paint = function (e) {
  if (e.target !== container) {
    // console.log(event.target);
    e.target.style.backgroundColor = 'magenta';
  }
};

drawGrid(16, 16);

container.addEventListener('mouseover', paint);
