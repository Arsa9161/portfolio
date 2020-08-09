const { default: dom_elements } = require("./base");

let a = 5;

let fA = `M ${a} ${11 * a} l ${4 * a} ${-10 * a} h ${2 * a} m 0 ${
  2 * a
} h ${-a} l  ${-a}  ${3 * a} h  ${a}  m  0  ${2 * a} h  ${-3.5 * a + 10} l  ${
  -a - 2
}  ${3 * a}  `;

let gur = `m ${7 * a} ${-11 * a} l ${-4 * a} ${10.5 * a} h ${8 * a} z`;
let lA = `m ${7 * a} ${11 * a} l  ${-a - 2} ${-3 * a} h ${-2 * a + 3} m 0 ${
  -2 * a
} h ${a} l  ${-a}  ${-3 * a} h ${-a} m 0 ${-2 * a} h  ${2 * a} l ${4 * a}  ${
  10 * a
}  `;
let draw = fA + gur + lA;
// Get the id of the <path> element and the length of <path>
var triangle = dom_elements.triangle;
triangle.setAttribute("d", draw);

var length = triangle.getTotalLength();

// The start position of the drawing
triangle.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
triangle.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

let home = dom_elements.home;
let browser_height = window.innerHeight;
function myFunction() {
  let scroll_percent =
    (triangle.getBoundingClientRect().y / browser_height) * 100;

  if (scroll_percent < 90) {
    let draw = -3 * (scroll_percent - 60);
    // Reverse the drawing (when scrolling upwards)
    triangle.style.strokeDashoffset = length - draw;
  } else {
    triangle.style.strokeDashoffset = length;
  }
}

window.addEventListener("load", myFunction);
