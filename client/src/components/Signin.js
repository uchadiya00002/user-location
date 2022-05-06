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
        navigate("/post");
      })
      .catch((error) => {
        console.log(error);
        alert("Email or Password is wrong can not login.");
      });
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">SIGN IN</h1>
            <p className="text-center border-grey-light w-full p-3 rounded mb-4">
              Sign-in with Email and Password
            </p>
            <div>
              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email address"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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
              className="w-full bg-gray-300 px-4 py-2 text-white hover:bg-blue-500 "
              onClick={handleSubmit}
            >
              SIGN-IN
            </button>
          </div>
          <div className="text-grey-dark mt-6">
            Dont't Have an account ?
            <a className=" text-blue-500 font-bold ml-2" href="../">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
