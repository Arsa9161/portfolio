const dom_elements = {
  switch_btns: document.querySelectorAll(".switch-btn"),
  theme_controllers: document.querySelectorAll(".theme-controller"),
  theme_items: document.querySelectorAll(".config__theme-controller__items"),
  intro_bg: document.getElementById("intro-bg"),
  html: document.documentElement,
  triangle: document.getElementById("triangle"),
  home: document.getElementById("home"),
  menu_icon: document.getElementById("menu-icon"),
  modal: document.querySelector(".modal"),
  // admin
  admin: document.getElementById("admin"),
  admin_form: document.getElementById("admin-form"),
  admin_user: document.querySelector("#admin #username"),
  admin_pass: document.querySelector("#admin #password"),
};

export default dom_elements;
