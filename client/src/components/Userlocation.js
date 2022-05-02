import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const location_Api = `https://ipinfo.io/json?token=de101b8e29a848`;
const Userlocation = (isLoggedIn) => {
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    axios.get(location_Api).then((res) => {
      setLocation(res.data);
      console.table(res.data);
    });
  }, []);

  return isLoggedIn ? (
    <div>
      <p className="text-center m-3">
        Location- {location.city}, {location.country} - {location.postal}
      </p>
      <p className="text-center m-3">Latitude is {latitude}</p>
      <p className="text-center">Longitude is {longitude}</p>
    </div>
  ) : null;
};

export default Userlocation;
