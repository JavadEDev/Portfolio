import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-10.0, -52.0, 0],
                center: [1, 9],
                scale: 1500
            }}
            style={{ width: "100%", height: "100%" }}
        >
            <Geographies
                geography="/features.json"
                fill="#1a1919"
                stroke="#FFFFFF"
                strokeWidth={1}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[8.4689, 60.4720]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: "red",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
                    {"We are in Norway"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default MapChart;
