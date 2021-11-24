'use strict';

// DOM
const container = document.getElementById('container');
const btnEraser = document.querySelector('.btn--eraser');
const btnColorize = document.querySelector('.btn--colorize');
const range_slider = document.querySelector('#slider-input');
const grid_size_display = document.querySelector('#display_grid_size');
const rand_color_switch = document.querySelector('#random-color');

let rows = document.getElementsByClassName('gridRow');
let cells = document.querySelectorAll('.cell');
let newCell;

const color_generator = function () {
  let colors = [
    '#ee6f57',
    '#00334ed6',
    '#f6f5f5',
    '#6a2c70',
    '#b83b5e',
    '#eeecda',
    '#fca652',
    '#ccf6c8',
    '#ff414d',
    '#d9ecf2',
    '#81b214',
    '#bfdcae',
    '#cd0a0a',
    '#1a1a2e',
    '#ed6663',
    '#aa4a30',
    '#7d0633',
    '#28df99',
    '#8675a9',
    '#709fb0',
  ];

  let rand_color = colors[Math.floor(Math.random() * colors.length)];
  return rand_color;
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

  cells.forEach(square => {
    square.addEventListener('mouseover', function () {
      square.style.background = 'magenta';
    });
  });
};

const activate_rand_color = function () {
  cells = document.querySelectorAll('.cell');

  rand_color_switch.addEventListener('change', function () {
    if (this.checked) {
      cells.forEach(square => {
        square.addEventListener('mouseover', function () {
          square.style.background = color_generator();
        });
      });
    } else {
      paintDefault();
    }
  });
};

const clearGrid = () => {
  let eraseGrid = document.querySelectorAll('.cell');
  for (let i = 0; i < eraseGrid.length; i++) {
    eraseGrid[i].style.backgroundColor = '';
  }
};

const changeGridSize = function () {
  let num = range_slider.value;
  display_grid_size.textContent = `Size: ${num} x ${num}`;
  container.innerHTML = '';
  drawGrid(num, num);
  paintDefault();
};

drawGrid(16, 16);
activate_rand_color();
paintDefault();

btnEraser.addEventListener('click', clearGrid);

// range_slider.addEventListener('input', changeGridSize);

// TODO
range_slider.addEventListener('input', function () {
  let num = range_slider.value;
  display_grid_size.textContent = `Size: ${num} x ${num}`;
  container.innerHTML = '';
  drawGrid(num, num);
  paintDefault();

  let grid_squares = document.querySelectorAll('.grid-square');

  if (border_switch.checked) {
    grid_squares.forEach(square => {
      square.classList.add('border');
    });
  } else {
    grid_squares.forEach(square => {
      square.classList.remove('border');
    });
  }

  activate_rand_color();
  if (rand_color_switch.checked) {
    grid_squares.forEach(square => {
      square.addEventListener('mouseover', function () {
        square.style.background = color_generator();
      });
    });
  } else if (!rand_color_switch.checked) {
    grid_squares.forEach(square => {
      square.addEventListener('mouseover', function () {
        square.style.background = '#ee6f57';
      });
    });
  }

  reset_canvas();
});
