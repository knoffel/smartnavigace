import React from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useLeafletZoom, useLeafletIsZooming } from "use-leaflet";
import "./styles.css";

const ZoomTooltip = props => {
  const zoom = useLeafletZoom();
  const isZooming = useLeafletIsZooming();
  return (
    <Tooltip {...props}>
      {isZooming ? ".....zooming....." : `Zoom = ${zoom}`}
    </Tooltip>
  );
};

const App = () => (
  <div>
    <Map center={[51.505, -0.091]} zoom={13}>
      <TileLayer
        attribution='<a href="https://github.com/vadzim/use-leaflet" title="React hooks for react-leaflet">use-leaflet</a> | &amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.091]} />
      <Marker position={[51.515, -0.081]}>
        <ZoomTooltip permanent />
      </Marker>
    </Map>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
