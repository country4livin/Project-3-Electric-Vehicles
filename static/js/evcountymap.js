// Load the GeoJSON data for US states
// let geoData = "mn_minnesota_zip_codes_geo.min.json";

// Initialize the map centered on the US
const myMap = L.map('mn-map').setView([44.977753, -93.265015], 7);
// let myMap = L.map("map", {
//   center: [-32.8, 117.9],
//   zoom: 7
// });

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Adding Color Gradient for State by number of registered EVs
function getColor(d) {
  return d > 10000 ? '#3f007d' :
         d > 5000 ? '#54278f' :
         d > 1000 ? '#6a51a3' :
         d > 500 ? '#807dba' :
         d > 100 ? '#9e9ac8' :
                      '#dadaeb';
}

function style(feature) {
  return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: '0.7'
  };
}

//Add GeoJSON data for states
L.geoJson(countyData, {
  style: style
}).addTo(myMap);

///Hover over control for MN county EV registrations
function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 4,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }

  info.update(layer.feature.properties);
  // console.log(layer.feature.properties);
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function onEachFeature(feature, layer) {
  layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
  });
}

geojson = L.geoJson(countyData, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(myMap);

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Registered EVs by MN County</h4>' +  (props ?
        '<b>' + props.coty_name_long[0] + '</b><br />' + props.density.toLocaleString() + ' EVs'
        : 'Hover over a county');
};

info.addTo(myMap);

//Add legend for color gradient

var legend = L.control({position: 'bottomleft'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 100, 500, 1000, 5000, 10000],
        labels = [];
    
        div.innerHTML += '<strong>EV Registrations by MN County</strong><br>';

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);


