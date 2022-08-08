import React, { useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';

import CoverageArea from './CoverageArea.js';

const MapView = ({ setValues }) => {
  const origin = [10.3392, -68.742];
  const [position, setPosition] = useState(null);

  function HandleClickMap() {
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng);
        setValues((prevValues) => ({
          ...prevValues,
          location: {
            lat: e.latlng.lat,
            lng: e.latlng.lng,
          },
        }));
      },
    });
    return position == null ? null : <Marker position={position}></Marker>;
  }

  if (position) {
  }

  return (
    <>
      <MapContainer center={origin} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <CoverageArea />
        <HandleClickMap />
      </MapContainer>
    </>
  );
};

export default MapView;
