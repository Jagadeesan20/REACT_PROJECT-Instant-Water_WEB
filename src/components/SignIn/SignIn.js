import React from "react";
import "./SignIn.css";
import Image from "../../img/weblogo.png";
import { Link, useHistory } from "react-router-dom";

const SignIn = () => {
  const history = useHistory();
  return (
    <>
      <div className="login">
        <div className="login-box">
          <img src={Image} alt="logo" className="delivery"></img>
          <form>
            <p>Email</p>
            <input type="text" placeholder="Enter username"></input>
            <p>Password</p>
            <input type="password" placeholder="Enter Password"></input>
            <div className="password">
              <Link to="#">forget password?</Link>
              <button onClick={() => history.push("/")}>Sign In</button>
            </div>
          </form>
          <p className="signup">
            Don't have a supplier account?<Link to="#">signup</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
