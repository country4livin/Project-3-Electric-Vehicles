// Initialize the map centered on the US
const map = L.map('map').setView([39.8283, -98.5795], 4);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Load and display the EV charging stations
fetch('minnesota_stations.geojson')
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