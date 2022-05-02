import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    axios
      .post(`http://localhost:5000/api/user/login`, user)
      .then((res) => {
        console.log(res);
        alert("User is successfully logged in.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Email or Password is wrong can not login.");
      });
  };

  return (
    <div1>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">SIGN IN</h1>
            <p className="text-center border-grey-light w-full p-3 rounded mb-4">
              Sign-in with Email and Password
            </p>
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-green-500 px-4 py-2 text-white"
              onClick={handleSubmit}
            >
              SIGN-IN
            </button>
          </div>
        </div>
      </div>
    </div1>
  );
};

export default Signin;
