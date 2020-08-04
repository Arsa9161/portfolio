import "../styles/styles.css";
import dom_elements from "./view/base";
import ChangeTheme from "./modal/change_theme";

if (module.hot) {
  module.hot.accept();
}

new ChangeTheme();

dom_elements.theme_controller.addEventListener("click", (e) => {
  dom_elements.theme_items.classList.toggle("active");
});
