import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Tooltip, Polyline } from "react-leaflet";
import { useLeafletZoom, useLeafletIsZooming } from "use-leaflet";
import Control from "react-leaflet-control";
import PathFinder from "geojson-path-finder-nw";
import point from "turf-point";
import "./styles.css";

import { createGlobalState, getGlobalState } from "react-hooks-global-state";

const initialState = {
  start: [49.8146818952885, 18.268606328072604],
  end: [49.8146818952885, 18.268606328072604]
};
const { useGlobalState } = createGlobalState(initialState);

const ButtonPozice = (props) => {
  const [value, update] = useGlobalState(props.state);
  window.console.log(props);
  return (
    <div>
      <button type="button" onClick={() => update(props.pozice)}>
        {props.text}
      </button>
    </div>
  );
};

const ZoomTooltip = (props) => {
  const zoom = useLeafletZoom();
  const isZooming = useLeafletIsZooming();
  return (
    <Tooltip {...props}>
      {isZooming ? ".....zooming....." : `Zoom = ${zoom}`}
    </Tooltip>
  );
};

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [49.8146818952885, 18.268606328072604],
          [49.81483246833864, 18.269146793189105]
        ]
      },
      properties: {}
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [49.81483246833864, 18.269146793189105],
          [49.81522317725818, 18.268702217044886]
        ]
      },
      properties: {}
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [49.81483246833864, 18.269146793189105],
          [49.815042317929006, 18.269922622146662]
        ]
      },
      properties: {}
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [49.814854967719754, 18.269714080395755],
          [49.815042317929006, 18.269922622146662]
        ]
      },
      properties: {}
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [49.815042317929006, 18.269922622146662],
          [49.81484804483436, 18.270436935725268]
        ]
      },
      properties: {}
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [49.814857871211004, 18.270566229050914],
          [49.81484804483436, 18.270436935725268]
        ]
      },
      properties: {}
    }
  ]
};

const pathFinder = new PathFinder(geojson, {
  weightFn: function (a, b, props) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return Math.sqrt(dx * dx + dy * dy);
  }
});

const Cesta = () => {
  const [start, updateStart] = useGlobalState("start");
  const [end, updateEnd] = useGlobalState("end");
  const path = pathFinder.findPath(point(start), point(end));
  return (
    <div>
      <Polyline positions={path.path} />
    </div>
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
          <ButtonPozice
            state="start"
            text="Hlavní vchod"
            pozice={[49.8146818952885, 18.268606328072604]}
          />
        </div>
        <div>
          <ButtonPozice
            state="start"
            text="Vchod A"
            pozice={[49.81522317725818, 18.268702217044886]}
          />
        </div>
        <div>
          <ButtonPozice
            state="start"
            text="Vchod E"
            pozice={[49.81484804483436, 18.270436935725268]}
          />
        </div>
      </Control>
      <Control position="topright">
        <div>Cíl</div>
        <div>
          <ButtonPozice
            state="end"
            text="Hlavní vchod"
            pozice={[49.8146818952885, 18.268606328072604]}
          />
        </div>
        <div>
          <ButtonPozice
            state="end"
            text="Vchod A"
            pozice={[49.81522317725818, 18.268702217044886]}
          />
        </div>
        <div>
          <ButtonPozice
            state="end"
            text="Vchod E"
            pozice={[49.81484804483436, 18.270436935725268]}
          />
        </div>
        <div>
          <ButtonPozice
            state="end"
            text="Infotabule"
            pozice={[49.81483246833864, 18.269146793189105]}
          />
        </div>
        <div>
          <ButtonPozice
            state="end"
            text="Trafika"
            pozice={[49.815042317929006, 18.269922622146662]}
          />
        </div>
        <div>
          <ButtonPozice
            state="end"
            text="Lékárna"
            pozice={[49.814854967719754, 18.269714080395755]}
          />
        </div>
        <div>
          <ButtonPozice
            state="end"
            text="Odběry"
            pozice={[49.814857871211004, 18.270566229050914]}
          />
        </div>
      </Control>

      <Cesta />
    </Map>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
