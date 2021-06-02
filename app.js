console.log("Hello from B2S");

// to do:
// 1. select the container in the html using ID
// 2. give the viz set dimensions
// 3. variable for the dash URL

let viz;

// need to eefine everything outside of functions, even if it's something as simple as ^
// let function allows multiple

const vizContainer = document.getElementById("vizContainer");

const vizUrl =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";

// DO NOT use the URL from browser, will not work
// share options -> link

const vizOptions = {
  device: "default",
  height: 800,
  width: 1000,
  Category: ["Technology", "Furniture"],
  onFirstInteractive: function () {
    document.getElementById("exportPdf").disabled = false;
    console.log("Viz now interactive :)");
  },
};

function initViz() {
  viz = new tableau.Viz(vizContainer, vizUrl, vizOptions);
}

// this is a custom function
// any parameters go in the ()

document.addEventListener("DOMContentLoaded", initViz);

// DOM = document object model
// wait until the page has loaded BEFORE executing the initViz fn

const exportPdf = document.getElementById("exportPdf");

function loadPdf() {
  viz.showExportPDFDialog();
  console.log("PDF Export Window Loaded");
}

exportPdf.addEventListener("click", loadPdf);

// Export PDF button
// this pattern is the same for each:
// 1. button element in HTML
// 2. link button to Javascript (above 1)
// 3. create function telling Tableau what to do - see docn for syntax (above 2)
// 4. add a listener for when to carry out the action

const exportPpt = document.getElementById("exportPpt");

function loadPpt() {
  viz.showExportPowerPointDialog();
  console.log("PowerPoint Export Window Loaded");
}

exportPpt.addEventListener("click", loadPpt);
