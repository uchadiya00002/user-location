import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const routeToSignin = () => {
    navigate("/signin");
  };

  const routeToSignup = () => {
    navigate("/signup");
  };

  const routeToHomepage = () => {
    navigate("/");
  };
  return (
    <nav className="container flex justify-around py-8 mx-auto bg-white">
      <div className="flex items-center">
        <h3
          onClick={routeToHomepage}
          className="text-3xl font-medium text-green-500"
        >
          NEARBY USER
        </h3>
      </div>

      <div class="flex items-center space-x-2">
        <button
          className="px-4 py-2 text-gray-100 bg-green-500 rounded-md"
          type="submit"
          onClick={routeToSignin}
        >
          Sign in
        </button>
        <button
          className="px-4 py-2 text-white-200 bg-green-700 rounded-md"
          type="submit"
          onClick={routeToSignup}
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
