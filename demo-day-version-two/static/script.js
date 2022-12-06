const ChartsEmbedSDK = window.ChartsEmbedSDK;
// const userName = require("controllers\games")

const sdk = new ChartsEmbedSDK({
  baseUrl: 'https://charts.mongodb.com/charts-basketherapy-gzkyj',
});

// embed a chart
const chart = sdk.createChart({
  chartId: '638990a5-6656-445d-8ad2-6d93dc12b104',
});

// render the chart into a container
chart
  .render(document.getElementById('chart'))

  // window.onload=function(){
  //   document.getElementById('refreshButton').addEventListener('click', () => chart.refresh());
  // }


//filtering 
const userNameSelect = document.getElementById("userName")
userNameSelect.addEventListener("change", async (e) => {
  if (yearSelect.value == "") {
    chart.setFilter({});
  } else {
    const userName = (userNameSelect.value)
    chart.setFilter( { userName: "21savage" })
  }
})





// // set up the request parameters
// const params = {
//   api_key: "B52F793A4A924FE49B90955F80199554",
//   search_type: "places",
//   q: "basketball court",
//   //
//   location: 'Philadelphia,PA,United States'
// }

// // make the http GET request to Scale SERP
// axios.get('https://api.scaleserp.com/search', { params })
//   .then(response => {

//     // print the JSON response from Scale SERP
    
//     console.log(JSON.stringify(response.data.places_results, 0, 2));
//     let results = JSON.stringify(response.data.places_results)
//     let titles = []
//     let addresses = [] 
//     for(i=0; i<18; i++) {
//       let itemTitle = JSON.stringify(response.data.places_results[i].title)
//       let itemAddress = JSON.stringify(response.data.places_results[i].address)
//       if(itemTitle !== "Baketball Court") {
//         titles.push(itemTitle)
//         addresses.push(itemAddress)
//       }
//     }
//     console.log(JSON.stringify(response.data.places_results[0].title))
//     // console.log(address)
//     console.log(results.length)
//     console.log(titles)

//   }).catch(error => {
//     // catch and print the error
//     console.log(error);

     
//   })

//   var x = document.getElementById("demo");
//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       x.innerHTML = "Geolocation is not supported by this browser.";
//     }
//   }
  
//   function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
//   }