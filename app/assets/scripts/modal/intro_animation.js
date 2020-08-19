export default class Intro {
  constructor() {
    this.pro = document.querySelector(".intro__pro-picture");
    this.bg = document.querySelector(".intro__img-bg");
    this.parag = document.querySelector(".intro__parag");
    this.intro_shadow = document.querySelector(".intro__shadow");
    this.intro = document.querySelector(".intro");
    this.events();
  }

  events() {
    window.addEventListener("scroll", (e) => this.animate());
  }
  animate() {
    let scroll = window.pageYOffset;

    this.pro.style.marginTop = `${scroll}px`;
    this.bg.style.marginTop = `${scroll}px`;
    this.parag.style.marginTop = `${scroll}px`;

    if (window.innerWidth >= 1200) {
      this.pro.style.marginLeft = `${-scroll / 2}px`;
      this.bg.style.marginLeft = `${scroll / 2}px`;
      this.parag.style.marginRight = `${-scroll / 2}px`;
    }

    // shadow
    this.intro_shadow.style.height = `${scroll}%`;
    this.intro_shadow.style.opacity = scroll / this.intro.offsetHeight + 0.55;
  }
}
