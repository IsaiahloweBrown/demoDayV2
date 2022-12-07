const ChartsEmbedSDK = window.ChartsEmbedSDK;
// const userName = require("controllers\games")


async function renderChart() {
  const sdk = new ChartsEmbedSDK({
    baseUrl: 'https://charts.mongodb.com/charts-basketherapy-gzkyj',
  });
  
  // embed a chart
  const chart = sdk.createChart({
    chartId: '638990a5-6656-445d-8ad2-6d93dc12b104',
    height: "700px",
  });
  
  // render the chart into a container
  chart
    .render(document.getElementById('chart'))

  //refreshes page 
    window.onload=function(){
      document.getElementById('refresh').addEventListener('click', () => chart.refresh());
    }
    
    let element = document.querySelector(".body-content")

    // document
    // .getElementById("themeSwitch")
    // .addEventListener("change", async function () {
    //   if (this.checked) {
    //     await chart.setTheme('dark');
    //     element.classList.toggle("dark-mode", true);
    //   } else {
    //     await chart.setTheme('light');
    //     element.section.classList.toggle("dark-mode", false);
    //   }

    //   // var currentTheme = await chart.getTheme();
    //   // document.getElementById("currentTheme").innerText = currentTheme;
    // });

  //filtering 
  const gameSelect = document.getElementById("game-filter")
  gameSelect.addEventListener("change", async (e) => {
    const gameSelect = e.target.value;
    console.log(gameSelect)
    gameSelect ? chart.setFilter({ game : {'$oid': gameSelect} }) : chart.setFilter({});
    
  });


  document
    .getElementById("chartDataButton")
    .addEventListener("click", async function () {
      const chartDataButtonTextElement = document.getElementById(
        "chartDataButtonText"
      );
      const jsonViewerElement = document.getElementById("jsonViewer");

      const currentState = chartDataButtonTextElement.textContent;
      if (currentState === "Show") {
        // Update text inside button
        chartDataButtonTextElement.innerText = "Hide";

        // Get chart data and display it
        const data = await chart.getData();
        jsonViewerElement.data = data;
        jsonViewerElement.style.visibility = "visible";
      } else {
        // Update text inside button
        chartDataButtonTextElement.innerText = "Show";
        // Reset JSON Viewer element
        jsonViewerElement.data = "{}";
        jsonViewerElement.style.visibility = "hidden";
      }
    });
}




renderChart().catch((e) => window.alert(e.message));