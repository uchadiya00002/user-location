import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PhoneInput from "react-phone-number-input";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      firstname,
      lastname,
      phone,
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
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">SIGN UP</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="firstname"
              placeholder="First Name"
              value={firstname}
              required
              onChange={(e) => setFirstname(e.target.value)}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastname"
              placeholder="Last Name"
              value={lastname}
              required
              onChange={(e) => setLastname(e.target.value)}
            />

            <div className="w-8">
              <PhoneInput
                type="text"
                country="IN"
                className=" PhoneInputCountryFlag-height-4  block border border-grey-light  w-full p-3  flex-1 rounded mb-4"
                name="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={setPhone}
                required
              />
            </div>
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
              Create Account
            </button>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              class="no-underline border-b border-blue text-blue"
              href="../signin/"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
