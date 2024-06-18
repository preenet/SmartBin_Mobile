import React, { useRef, useEffect } from "react";
import SmartBinIcon from "../images/BIN/GREEN.png";

const test = {lat: 18.79961571459258, lng: 98.95156795979132};

// const SmartBin = [
//   ["ศูนย์อาหารมหาวิทยาลัยเชียงใหม่", 18.79961571459258, 98.95156795979132, 1],
//   ["วิทยาลัยศิลปะ สื่อ และเทคโนโลยี มหาวิทยาลัยเชียงใหม่", 18.800539459227526, 98.95042563726106, 2],
// ]

const GoogleMap = ({ className, center, zoom }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });

      // const SmartBin = [
      //   [{ lat: 34.8791806, lng: -111.8265049 }, "Boynton Pass"],
      //   [{ lat: 34.8559195, lng: -111.7988186 }, "Airport Mesa"],
      //   [{ lat: 34.832149, lng: -111.7695277 }, "Chapel of the Holy Cross"],
      //   [{ lat: 34.823736, lng: -111.8001857 }, "Red Rock Crossing"],
      //   [{ lat: 34.800326, lng: -111.7665047 }, "Bell Rock"],
      // ];

      const smartBinLocationIcon = {
        url: SmartBinIcon, // Replace with the URL to your smart bin image
        scaledSize: new window.google.maps.Size(20, 50), // Adjust the size according to your needs
      };

      new window.google.maps.Marker({
        position: center,
        map,
        title: "User Location",
      });

      const SmartBin1 = new window.google.maps.Marker({
        position: test,
        map,
        title: "Smart Bin Location",
        icon: smartBinLocationIcon,
      });
    }
  }, [center, zoom]);

  return <div ref={mapRef} className={className}></div>;
};

export default GoogleMap;