require(["esri/Map", "esri/views/MapView", "esri/layers/CSVLayer"], function(
  Map,
  MapView,
  CSVLayer
) {
  const map = new Map({
    basemap: "gray-vector"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-122.4194, 37.7749],
    zoom: 12
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
  map.setInfoWindowOnClick(true);
  console.log(map);
  console.log(view);
});
