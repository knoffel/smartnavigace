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
  start: [18.268595, 49.814686],
  end: [18.268595, 49.814686]
};
const { useGlobalState } = createGlobalState(initialState);

const ButtonPozice = (props) => {
  const [value, update] = useGlobalState(props.state);
  // window.console.log(props);
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
      properties: {
        shape: "Line",
        name: "Unnamed Layer",
        category: "default"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [18.268595, 49.814686],
          [18.269003, 49.814786],
          [18.268971, 49.814824],
          [18.268751, 49.815222]
        ]
      },
      id: "d5f4bd39-6fff-43fa-a546-b38233027fb5"
    },
    {
      type: "Feature",
      properties: {
        shape: "Line",
        name: "Unnamed Layer",
        category: "default"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [18.269003, 49.814786],
          [18.269164, 49.814824],
          [18.269636, 49.814952],
          [18.269936, 49.815032],
          [18.270242, 49.815136],
          [18.270489, 49.815226],
          [18.270409, 49.815343]
        ]
      },
      id: "b3f1ab12-05a8-4191-9cde-1e2d74167249"
    },
    {
      type: "Feature",
      properties: {
        shape: "Line",
        name: "Unnamed Layer",
        category: "default"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [18.270242, 49.815136],
          [18.270435, 49.814821],
          [18.270516, 49.814845],
          [18.27057, 49.814831]
        ]
      },
      id: "4f3fd12d-fd9d-4cb4-9002-eb25f686c72b"
    },
    {
      type: "Feature",
      properties: {
        shape: "Line",
        name: "Unnamed Layer",
        category: "default"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [18.269636, 49.814952],
          [18.269711, 49.814831]
        ]
      },
      id: "1a429b0c-c639-4875-82a0-404fdfbc5967"
    },
    {
      type: "Feature",
      properties: {
        shape: "Line",
        name: "Unnamed Layer",
        category: "default"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [18.270489, 49.815226],
          [18.270639, 49.815312],
          [18.271095, 49.815437],
          [18.271224, 49.815464],
          [18.271229, 49.815451]
        ]
      },
      id: "3516e6cb-b8f0-4709-bc96-b78c15841231"
    },
    {
      type: "Feature",
      properties: {
        shape: "Line",
        name: "Unnamed Layer",
        category: "default"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [18.271095, 49.815437],
          [18.27131, 49.815115]
        ]
      },
      id: "26725835-ca27-4ee4-bfec-619bf4110d34"
    },
    {
      type: "Feature",
      properties: {
        shape: "Line",
        name: "Unnamed Layer",
        category: "default"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [18.270639, 49.815312],
          [18.270859, 49.815032],
          [18.271052, 49.815042],
          [18.27131, 49.815115],
          [18.271782, 49.815236],
          [18.272152, 49.815336],
          [18.272319, 49.815381],
          [18.272281, 49.815423]
        ]
      },
      id: "43ca541e-8a4b-41a7-a3bc-f4d8b7a0d4aa"
    },
    {
      type: "Feature",
      properties: {
        shape: "Line",
        name: "Unnamed Layer",
        category: "default"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [18.272152, 49.815336],
          [18.272281, 49.815139],
          [18.272286, 49.815129]
        ]
      },
      id: "01be8285-f23e-4aa7-b1df-c43c9ac79296"
    },
    {
      type: "Feature",
      properties: {
        shape: "Line",
        name: "Unnamed Layer",
        category: "default"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [18.27131, 49.815115],
          [18.271358, 49.815049]
        ]
      },
      id: "8e694dee-138c-467e-a77a-7f9d23b34e41"
    },
    {
      type: "Feature",
      properties: {
        shape: "Line",
        name: "Unnamed Layer",
        category: "default"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [18.271052, 49.815042],
          [18.271095, 49.814969]
        ]
      },
      id: "c0e7a3db-b866-44aa-bc4d-c44cbeeb68e3"
    },
    {
      type: "Feature",
      properties: {
        shape: "Line",
        name: "Unnamed Layer",
        category: "default"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [18.271782, 49.815236],
          [18.271374, 49.815852],
          [18.27117, 49.815804],
          [18.270967, 49.815696],
          [18.271095, 49.815437]
        ]
      },
      id: "e6292892-0c06-4e4f-9985-729ad1ae7e2e"
    },
    {
      type: "Feature",
      properties: {
        shape: "Line",
        name: "Unnamed Layer",
        category: "default"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [18.27117, 49.815804],
          [18.271138, 49.815904],
          [18.27124, 49.815925],
          [18.271229, 49.815921]
        ]
      },
      id: "339163d7-5f08-4046-9039-99e14e4ffe22"
    },
    {
      type: "Feature",
      properties: {
        shape: "Line",
        name: "Unnamed Layer",
        category: "default"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [18.271138, 49.815904],
          [18.271128, 49.816077]
        ]
      },
      id: "ca788452-3b75-42c7-aecd-19ae7b09fd65"
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
  window.console.log(path);
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
      {/*       <Marker position={[49.8146818952885, 18.268606328072604]} />
      <Marker position={[49.815042317929006, 18.269922622146662]} />
      <Marker position={[49.814854967719754, 18.269714080395755]} />
      <Marker position={[49.81483246833864, 18.269146793189105]} />
      <Marker position={[49.81522317725818, 18.268702217044886]} />
      <Marker position={[49.814857871211004, 18.270566229050914]} />
      <Marker position={[49.81484804483436, 18.270436935725268]}>
        <ZoomTooltip permanent />
      </Marker> */}

      <Control position="topright">
        <div>Start</div>
        <div>
          <ButtonPozice
            state="start"
            text="Hlavní vchod"
            pozice={[18.268595, 49.814686]}
          />
        </div>
        <div>
          <ButtonPozice
            state="start"
            text="Branka"
            pozice={[18.271128, 49.816077]}
          />
        </div>
        <div>
          <ButtonPozice
            state="start"
            text="Výjezd"
            pozice={[18.272286, 49.815129]}
          />
        </div>
      </Control>
      <Control position="topright">
        <div>Cíl</div>
        <div>
          <ButtonPozice
            state="start"
            text="Hlavní vchod"
            pozice={[18.268595, 49.814686]}
          />
        </div>
        <div>
          <ButtonPozice
            state="start"
            text="Branka"
            pozice={[18.271128, 49.816077]}
          />
        </div>
        <div>
          <ButtonPozice
            state="start"
            text="Výjezd"
            pozice={[18.272286, 49.815129]}
          />
        </div>
        <div>
          <ButtonPozice
            state="end"
            text="Vchod A"
            pozice={[18.268751, 49.815222]}
          />
        </div>
        <div>
          <ButtonPozice
            state="end"
            text="Vchod E"
            pozice={[18.270435, 49.814821]}
          />
        </div>
        <div>
          <ButtonPozice
            state="end"
            text="Infotabule"
            pozice={[18.269164, 49.814824]}
          />
        </div>
        <div>
          <ButtonPozice
            state="end"
            text="Trafika"
            pozice={[18.269936, 49.815032]}
          />
        </div>
        <div>
          <ButtonPozice
            state="end"
            text="Lékárna"
            pozice={[18.269711, 49.814831]}
          />
        </div>
        <div>
          <ButtonPozice
            state="end"
            text="Vchod G"
            pozice={[18.271229, 49.815451]}
          />
        </div>
      </Control>

      <Cesta />
    </Map>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
