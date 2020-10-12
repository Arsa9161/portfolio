import "../styles/styles.css";
import dom_elements from "./view/base";
import ChangeTheme from "./modal/change_theme";
import DrawLogo from "./modal/draw_logo";
import Intro from "./modal/intro_animation";
import "./modal/snake";
// import "./view/draw_logo";
if (module.hot) {
  module.hot.accept();
}

let theme = new ChangeTheme();
let logo = new DrawLogo();
let curr_html = window.location.pathname.substring(
  window.location.pathname.lastIndexOf("/") + 1
);
if (curr_html === "index.html" || curr_html === "") {
  new Intro();
}

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
  // theme controller arilgah, switch hiihed arilgagdahgui bolgoh dutuu!!!
  window.addEventListener("resize", logo.preparePath);
  window.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("theme-controller") &&
      !e.target.classList.contains("config__theme-controller__items") &&
      !e.target.classList.contains("switch-btn")
    ) {
      console.log("yes");
      dom_elements.theme_items.forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
    }
  });
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
    // switch btn-g select hiih
    selectSwitchBtn(cur_theme);
  } else {
    // herev anh udaa webed zochilj bui bol default theme-g olgono
    dom_elements.html.setAttribute("theme", "light");
    // switch btn-g select hiih
    selectSwitchBtn("light");
  }
};
const selectSwitchBtn = function (them_name) {
  // switch btn-g select hiih
  dom_elements.switch_btns.forEach((el) => {
    if (el.firstElementChild.dataset.theme == them_name) {
      el.firstElementChild.checked = true;
    }
  });
};
if (dom_elements.menu_icon) {
  dom_elements.menu_icon.addEventListener("click", (e) => {
    dom_elements.menu_icon.classList.toggle("menu-icon--x");
    dom_elements.modal.classList.toggle("modal--active");
  });
}
