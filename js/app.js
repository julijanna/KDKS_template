document.getElementById("burger__menu").onclick = function () {
  document.querySelector("body").classList.toggle("burger__menu__open");
  let desktopContents = document.getElementsByClassName("desktop__content");
  //   desktopContents.style.display = "block";
  console.log(desktopContents);
  console.log(desktopContents[0].style.display);

  if (
    !desktopContents[0].style.display ||
    desktopContents[0].style.display == "none"
  ) {
    for (const desktopContent of desktopContents) {
      desktopContent.style.display = "flex";
    }
  } else {
    for (const desktopContent of desktopContents) {
      desktopContent.style.display = "none";
    }
  }
};
