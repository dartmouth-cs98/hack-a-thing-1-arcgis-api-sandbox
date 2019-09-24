require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  // "esri/renderers/HeatmapRenderer",
  "esri/renderers/SimpleRenderer",
  "esri/layers/FeatureLayer",
  "esri/layers/GraphicsLayer",
  "esri/geometry/Point"
], function(
  Map,
  MapView,
  Graphic,
  // HeatmapRenderer,
  SimpleRenderer,
  FeatureLayer,
  GraphicsLayer,
  Point
) {
  var map = new Map({
    // basemap: "streets-relief-vector"
    basemap: "topo-vector"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    // center: [-122.4194, 37.7749],
    center: [-122.27, 37.8],
    zoom: 13
  });

  var point = {
    type: "point",
    longitude: -122.2701,
    latitude: 37.811
  };

  var simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40], // orange
    outline: {
      color: [255, 255, 255], // white
      width: 1
    }
  };

  var pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol
  });

  view.graphics.add(pointGraphic);
});
