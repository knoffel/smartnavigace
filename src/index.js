import React from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useLeafletZoom, useLeafletIsZooming } from "use-leaflet";
import Control from "react-leaflet-control";
import "./styles.css";

const ZoomTooltip = (props) => {
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
    <Map center={[49.8146818952885, 18.268606328072604]} zoom={18}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.8146818952885, 18.268606328072604]} />
      <Marker position={[49.815042317929006, 18.269922622146662]} />
      <Marker position={[49.814854967719754, 18.269714080395755]} />
      <Marker position={[49.81483246833864, 18.269146793189105]} />
      <Marker position={[49.81522317725818, 18.268702217044886]} />
      <Marker position={[49.814857871211004, 18.270566229050914]} />
      <Marker position={[49.81484804483436, 18.270436935725268]}>
        <ZoomTooltip permanent />
      </Marker>

      <Control position="topright">
        <div>Start</div>
        <div>
          <button>Hlavní vchod</button>
        </div>
        <div>
          <button>Vchod A</button>
        </div>
        <div>
          <button>Vchod E</button>
        </div>
      </Control>
      <Control position="topright">
        <div>Cíl</div>
        <div>
          <button>Hlavní vchod</button>
        </div>
        <div>
          <button>Vchod A</button>
        </div>
        <div>
          <button>Vchod E</button>
        </div>
      </Control>
    </Map>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
