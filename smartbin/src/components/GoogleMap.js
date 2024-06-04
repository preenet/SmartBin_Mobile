import React, { useRef, useEffect } from "react";

const GoogleMap = ({ className, center, zoom }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });

      new window.google.maps.Marker({
        position: center,
        map,
        title: "Smart Bin Location",
      });
    }
  }, [center, zoom]);

  return <div ref={mapRef} className={className}></div>;
};

export default GoogleMap;