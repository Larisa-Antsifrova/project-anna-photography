// Initializing sidenav
const sidenav = document.querySelector(".sidenav");
const sidenavInstance = M.Sidenav.init(sidenav);

// Initializing lightboxes for images preview
const imgBoxes = document.querySelectorAll(".materialboxed");
const imgBoxInstances = M.Materialbox.init(imgBoxes);

// Initializing parallaxes
const parallaxes = document.querySelectorAll(".parallax");
const parallaxInstances = M.Parallax.init(parallaxes);

// Initializing tabs
const tabs = document.querySelectorAll(".tabs");
const tabInstances = M.Tabs.init(tabs);

// Initializing scrollspy
const scrollspySections = document.querySelectorAll(".scrollspy");
const scrollSpyInstances = M.ScrollSpy.init(scrollspySections, { scrollOffset: 0 });

// Initializing slider
const carousel = document.querySelector(".carousel");
const carouselInstance = M.Carousel.init(carousel, { fullWidth: true, indicators: true });

// Initializing tooltips
const tooltipped = document.querySelectorAll(".tooltipped");
const tooltippedInstances = M.Tooltip.init(tooltipped, {
  enterDelay: 0,
  margin: -5,
  inDuration: 250,
  outDuration: 100,
});

// Initializing daypicker. Commented till better times
// const datepicker = document.querySelector(".datepicker");
// const datepickerInstance = M.Datepicker.init(datepicker, {
//   format: "dd mmm, yyyy",
//   firstDay: 1,
//   minDate: new Date(),
//   yearRange: 1,
// });
