var navContainer = document.getElementById("nav-container");
var navLinkServices = document.getElementById("nav-link-services");
var navLinkProjects = document.getElementById("nav-link-projects");
var navButton = document.getElementById("nav-button");

var navColorChange = function(){
  if (window.scrollY > 550) {
    navContainer.style.backgroundColor = "#f5f5f5";
    navLinkServices.style.color = "#2D3483";
    navLinkProjects.style.color = "#2D3483";
    navButton.style.color = "#2D3483";
  } else {
    navContainer.style.backgroundColor = "rgba(255, 255, 255, 0)";
    navLinkServices.style.color = "#e3e3e3";
    navLinkProjects.style.color = "#e3e3e3";
    navButton.style.color = "#e3e3e3";
  }
};
document.addEventListener("scroll", navColorChange);
