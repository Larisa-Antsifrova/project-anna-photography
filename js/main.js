// Initializing sidenav
const sidenav = document.querySelector(".sidenav");
const sidenavInstance = M.Sidenav.init(sidenav);

const imgBoxes = document.querySelectorAll(".materialboxed");
const imgBoxInstances = M.Materialbox.init(imgBoxes);

const parallaxes = document.querySelectorAll(".parallax");
const parallaxInstances = M.Parallax.init(parallaxes);
