const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


var preloader = document.querySelector(".preloader");
var website = document.querySelector(".website");
var html = document.querySelector("html");

let navmenu = document.querySelector(".navMenu");

preloaderVar = setTimeout(preloaderFunc, 2300);

function preloaderFunc() {
    preloader.style.display = "none";
    website.style.display = "block";
    html.style.overflowY = "none"
    html.style.overflowX = "none"
}

let questionElement = document.querySelector(".questionPre")
var question = ['Loading']


randomQuestion =  question[Math.floor(Math.random() * question.length)];
questionElement.innerHTML = randomQuestion

const sections = [...document.querySelectorAll("section")];

let options = {
  rootMargin: "0px",
  threshold: 0.75,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const { target } = entry;

    if (entry.intersectionRatio >= 0.75) {
      target.classList.add("is-visible");
    } else {
      target.classList.remove("is-visible");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  const sectionChildren = [...section.querySelector("[data-content]").children];

  sectionChildren.forEach((el, index) => {
    el.style.setProperty("--delay", `${index * 250}ms`);
  });

  observer.observe(section);
});
