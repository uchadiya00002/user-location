import React from "react";

const SignUp = () => {
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      {/* <h2 className="title">I do not have a account</h2> */}
      <span>Sign Up with your email and password</span>
      <form className="sign-up-form">
        <input
          type="text"
          name="displayName"
          //   value={displayName}
          //   onChange={handleChange}
          label="Display Name"
          required
        />
        <input
          type="email"
          name="email"
          //   value={email}
          //   onChange={handleChange}
          label="Email"
          required
        />
        <input
          type="password"
          name="password"
          //   value={password}
          //   onChange={handleChange}
          label="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          //   value={confirmPassword}
          //   onChange={handleChange}
          label="Confirm Password"
          required
        />
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default SignUp;
