// Create the 'basemap' tile layer that will be the background of our map.
// OPTIONAL: Step 2
// // Create the layer groups, base maps, and overlays for our two sets of data, earthquakes and tectonic_plates.
// Add a control to the map that will allow the user to change which layers are visible.
  
// Grayscale layer - Need help
let street = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  maxZoom: 20
});

// Then add the 'basemap' tile layer to the map.
let baseMaps = {
  "Grayscale": street,
};

// // Define the state_stations, access_stations, status_stations
let state_data = new L.LayerGroup();
let access_data = new L.LayerGroup();
let status_data = new L.LayerGroup();

// // Create an overlays object.
let overlayMaps = {
  "State Stations": state_data,
  "Access Stations": access_data,
  "Status Stations": status_data,
};

// Create the map object with center and zoom options.
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4,
  layers: [street, state_data, access_data, status_data]
});

// Create a layer control that contains our baseMaps.
// Pass in baseMaps and overlayMaps
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

// Looping through the states array, create one marker for each state,
// bind a popup containing its name and station, and add it to the map.
for (let i = 0; i < state_stations.length; i++) {
  let state = state_stations[i];
  let markerState = L.marker(state.location)
    .bindPopup(`<h1>${state.state}</h1><hr><h3>Stations ${state.station_count.toLocaleString()}</h3>`);
  // Add the marker to the state_data layergroup
  markerState.addTo(state_data);

}

// Looping through the access array, create one marker for each state,
// bind a popup containing its access and state station, and add it to the map
for (let i = 0; i < access_stations.length; i++) {
  let access = access_stations[i];
  let markerAccess = L.marker(access.location)
    .bindPopup(`<h3>${access.state}</h3><hr><h3>Private: ${access.private.toLocaleString()}</h3><hr><h3>Public: ${access.public.toLocaleString()}</h3>`);
  markerAccess.addTo(access_data);
}

// Looping through the status array, create one marker for each state,
// bind a popup containing its status and state station, and add it to the map
for (let l=0; l < status_stations.length; l++){
  let status = status_stations[l];
  let markerStatus = L.marker(status.location)
    .bindPopup(`<h3>${status.state}</h3><hr><h3>Available: ${status.Available.toLocaleString()}</h3><hr><h3>Planned: ${status.Planned.toLocaleString()}</h3><hr><h3>Temporarily Unavailable: ${status.Temporarily_Unavailable.toLocaleString()}</h3>`);
  // Add the marker to the status_data layergroup
  markerStatus.addTo(status_data)
}