// Initialize the map centered on the US
const map = L.map('map').setView([44.977753, -93.265015], 7);
// let myMap = L.map("map", {
//   center: [-32.8, 117.9],
//   zoom: 7
// });

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/Water_Hydrant_WCORP_070_WA_GDA2020_Public.geojson";

// d3.json(url).then(function(response) {

fetch('../static/test.result.geojson')
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    features = data.features;
  // });

  let heatArray = [];

  for (let i = 0; i < features.length; i++) {
    let location = features[i].geometry;
    let props = features[i].properties;
    if (location) {
      // console.log(location);
      if (props) {
        // console.log(props);
        let intensity = props.reg_count;
        console.log(intensity);
        heatArray.push([location.coordinates[1], location.coordinates[0], intensity]);
        console.log(heatArray);
    }

  }

  let heat = L.heatLayer(heatArray, {
    max: 1500,
    radius: 15,
    blur: 25
  }).addTo(map);

// });
}});

