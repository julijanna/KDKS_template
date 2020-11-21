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
  setMenuHandlers(screenWidth);
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

// clubs map visualization

// add class to the table

function createClubs() {
  let clubsCollection = document.getElementsByTagName("table")[0].children[1]
    .children;
  const clubs = [];

  for (let item of clubsCollection) {
    let strCords = item.getAttribute("data-coords");
    let lon = parseFloat(item.getAttribute("data-coords").split(",")[1]);
    let lat = parseFloat(item.getAttribute("data-coords").split(",")[0]);

    club = {
      coords: [lon, lat],
      strCords: strCords,
      name: item.children[1].innerHTML,
    };
    clubs.push(club);
  }
  return clubs;
}

function drawMap(switzerland, clubs, multiplicator = 1, multiplicatorPin = 1) {
  let length = 800 * multiplicator;
  let width = 400 * multiplicator;
  let pinLength = 20 * multiplicatorPin;
  let pinWidth = 14 * multiplicatorPin;
  let projection = d3.geoMercator();
  projection
    .center([8.4, 46.8])
    .scale(7500 * multiplicator)
    .translate([length / 2, width / 2]);

  let path = d3.geoPath().projection(projection);
  let container = d3.select("#clubs__chart");

  container.attr("width", length).attr("height", width);

  container
    .selectAll("path")
    .data(switzerland)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "#ccc");

  d3.select("body")
    .append("div")
    .attr("id", "clubs__tooltip")
    .attr("style", "position: absolute; opacity: 0;");

  container
    .selectAll("image")
    .data(clubs)
    .enter()
    .append("svg:image")
    .attr("xlink:href", "/templates/KDKS/images/Map_pin_icon.svg")
    .attr("x", function (d) {
      return projection(d.coords)[0] - pinWidth / 2;
    })
    .attr("y", function (d) {
      return projection(d.coords)[1] - pinLength;
    })
    .attr("width", pinWidth)
    .attr("height", pinLength)
    .attr("align", "top")
    .on("mouseover", function (d) {
      d3.select("#clubs__tooltip")
        .transition()
        .duration(200)
        .style("opacity", 1)
        .text(d.name)
        .style("left", d3.event.pageX + 10 + "px")
        .style("top", d3.event.pageY + 10 + "px");
    })
    .on("mouseout", function () {
      d3.select("#clubs__tooltip").style("opacity", 0).text("");
    })
    .on("click", function (d) {
      console.log(d.coords);
      scrollToSection(d);
    });
}

function scrollToSection(element) {
  let targetRow = document.querySelector(
    "[data-coords = '" + element.strCords + "']"
  );
  console.log(targetRow.offsetTop);
  targetRow.scrollIntoView({ behavior: "smooth" });
}

function createMap(data, multiplicator, multiplicatorPin) {
  let clubs = createClubs();
  drawMap(data.features, clubs, multiplicator, multiplicatorPin);
}

d3.json("/templates/KDKS/js/switzerland.geojson").then(function (data) {
  let multiplicator = 1;
  let multiplicatorPin = 1;
  if (screenWidth >= 1200) {
    multiplicator = 1.5;
    multiplicatorPin = 1.5;
  } else if (screenWidth < 850) {
    multiplicator = screenWidth / 800;
  }
  createMap(data, multiplicator, multiplicatorPin);
});
