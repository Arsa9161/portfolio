import "../styles/styles.css";
import dom_elements from "./view/base";
import ChangeTheme from "./modal/change_theme";
import "./view/draw_logo";
if (module.hot) {
  module.hot.accept();
}

let theme = new ChangeTheme();

dom_elements.theme_controllers.forEach((el) =>
  el.addEventListener("click", (e) => {
    dom_elements.theme_items.forEach((el) => el.classList.toggle("active"));
  })
);

window.addEventListener("load", (e) => {
  //window load hiih uyed local storage-ees umnuh theme-n neriig avna
  let cur_theme = localStorage.getItem("theme");
  if (cur_theme) {
    // herev umnuh theme-n ner hadgalagdsan bol html attribute-d ologon
    dom_elements.html.setAttribute("theme", cur_theme);
    // tuhain theme-r solino
    theme.changeTheme(cur_theme);
  } else {
    // herev anh udaa webed zochilj bui bol default theme-g olgono
    dom_elements.html.setAttribute("theme", "light");
  }
});
/////////////////////////
let pro = document.querySelector(".intro__pro-picture");
let bg = document.querySelector(".intro__img-bg");
let parag = document.querySelector(".intro__parag");
let intro_shadow = document.querySelector(".intro__shadow");
let intro = document.querySelector(".intro");
window.addEventListener("scroll", (e) => {
  let scroll = window.pageYOffset;
  let window_height = window.innerHeight;

  //(scroll / window_height) * 100
  pro.style.marginTop = `${scroll}px`;
  bg.style.marginTop = `${scroll}px`;
  parag.style.marginTop = `${scroll}px`;

  if (window.innerWidth >= 1200) {
    pro.style.marginLeft = `${-scroll / 2}px`;
    bg.style.marginLeft = `${scroll / 2}px`;
    parag.style.marginRight = `${-scroll / 2}px`;
  }
  //#091921
  // shadow
  intro_shadow.style.height = `${scroll}%`;
  intro_shadow.style.opacity = scroll / intro.offsetHeight + 0.55;
});
