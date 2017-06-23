var loadPage = function(){
  navOnChange();
};

var navOnChange = function(){
  var navBar = $("#nav-bar");
  if (window.scrollY > 500){
    navBar.removeClass("uk-navbar-transparent");
  } else if (window.scrollY < 100){
    navBar.addClass("uk-navbar-transparent")
  }
};

document.addEventListener("scroll", navOnChange);

$(document).ready(loadPage);
