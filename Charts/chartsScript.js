const ctx = document.getElementById('myChart').getContext('2d');
const ctxNetwork = document.getElementById('myNetworkChart').getContext('2d');

let myChart;
let myNetworkChart;
let jsonData;
  
// Pull the .json data
fetch('static/package.json')
.then(function(response){
  if(response.ok){
    return response.json();
  } else{
    // log an error tot he console if no data is found
    console.error('Failed to fetch package.json:', response.statusText)
    return[];
  }
})
// take the .json data and create a function for the chart
.then(function(data){
  jsonData = data;
  // console.log(jsonData);
  // console.log(data.features.map(feature => feature.properties.ev_connector_types).flat());
  createChart(data, 'bar');
  createNetworkChart(data, 'bar');
});
// Remove the old chart type and create a new one
function setChartType(chartType){
  myChart.destroy();
  createChart(jsonData, chartType);
}
// Function to create the chart to count connector types in MN
function createChart(data, type){
  const connectorCounts = {}; // Empty object to store counts

  for (const feature of data.features) {
      const connectors = feature.properties.ev_connector_types; // Get connector types
      
      if (connectors) {
          for (const connector of connectors) {
              if (connectorCounts[connector]) {
                  connectorCounts[connector]++; // Increment count
              } else {
                  connectorCounts[connector] = 1; // Initialize count
              }
          }
      }
  }

console.log(connectorCounts);

// Connector Types chart
  myChart = new Chart(ctx, {
    type: type,
    data: {
      // call the ev_connector_types from the .json file, flatten into a 2d array
      // labels: data.features.map(feature => feature.properties.ev_connector_types).flat(),
      labels: Object.keys(connectorCounts),
      datasets: [{
        label: 'Count of EV Connector Types in MN',
        data: Object.values(connectorCounts),
        backgroundColor: [
          'rgba(255, 99, 133, 0.54)', // Red
          'rgba(249, 141, 59, 0.51)',
          'rgba(255, 242, 99, 0.51)',
          'rgba(144, 236, 15, 0.48)',
          'rgba(84, 58, 229, 0.45)',
        ],
        borderColor: [
         'rbg(255, 255, 255' // black 
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: false, // Disables automatic re-sizing of chart based on window size
      maintainAspectRatio: true, // Allows custom aspect ratio
      scales: {
        x: {
          title: {
            display: true,
            text: "Types of Connectors",
          }
        },
        y: {
          title: {
            display: true,
            text: "Count of EV Chargers",
          },
          beginAtZero: true
        }
      }
    }
  })
};


// Remove the previous chart type and build a new one
function setNetworkChartType(chartType){
  myNetworkChart.destroy();
  createNetworkChart(jsonData, chartType);
}
// function to create the count of Networks chart
function createNetworkChart(data, type){
  const networkCounts = {}; // Empty object to store counts
  // loop through the json data and make a dictonary of ev networks
  for (const feature of data.features) {
      const network = feature.properties.ev_network; // Get network types
      
      if (network) {
        console.log(network)

        if (networkCounts[network]) {
            networkCounts[network]++; // Increment count
        } else {
            networkCounts[network] = 1; // Initialize count
        }
      }
  }

console.log(networkCounts);

  myNetworkChart = new Chart(ctxNetwork, {
    type: type,
    data: {
      // call the ev_connector_types from the .json file, flatten into a 2d array
      // labels: data.features.map(feature => feature.properties.ev_connector_types).flat(),
      labels: Object.keys(networkCounts),
      datasets: [{
        label: 'Count of EV Network Types in MN',
        data: Object.values(networkCounts),
        borderWidth: 1
      }]
    },
    options: {
      responsive: false, // Disables automatic re-sizing of chart based on window size
      maintainAspectRatio: false, // Allows custom aspect ratio
      scales: {
        x: {
          title: {
            display: true,
            text: "Networks"
          }
        },
        y: {
          title: {
            display: true,
            text: "Count of EV Chargers"
          },
          beginAtZero: true,

        }
      }
    }
  })
};