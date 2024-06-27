import React, { useRef, useEffect, Fragment, useState } from "react";
import GreenBinIcon from "../images/BIN/GREEN.png";
import YellowBinIcon from "../images/BIN/ORANGE.png";
import RedBinIcon from "../images/BIN/RED.png";
import OfflineBinIcon from "../images/BIN/GRAY.png";
import GreenSelectIcon from "../images/BIN/GREEN SELECT.png"; // Import the new icon
import Popup from './Popup'; // Import the Popup component

const GoogleMap = ({ className, center, zoom, smartbins }) => {
  const mapRef = useRef(null);
  const [selectedSmartbin, setSelectedSmartbin] = useState(null);
  const [activeMarkers, setActiveMarkers] = useState({});

  useEffect(() => {
    if (window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });

      new window.google.maps.Marker({
        position: center,
        map,
        title: "User Location",
      });

      if (smartbins.length > 0) {
        smartbins.forEach(smartbin => {
          let binIcon;
          switch (smartbin.status) {
            case 'active': // 0-75%
              binIcon = GreenBinIcon;
              break;
            case 'almost_full': // 76-99%
              binIcon = YellowBinIcon;
              break;
            case 'full': // 100%
              binIcon = RedBinIcon;
              break;
            case 'disactive':
            default:
              binIcon = OfflineBinIcon;
              break;
          }

          const marker = new window.google.maps.Marker({
            position: { lat: smartbin.latitude, lng: smartbin.longitude },
            map,
            title: smartbin.name,
            icon: {
              url: binIcon,
              scaledSize: new window.google.maps.Size(15, 35),
            },
          });

          marker.addListener('click', () => {
            if (activeMarkers[smartbin.name]) {
              activeMarkers[smartbin.name].setIcon({
                url: binIcon,
                scaledSize: new window.google.maps.Size(15, 35),
              });
            }

            setActiveMarkers(prev => ({ ...prev, [smartbin.name]: marker }));
            setSelectedSmartbin(smartbin);
            marker.setIcon({
              url: GreenSelectIcon,
              scaledSize: new window.google.maps.Size(15, 35),
            });
          });
        });
      }
    }
  }, [center, zoom, smartbins]);

  const handleClosePopup = () => {
    if (selectedSmartbin) {
      const originalMarker = activeMarkers[selectedSmartbin.name];
      let originalIcon;
      switch (selectedSmartbin.status) {
        case 'active': // 0-75%
          originalIcon = GreenBinIcon;
          break;
        case 'almost_full': // 76-99%
          originalIcon = YellowBinIcon;
          break;
        case 'full': // 100%
          originalIcon = RedBinIcon;
          break;
        case 'disactive':
        default:
          originalIcon = OfflineBinIcon;
          break;
      }
      originalMarker.setIcon({
        url: originalIcon,
        scaledSize: new window.google.maps.Size(15, 35),
      });
    }
    setSelectedSmartbin(null);
  };

  return (
    <Fragment>
      <div ref={mapRef} className={className}></div>
      {selectedSmartbin && (
        <Popup smartbin={selectedSmartbin} onClose={handleClosePopup} />
      )}
    </Fragment>
  );
};

export default GoogleMap;