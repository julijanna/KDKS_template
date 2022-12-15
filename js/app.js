// handling mobile burger menu

/**
 * @description function hides desktoo menus and opens the burger mobile menu on click
 */

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

const navChildren = document.getElementsByClassName("mod-menu__sub");
const screenWidth = window.innerWidth;

setMenuHandlers(screenWidth);

window.onresize = function () {
  setMenuHandlers(window.innerWidth);
};

/**
 * @description for desktop it adds the drop down menus to be styled
 * @param {int} windowSize - a window width
 */

function setMenuHandlers(windowSize) {
  if (windowSize >= 850) {
    document.querySelectorAll(".parent").forEach((item) => {
      item.addEventListener("mouseover", (event) => {
        item.childNodes[1].classList.toggle("list-styled");
        item.childNodes[1].classList.toggle("list-unstyled");
      });
      item.addEventListener("mouseout", (event) => {
        item.childNodes[1].classList.toggle("list-styled");
        item.childNodes[1].classList.toggle("list-unstyled");
      });
    });
  }
}

// blending out links to more posts

const morePostsDiv = document.getElementsByClassName("items-more");
if (morePostsDiv.length > 0) {
  morePostsDiv[0].style.display = "none";
}

// clubs map visualization starts

const clubsMapDiv = document.getElementById("clubs__chart__div");
let resizeTimer;

/**
 * @description creating an object with all club names and coordinates
 */

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

/**
 * @description drawing a clubs map with svg pins on it
 * @param {geojson.features} switzerland - switzerland geojson .features
 * * @param {array} clubs - clubs objects array
 * * @param {float} multiplicator - multiplicator for the map on different screen sizes
 * * @param {float} multiplicatorPin - multiplicator for the pin sizes on the map
 */

function drawMap(switzerland, clubs, multiplicator = 1, multiplicatorPin = 1) {
  let width = 800 * multiplicator;
  let height = 400 * multiplicator;
  let pinLength = 20 * multiplicatorPin;
  let pinWidth = 14 * multiplicatorPin;
  let projection = d3.geoMercator();
  projection
    .center([8.4, 46.8])
    .scale(7500 * multiplicator)
    .translate([width / 2, height / 2]);

  let path = d3.geoPath().projection(projection);
  let container = d3.create("svg");
  let containerDiv = d3.select("#clubs__chart__div");

  container
    .attr("width", width)
    .attr("height", height)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("id", "clubs__chart");

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
    .attr("xlink:href", "/templates/kdks/images/Map_pin_icon.svg")
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
      scrollToSection(d);
    });

  containerDiv.append(() => container.node());
}

/**
 * @description scrolling funtion to go to the corresponding table row on pin click
 *  * * @param {object} element - clubs object
 */

function scrollToSection(element) {
  let targetRow = document.querySelector(
    "[data-coords = '" + element.strCords + "']"
  );
  console.log(targetRow.offsetTop);
  targetRow.scrollIntoView({ behavior: "smooth" });
}

/**
 * @description organizer function for creating a map
 */

function createMap() {
  let clubs = createClubs();
  d3.json("/templates/kdks/js/switzerland.geojson").then(function (data) {
    let multiplicator = 1;
    let multiplicatorPin = 1;
    if (window.innerWidth >= 1200) {
      multiplicator = 1.5;
      multiplicatorPin = 1.5;
    } else if (window.innerWidth < 850) {
      multiplicator = window.innerWidth / 800;
    }
    drawMap(data.features, clubs, multiplicator, multiplicatorPin);
  });
}

// checking if user is on corresponding page for the clubs map (vereine / clubs)
// if yes. calling the organizer function for creating a map
// on resize, re-render the map to fit the browser size

if (clubsMapDiv.childNodes.length <= 1) {
  clubsMapDiv.style.display = "none";
} else {
  createMap();
  window.onresize = function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      let clubsChart = document.getElementById("clubs__chart");
      clubsMapDiv.removeChild(clubsChart);
      createMap();
    }, 250);
  };
}
