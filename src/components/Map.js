import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map = () => {
    const defaultCenter = [20.5937, 78.9629]; // India's coordinates

    return (
        <div className="map-wrapper">
            <MapContainer 
                center={defaultCenter}
                zoom={5}
                className="map-container"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </div>
    );
};

export default Map;