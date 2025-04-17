// Initialize the map centered on the US
const map = L.map('mn-map').setView([39.8283, -98.5795], 4);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// Create custom panes
//map.createPane('countiesPane');
//map.getPane('countiesPane').style.zIndex = 400;

//map.createPane('stationsPane');
//map.getPane('stationsPane').style.zIndex = 500;

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
      fillOpacity: 0.7
  };
}

//Add GeoJSON data for states
L.geoJson(countyData, {
  style: style
}).addTo(map);

///Hover over control for MN county EV registrations
function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 4,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

//if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
  //    layer.bringToFront();
  //}

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
}).addTo(map);

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

info.addTo(map);

//Add legend for color gradient

var legend = L.control({position: 'bottomleft'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
        grades = [0, 100, 500, 1000, 5000, 10000];
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

legend.addTo(map);

// Load and display the EV charging stations
fetch('static/js/minnesota_stations.geojson')
  .then(res => res.json())
  .then(data => {
    const geoJsonLayer = L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 5,
          fillColor: "#007BFF",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        });
      },
      onEachFeature: function (feature, layer) {
        const props = feature.properties;
      
        const name = props.station_name || "Unnamed Station";
        const address = props.street_address;
        const city = props.city;
        const state = props.state;
        const connectors = props.ev_connector_types;
        const price = props.ev_pricing;
        const hours = props.access_days_time;
        const fast = props.ev_dc_fast_num;
        const lev1 = props.ev_level1_evse_num;
        const lev2 = props.ev_level2_evse_num;
      
        let popupContent = `<strong>${name}</strong><br>`;
      
        if (address) popupContent += `${address}<br>`;
        if (city && state) popupContent += `${city}, ${state}<br>`;
        else if (city) popupContent += `${city}<br>`;
        else if (state) popupContent += `${state}<br>`;
      
        if (hours) popupContent += `Hours: ${hours}<br>`;

        if (price) popupContent += `Price: ${price}<br>`;

        if (fast && lev1 && lev2) popupContent += `Fast Chargers: ${fast}, Level 1 Chargers: ${lev1}, Level 2 Chargers: ${lev2}<br>`;
        else if (lev1 && lev2) popupContent += `Level 1 Chargers: ${lev1}, Level 2 Chargers: ${lev2}<br>`;
        else if (fast && lev2) popupContent += `Fast Chargers: ${fast}, Level 2 Chargers: ${lev2}<br>`;
        else  if (fast && lev1) popupContent += `Fast Chargers: ${fast}, Level 1 Chargers: ${lev1}<br>`;
        else if (fast) popupContent += `Fast Chargers: ${fast}<br>`;
        else if (lev1) popupContent += `Level 1 Chargers: ${lev1}<br>`;
        else if (lev2) popupContent += `Level 2 Chargers: ${lev2}<br>`;


        
        


      
        layer.bindPopup(popupContent);
      }
    }).addTo(map);

    map.fitBounds(geoJsonLayer.getBounds());
  })
  .catch(err => console.error("Failed to load GeoJSON:", err));

  