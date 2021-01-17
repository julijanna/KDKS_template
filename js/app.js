// handling mobile burger menu

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

// handling desktop submenus

const screenWidth = window.innerWidth;
const navChildren = document.getElementsByClassName("nav-child");

setMenuHandlers(window.innerWidth);

window.onresize = function () {
  setMenuHandlers(window.innerWidth);
};

function setMenuHandlers(windowSize) {
  if (windowSize >= 850) {
    document.querySelectorAll(".parent").forEach((item) => {
      item.addEventListener("mouseover", (event) => {
        item.childNodes[1].classList.toggle("styled");
        item.childNodes[1].classList.toggle("unstyled");
      });
      item.addEventListener("mouseout", (event) => {
        item.childNodes[1].classList.toggle("styled");
        item.childNodes[1].classList.toggle("unstyled");
      });
    });
  }
}

// if (screenWidth >= 600) {
//   for (const navChild of navChildren) {
//     navChild.style.display = "none";
//   }
// }

// blending out slideshow when not on main site

const slideshowDiv = document.getElementById("slideshow");

if (slideshowDiv.childNodes.length <= 1) {
  slideshowDiv.style.display = "none";
}

// blending out links to more posts

const morePostsDiv = document.getElementsByClassName("items-more");
if (morePostsDiv.length > 0) {
  morePostsDiv[0].style.display = "none";
}
