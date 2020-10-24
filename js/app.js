document.getElementById("burger__menu").onclick = function () {
  document.querySelector("body").classList.toggle("burger__menu__open");
  let desktopMenus = document.getElementsByClassName("desktop__menu");

  if (!desktopMenus[0].style.display) {
    for (const desktopMenu of desktopMenus) {
      desktopMenu.style.display = "flex";
    }
  } else {
    for (const desktopMenu of desktopMenus) {
      desktopMenu.style.display = "";
    }
  }
};

const slideshowDiv = document.getElementById("slideshow");

console.log(slideshowDiv.childNodes.length);

if (slideshowDiv.childNodes.length <= 1) {
  console.log("here");
  slideshowDiv.style.display = "none";
}
