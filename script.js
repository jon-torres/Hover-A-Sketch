'use strict';

// DOM
const container = document.getElementById('container');
const btnEraser = document.querySelector('.btn--eraser');
const btnColorize = document.querySelector('.btn--colorize');
const rangeSlider = document.querySelector('#slider-input');
const gridSizeDisplay = document.querySelector('#display-grid-size');
const randomColorSwitch = document.querySelector('#random-color');

let rows = document.getElementsByClassName('gridRow');
let cells = document.querySelectorAll('.cell');
let newCell;

const randomColorGenerator = function () {
  const hexValues = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
  ];
  let newColor = '#';

  for (let i = 0; i < 6; i++) {
    let x = Math.round(Math.random() * 14);
    let y = hexValues[x];
    newColor += y;
  }
  return newColor;
};

// Takes (rows, columns) arguments and makes a grid
const drawGrid = function (numOfRows, numOfCols) {
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
const paintDefault = function () {
  cells = document.querySelectorAll('.cell');

  cells.forEach(cell => {
    cell.addEventListener('mouseover', function () {
      cell.style.background = 'turquoise';
    });
  });
};

// Turn random colors on and off
const toggleRandomColor = function () {
  randomColorSwitch.addEventListener('change', function () {
    if (this.checked) {
      cells.forEach(cell => {
        cell.addEventListener('mouseover', function () {
          cell.style.background = randomColorGenerator();
        });
      });
    } else {
      paintDefault();
    }
  });
};

const clearGrid = () => {
  // cells = document.querySelectorAll('.cell');

  btnEraser.addEventListener('click', function () {
    cells.forEach(cell => {
      cell.style.background = '';
    });
  });
};

drawGrid(16, 16);
paintDefault();
toggleRandomColor();
clearGrid();

rangeSlider.addEventListener('input', function () {
  let gridSize = rangeSlider.value;
  gridSizeDisplay.textContent = `Grid Size: ${gridSize} x ${gridSize}`;
  container.innerHTML = '';
  drawGrid(gridSize, gridSize);

  paintDefault();

  toggleRandomColor();
  if (randomColorSwitch.checked) {
    cells.forEach(cell => {
      cell.addEventListener('mouseover', function () {
        cell.style.background = randomColorGenerator();
      });
    });
  } else if (!randomColorSwitch.checked) {
    cells.forEach(cell => {
      cell.addEventListener('mouseover', function () {
        cell.style.background = 'turquoise';
      });
    });
  }

  clearGrid();
});
