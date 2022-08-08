import React from 'react';
import { Circle, Polygon } from 'react-leaflet';
import useFetch from '../hooks/useFetch';

const CoverageArea = () => {
  const { data } = useFetch('/coverage-area');

  const circleArea = data.filter((element) => {
    return element.vectorLayer === 'circle';
  });

  const polygonArea = data.filter((element) => {
    return element.vectorLayer === 'polygon';
  });

  return (
    <>
      {circleArea.map((element) => {
        return (
          <Circle
            key={element._id}
            center={element.position[0]}
            pathOptions={{ color: element.color }}
            radius={element.radius}
          />
        );
      })}
      {polygonArea.map((element) => {
        return (
          <Polygon
            key={element._id}
            positions={element.position}
            pathOptions={{ color: element.color }}
          />
        );
      })}
    </>
  );
};

export default CoverageArea;
