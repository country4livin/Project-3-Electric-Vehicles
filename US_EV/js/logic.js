// Create the 'basemap' tile layer that will be the background of our map.  
// Grayscale layer
let street = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Define the state_stations, access_stations, status_stations
let state_data = new L.LayerGroup();
let access_data = new L.LayerGroup();
let status_data = new L.LayerGroup();

// Create the map object with center and zoom options.
let myMap = L.map("map", {
  center: [44.58, -103.46],
  zoom: 4.3,
  layers: [street] // Start only with EV Vehicles
});

// Adding Color Gradient for State by number of registered EVs
function getColor(d) {
  return d > 1000000 ? '#3f007d' :
         d > 250000 ? '#54278f' :
         d > 100000 ? '#6a51a3' :
         d > 50000 ? '#807dba' :
         d > 10000 ? '#9e9ac8' :
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
L.geoJson(statesData, {
  style: style
}).addTo(myMap);

// // Create an overlays object.
let overlayMaps = {
  "State Stations": state_data,
  "Access Stations": access_data,
  "Status Stations": status_data,
};

// Then add the 'basemap' tile layer to the map.
let baseMaps = {
  "Street": street,
};

// Create a layer control that contains our baseMaps.
// Pass in baseMaps and overlayMaps
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false,
}).addTo(myMap);


// Function to show states, access, and status array to create a one marker for each state
function addMarkersToMap(state_stations, layerGroup, popupContent){
  for (let i = 0; i < state_stations.length; i++){
    let station = state_stations[i];
    let marker = L.marker(station.location)
      .bindPopup(popupContent(station));
    marker.addTo(layerGroup);
  }
}

// Define popup content for states, access, and status
const statePopupContent = (state) => `<h3>${state.state}</h3><hr><p>Stations: ${state.station_count.toLocaleString()}</p>`;
const accessPopupContent = (access) => `<h3>${access.state}</h3><hr><p>Private Stations: ${access.private.toLocaleString()}</p><p>Public Stations: ${access.public.toLocaleString()}</p>`;
const statusPopupContent = (status) => `<h3>${status.state}</h3><hr><p>Available Stations: ${status.Available.toLocaleString()}</p><p>Planned Stations: ${status.Planned.toLocaleString()}</p><p>Temporarily Unavailable Stations: ${status.Temporarily_Unavailable.toLocaleString()}</p>`;

// Add markers for each type of station
addMarkersToMap(state_stations, state_data, statePopupContent);
addMarkersToMap(access_stations, access_data, accessPopupContent);
addMarkersToMap(status_stations, status_data, statusPopupContent);


//Hover over control for state EV registrations
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

geojson = L.geoJson(statesData, {
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
    this._div.innerHTML = '<h4>Registered EVs by State</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density.toLocaleString() + ' EVs'
        : 'Hover over a state');
};

info.addTo(myMap);

//Add legend for color gradient

var legend = L.control({position: 'bottomleft'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10000, 50000, 100000, 250000, 1000000],
        labels = [];
    
        div.innerHTML += '<strong>EV Registrations by State</strong><br>';

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);

