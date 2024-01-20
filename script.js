const panels = document.querySelectorAll(".Panel");
panels.forEach(function (Panel) {
  Panel.addEventListener("click", () => {
    removeActiveClasses();
    Panel.classList.add("Active");
  });
});

function removeActiveClasses() {
  panels.forEach((Panel) => {
    Panel.classList.remove("Active");
  });
}
