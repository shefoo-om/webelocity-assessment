"use client";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { divIcon } from "leaflet";

interface MapMarker {
    geocode: [number, number];
    address: string;
    color: string;
}

export default function ServiceMap() {

    const markers: MapMarker[] = [
        {
            geocode: [43.7584, -80.6698],
            address: "Drayton ↗",
            color: "#290A08"
        },
        {
            geocode: [43.6005, -80.5664],
            address: "Elmira ↗",
            color: "#290A08"
        },
        {
            geocode: [43.5448, -80.2482],
            address: "Guelph ↗",
            color: "#290A08"
        },
        {
            geocode: [43.4516, -80.4925],
            address: "Kitchener ↗",
            color: "#290A08"
        },
        {
            geocode: [43.4643, -80.5204],
            address: "Waterloo ↗",
            color: "#290A08"
        },
        {
            geocode: [43.3616, -80.3144],
            address: "Cambridge ↗",
            color: "#290A08"
        },
        {
            geocode: [43.5382, -80.5566],
            address: "St. Jacobs",
            color: "#081729"
        },
        {
            geocode: [43.5490, -80.5054],
            address: "Conestogo",
            color: "#081729"
        }
    ];

    const createMarkerIcon = (marker: MapMarker) => {
        const isLeftSide = marker.color === "#081729";

        return divIcon({
            className: 'custom-marker-icon',
            html: `
                <div style="
                    display: flex;
                    align-items: center;
                    ${isLeftSide ? 'flex-direction: row;' : 'flex-direction: row-reverse;'}
                ">
                    <div style="
                        background-color: ${marker.color}; 
                        color: white; 
                        width: 40px;
                        height: 42px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                    </div>
                    
                    <div style="
                        height:42px;
                        background-color: ${marker.color}; 
                        color: white; 
                        padding: 6px 14px; 
                        border-radius: 50px; 
                        font-weight: 500;
                        font-size: 18px;
                        display: flex;
                        align-items: center;
                        white-space: nowrap;
                        box-shadow: 0 4px 4px rgba(0,0,0,0.25);
                    ">
                        ${marker.address}
                    </div>
                </div>
            `,
            iconSize: [160, 42],
            iconAnchor: [80, 20]
        });
    };

    return (
        <MapContainer
            center={[43.5448, -80.4925]}
            zoom={10}
            scrollWheelZoom={true}
            zoomControl={false}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            {markers.map((marker, key) => (
                <Marker
                    position={marker.geocode}
                    key={key}
                    icon={createMarkerIcon(marker)}
                >
                </Marker>
            ))}
        </MapContainer>
    );
}