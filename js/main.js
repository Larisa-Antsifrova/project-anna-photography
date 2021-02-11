// Initializing sidenav
const sidenav = document.querySelector(".sidenav");
const sidenavInstance = M.Sidenav.init(sidenav);

const imgBoxes = document.querySelectorAll(".materialboxed");
const imgBoxInstances = M.Materialbox.init(imgBoxes);

const parallaxes = document.querySelectorAll(".parallax");
const parallaxInstances = M.Parallax.init(parallaxes);

const tabs = document.querySelectorAll(".tabs");
const tabInstances = M.Tabs.init(tabs);

const datepicker = document.querySelector(".datepicker");
const datepickerInstance = M.Datepicker.init(datepicker, {
  format: "dd mmm, yyyy",
  firstDay: 1,
  minDate: new Date(),
  yearRange: 1,
});
