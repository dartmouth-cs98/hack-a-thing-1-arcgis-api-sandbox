require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  // "esri/renderers/HeatmapRenderer",
  "esri/renderers/SimpleRenderer",
  "esri/layers/FeatureLayer",
  "esri/layers/CSVLayer",
  "esri/layers/GraphicsLayer",
  "esri/geometry/Point"
], function(
  Map,
  MapView,
  Graphic,
  // HeatmapRenderer,
  SimpleRenderer,
  FeatureLayer,
  CSVLayer,
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

  // const locations = require('./locations-extracted');
  var locations = [
    {
      timestampMs: "1552971005785",
      latitudeE7: 37.833121,
      longitudeE7: -122.2754129,
      accuracy: 82
    },
    {
      timestampMs: "1552971021031",
      latitudeE7: 37.8330738,
      longitudeE7: -122.2753976,
      accuracy: 67
    }
  ];

  var points = locations.map(location => {
    var point = {
      type: "point",
      longitude: location.longitudeE7,
      latitude: location.latitudeE7,
      x: location.longitudeE7,
      y: location.latitudeE7
    };

    // Create a symbol for drawing the point
    var markerSymbol = {
      type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
      color: [255, 0, 0],
      size: 30
    };

    // Create a graphic and add the geometry and symbol to it
    return new Graphic({
      ObjectID: 1,
      text: "a",
      address: "b",
      geometry: point,
      symbol: markerSymbol
    });
  });

  var heatRenderer = {
    type: "heatmap"
  };
  var simpleRenderer = {
    type: "simple", // autocasts as new SimpleRenderer()
    symbol: {
      type: "simple-fill",
      color: [255, 255, 0, 0.8],
      style: "none",
      outline: {
        color: [0, 0, 255, 0.5],
        width: 1.25
      }
    }
  };

  // var layer2 = new FeatureLayer({
  //   // create an instance of esri/layers/support/Field for each field object
  //   fields: [
  //     {
  //       name: "ObjectID",
  //       alias: "ObjectID",
  //       type: "oid"
  //     },
  //     {
  //       name: "type",
  //       alias: "Type",
  //       type: "string"
  //     },
  //     {
  //       name: "place",
  //       alias: "Place",
  //       type: "string"
  //     }
  //   ],
  //   objectIdField: "ObjectID",
  //   geometryType: "point",
  //   source: points,
  //   renderer: simpleRenderer
  // });
  var csvLayer = new CSVLayer({
    url: "./samples.csv",
    copyright: "USGS Earthquakes"
  });
  map.add(csvLayer); // adds the layer to the map
  // view.graphics.addMany(points);
  // map.add(layer2);
  console.log(map);
  console.log(view);
});
