import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const location_Api = `https://api.openweathermap.org/data/2.5/onecall?`;
const Userlocation = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    console.log(`${location_Api}`);
    let finalAPi = `${location_Api}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid={358c353c0a7394b94b6d69f7ece40258
    }`;

    axios.get(finalAPi).then((res) => {
      console.log(res.data);
    });
  }, []);

  return <div>Userlocation</div>;
};

export default Userlocation;
