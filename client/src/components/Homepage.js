import React from "react";
import Userlocation from "./Userlocation";

const Homepage = () => {
  return (
    <div>
      <h1 className="mb-8 mt-8 text-5xl text-center">USER LOCATION</h1>
      <FontAwesomeIcon icon="fa-duotone fa-street-view" />
      />
      <Userlocation />
    </div>
  );
};

export default Homepage;
