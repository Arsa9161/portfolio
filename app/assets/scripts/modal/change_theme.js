import dom_elements from "../view/base";

export default class ChangeTheme {
  constructor() {
    this.switch_btns = Array.from(dom_elements.switch_btns).map(
      (el) => el.firstElementChild
    );
    if (dom_elements.intro_bg) {
      this.intro_bg = Array.from(dom_elements.intro_bg.children);
    }
    this.html = document.documentElement;
    this.events();
  }

  events() {
    this.switch_btns.forEach((el) =>
      el.addEventListener("click", (e) => {
        if (el.checked) {
          const theme_name = el.dataset.theme;
          localStorage.setItem("theme", theme_name);
          this.changeTheme(theme_name);
        }
      })
    );
  }
  changeTheme(theme) {
    // html theme attribute-г өөрчилнө
    this.html.setAttribute("theme", theme);
    if (this.intro_bg) {
      // Солих хэрэгтэй url-уудаа авна
      const urls = this.intro_bg.map((el) => el.getAttribute("srcset"));

      // url-уудын folder name-г солино
      const new_urls = urls.map((el) =>
        el.replace(el.split("/")[el.split("/").length - 2], theme)
      );
      // html-дээ шинэ url-аа орлуулна
      this.intro_bg.forEach((el, i) => {
        el.setAttribute("srcset", new_urls[i]);
      });
    }
  }
}
