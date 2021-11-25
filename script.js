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
  let colors = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
    '#E6B3B3',
    '#6680B3',
    '#66991A',
    '#FF99E6',
    '#CCFF1A',
    '#FF1A66',
    '#E6331A',
    '#33FFCC',
    '#66994D',
    '#B366CC',
    '#4D8000',
    '#B33300',
    '#CC80CC',
    '#66664D',
    '#991AFF',
    '#E666FF',
    '#4DB3FF',
    '#1AB399',
    '#E666B3',
    '#33991A',
    '#CC9999',
    '#B3B31A',
    '#00E680',
    '#4D8066',
    '#809980',
    '#E6FF80',
    '#1AFF33',
    '#999933',
    '#FF3380',
    '#CCCC00',
    '#66E64D',
    '#4D80CC',
    '#9900B3',
    '#E64D66',
    '#4DB380',
    '#FF4D4D',
    '#99E6E6',
    '#6666FF',
  ];

  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
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
