import "../styles/styles.css";
import dom_elements from "./view/base";
import ChangeTheme from "./modal/change_theme";
import DrawLogo from "./modal/draw_logo";
import Intro from "./modal/intro_animation";

// import "./view/draw_logo";
if (module.hot) {
  module.hot.accept();
}

let theme = new ChangeTheme();
let logo = new DrawLogo();
new Intro();

// init web site events
(function () {
  dom_elements.theme_controllers.forEach((el) =>
    el.addEventListener("click", (e) => {
      dom_elements.theme_items.forEach((el) => el.classList.toggle("active"));
    })
  );

  window.addEventListener("load", (e) => {
    // theme tohiruulah
    setTheme();
    // logog zurah
    logo.drawLogo();
  });

  window.addEventListener("resize", logo.preparePath);
})();
// theme tohiruulah
const setTheme = function () {
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
};
