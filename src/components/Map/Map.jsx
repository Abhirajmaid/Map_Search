import React from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "@material-ui/core";
import "./style.css";

export const Map = () => {
  const isMobile = useMediaQuery("(min-width:600px)");
  const coordinates = { lat: 0, lng: 0 };
  return (
    <>
      <div className="googlemap-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAIdRlIWPchxDNSblIuEj-AgJFRnIrscDI" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={0}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onChildClick={""}
        ></GoogleMapReact>
      </div>
    </>
  );
};
