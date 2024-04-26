window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let bodyTop = document.body.scrollTop;
  let documentElementTop = document.documentElement.scrollTop;

  if (bodyTop > 20 || documentElementTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }

  // Navbar Event
  let navbar = document.querySelector("nav.navbar");
  let hero = document.querySelector("header.hero");

  if (bodyTop > hero.scrollHeight || documentElementTop > hero.scrollHeight) {
    navbar.classList.remove("bg-light");
    navbar.classList.add("bg-dark");

    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark");
  } else {
    navbar.classList.remove("bg-dark");
    navbar.classList.add("bg-light");

    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
  }
}

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    topFunction();
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

