import React, { useState, useEffect } from "react";
import axios from "axios";

import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const CLIENT_ID = "AIzaSyBHBras2njADzwwxTD8cAFCTL8IROUGP_U";

const API_URL = "https://maps.googleapis.com/maps/api/geocode/json?";

function Map({ location }) {
  const [center, setCenter] = useState({ lat: null, lng: null });
  /*
  useEffect(async () => {
    const result = await axios(
      `${API_URL}${`address=${location}`}${`&key=${CLIENT_ID}`}`
    );

    if (result.data.results.length > 0) {
      setCenter({
        lat: result.data.results[0].geometry.location.lat,
        lng: result.data.results[0].geometry.location.lng,
      });
    }
  }, [location]);

  */
  useEffect(() => {
    async function fetchData() {
      var result = await axios(
        `${API_URL}${`address=${location}`}${`&key=${CLIENT_ID}`}`
      );

      if (result.data.results.length > 0) {
        setCenter({
          lat: result.data.results[0].geometry.location.lat,
          lng: result.data.results[0].geometry.location.lng,
        });
      }
    }
    fetchData();
  }, [location]);

  return (
    <div className="wrapper">
      {center.lat ? (
        <LoadScript googleMapsApiKey="AIzaSyBHBras2njADzwwxTD8cAFCTL8IROUGP_U">
          <GoogleMap
            id="map"
            center={center}
            zoom={10}
            mapContainerStyle={{
              height: "18vh",
              width: "66vh",
              borderRadius: "10px",
            }}
          >
            {/*  Marker component */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default React.memo(Map);
