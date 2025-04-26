"use client";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import PinIcon from "@/assets/Pin.png"; 

interface MapMarker {
    geocode: [number, number];
}

export default function ContactMap() {
    const markers: MapMarker[] = [
        {
            geocode: [43.591848, -80.557279],
        },
    ];

    const customIcon = new Icon({
        iconUrl: PinIcon.src,
        iconSize: [50, 50]
    });

    return (
        <MapContainer
            center={[43.6448, -80.7925]}
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
                    icon={customIcon}
                >
                </Marker>
            ))}
        </MapContainer>
    );
}
