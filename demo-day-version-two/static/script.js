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
  
    // window.onload=function(){
    //   document.getElementById('refreshButton').addEventListener('click', () => chart.refresh());
    // }
  
  
  //filtering 
  const gameSelect = document.getElementById("game-filter")
  gameSelect.addEventListener("change", async (e) => {
    const gameSelect = e.target.value;
    console.log(gameSelect)
    gameSelect ? chart.setFilter({ game : {'$oid': gameSelect} }) : chart.setFilter({});
  });
}




renderChart().catch((e) => window.alert(e.message));