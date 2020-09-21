document.getElementById("burger__menu").onclick = function () {
  document.querySelector("body").classList.toggle("burger__menu__open");
  let desktopContents = document.getElementsByClassName("desktop__content");

  if (!desktopContents[0].style.display) {
    for (const desktopContent of desktopContents) {
      desktopContent.style.display = "flex";
    }
  } else {
    for (const desktopContent of desktopContents) {
      desktopContent.style.display = "";
    }
  }
};
