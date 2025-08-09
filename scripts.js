// script.js
"use strict";

const hamburger = document.querySelector(".hamburger");
const siteNav = document.querySelector(".site-nav");

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", String(!expanded));
  siteNav.classList.toggle("open");
});
