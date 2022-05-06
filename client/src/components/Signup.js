import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";

import SideSection from "./SideSection";
import { BsFillEyeFill } from "react-icons/bs";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [position, setPostion] = useState("default");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    defaultPassword: "",
  });

  const validateEmail = (e) => {
    var emailValid = e.target.value;

    if (validator.isEmail(emailValid)) {
      setEmail("Valid Email :)");
    } else {
      setEmail("Please Enter a valid Email add!");
    }
  };

  const togglePassword = () => {
    setPassword(!password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      position,
      email,
      password,
    };

    axios
      .post(`http://localhost:5000/api/user/register`, user)
      .then((res) => {
        console.log(res);
        navigate("/signin");
        alert("User is successfully Signed Up");
      })
      .catch((error) => {
        console.log(error);
        alert("issue signing-up try with different Sign-up details");
      });
  };

  return (
    <div className=" md:grid grid-cols-3 sm:flex">
      <div className=" mt-5 col-span-2 ">
        <div className="bg-grey-lighter md:min-h-screen flex flex-col ">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center   px-2">
            <h1 className="mb-4 text-3xl text-center font-bold">
              Let's Set up your account
            </h1>
            <div className="text-grey-dark mt-3 mr-auto p-5">
              Already have an account ?
              <a className=" text-blue-500 font-bold ml-2" href="../signin/">
                Sign In
              </a>
            </div>
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="Name"
                placeholder="Your name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <div>
                <div className="flex">
                  <input
                    type="email"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email address"
                    value={email}
                    required
                    onChange={(e) => validateEmail(e)}
                  />
                </div>
                <span
                  className="text-red-500 font-medium	 text-sm "
                  // style={{
                  //   fontWeight: "bold",
                  //   color: "red",
                  // }}
                >
                  {email}
                </span>
              </div>

              <select
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="I would describe my user type as"
                required
                value={position}
                onChange={(e) => setPostion(e.target.value)}
              >
                <option
                  className="text-grey-dark text-sm"
                  value="default"
                  disabled
                  hidden
                >
                  I would describe my user type as{" "}
                </option>
                <option value="Developer">Developer</option>
                <option value="Desinger">Designer</option>
                <option value="Business Executive">Business Executive</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Quality Analyst">Quality Analyst</option>
                <option value="Mobile Test Engineer">
                  Mobile Test Engineer
                </option>
              </select>

              <div className="mb-4 ">
                <div className="flex">
                  <input
                    type={!password ? "text" : "password"}
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password"
                    value={password.defaultPassword}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    className="flex-end p-5 mb-3"
                    onClick={togglePassword}
                  >
                    <BsFillEyeFill />
                  </button>
                </div>

                <span className="text-gray-400 mb-4 text-sm	">
                  Minimum 8 characters
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-300 px-4 py-2 text-white hover:bg-blue-500"
                onClick={handleSubmit}
              >
                Next
              </button>
            </div>
            <p className="mt-4 text-sm font-medium text-xs	">
              By clicking the "Next" button,you agree to creating a free acount,
              and to{" "}
              <a
                href="#term"
                className="no-underline border-b border-blue text-blue-500 font-bold ml-2"
              >
                Terms of services
                {""}{" "}
              </a>
              and
              <a
                href="#privacy"
                className="no-underline border-b border-blue text-blue-500 font-bold ml-2"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <SideSection />
    </div>
  );
};

export default SignUp;
