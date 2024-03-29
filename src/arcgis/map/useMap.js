import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

const store = { map: null, view: null };

export default () => {
  if (store.map && store.view) return store;

  store.map = new Map({
    basemap: "topo-vector", // streets，hybrid(需要连接 VPN), topo-vector
  });

  store.view = new MapView({
    container: "map",
    map: store.map,
    center: [106, 34.09042],
    zoom: 3,
  });

  store.view.on("click", (evt) => {
    // console.log(evt);
  });

  return store;
};
