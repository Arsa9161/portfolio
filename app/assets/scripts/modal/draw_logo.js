import dom_elements from "../view/base";

export default class DrawLogo {
  constructor() {
    this.triangle = dom_elements.triangle;
    this.preparePath();
    this.prepareDraw();
    this.events();

    return this;
  }
  events() {
    window.addEventListener("scroll", (e) => this.drawLogo());
  }
  prepareDraw() {
    this.length = this.triangle.getTotalLength();
    // The start position of the drawing
    this.triangle.style.strokeDasharray = this.length;

    // Hide thethis.triangle by offsetting dash. Remove this line to show thethis.triangle before scroll draw
    this.triangle.style.strokeDashoffset = this.length;
  }
  preparePath() {
    let a;
    if (window.innerWidth >= 700) {
      a = 5;
    } else {
      a = 4;
    }

    let fA = `M ${a} ${11 * a} l ${4 * a} ${-10 * a} h ${2 * a} m 0 ${
      2 * a
    } h ${-a} l  ${-a}  ${3 * a} h  ${a}  m  0  ${2 * a} h  ${
      -3.5 * a + 10
    } l  ${-a - 2}  ${3 * a}  `;

    let gur = `m ${7 * a} ${-11 * a} l ${-4 * a} ${10.5 * a} h ${8 * a} z`;
    let lA = `m ${7 * a} ${11 * a} l  ${-a - 2} ${-3 * a} h ${-2 * a + 3} m 0 ${
      -2 * a
    } h ${a} l  ${-a}  ${-3 * a} h ${-a} m 0 ${-2 * a} h  ${2 * a} l ${
      4 * a
    }  ${10 * a}  `;
    // logonii pointuudiin data
    let draw = fA + gur + lA;

    this.triangle.setAttribute("d", draw);
  }

  drawLogo() {
    let scroll_percent =
      (this.triangle.getBoundingClientRect().y / window.innerHeight) * 100;

    if (scroll_percent < 90) {
      let draw = -3 * (scroll_percent - 60);
      // Reverse the drawing (when scrolling upwards)

      this.triangle.style.strokeDashoffset = this.length - draw;
    } else {
      this.triangle.style.strokeDashoffset = this.length;
    }
  }
}
