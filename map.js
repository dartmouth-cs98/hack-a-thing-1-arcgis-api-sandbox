require(["esri/Map", "esri/views/MapView", "esri/layers/CSVLayer"], function(
  Map,
  MapView,
  CSVLayer
) {
  const map = new Map({
    basemap: "topo-vector"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-122.4194, 37.7749],
    zoom: 13
  });

  const csvLayer = new CSVLayer({
    url:
      "https://hack-a-thing-1-arcgis-api-sandbox.s3.us-east-2.amazonaws.com/locations.csv"
  });
  csvLayer.renderer = {
    type: "heatmap",
    objectIdField: "timestamp",
    latitudeField: "latitude",
    longitudeField: "longitude",
    colorStops: [
      { ratio: 0, color: "rgba(255, 255, 255, 0)" },
      { ratio: 0.0001, color: "rgba(255,255,230, .3)" },
      { ratio: 0.1, color: "rgba(255, 200, 0, .3)" },
      { ratio: 0.5, color: "rgba(255, 140, 0, .6)" },
      { ratio: 0.8, color: "rgba(255, 140, 0, .6)" },
      { ratio: 1, color: "rgba(255, 0, 0, .6)" }
    ],
    minPixelIntensity: 0,
    maxPixelIntensity: 5000
  };
  map.add(csvLayer);
});

/* Extra visualizations
  const locations = require('./locations-extracted');
  const locations = [
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

  const points = locations.map(location => {
    const point = {
      type: "point",
      longitude: location.longitudeE7,
      latitude: location.latitudeE7,
      x: location.longitudeE7,
      y: location.latitudeE7
    };

    // Create a symbol for drawing the point
    const markerSymbol = {
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

  const heatRenderer = {
    type: "heatmap"
  };
  const simpleRenderer = {
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

  const heatRend = new HeatmapRenderer({
    minPixelIntensity: 0,
    maxPixelIntensity: 5000
  });
*/
