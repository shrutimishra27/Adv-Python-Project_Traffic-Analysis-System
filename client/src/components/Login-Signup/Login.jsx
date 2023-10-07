import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import image from "../Login-Signup/gradient.png";
// import { Icon, InlineIcon } from "@iconify/react";
import { Icon } from "@iconify/react";
import axios from "axios";

// import axios from "axios";


const Login = () => {

  //Variables as useState-based variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secPassword, setSecPassword] = useState("");
  const [phonenumber, setPhoneNumber] = useState(0); 
  const isPasswordMatch = password === secPassword;


  return (
    <>
      {/* <div>Login</div> */}
      <div className="body2l">
        <div className="containerl">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img src={image} alt="" />
              <div className="text">
                <span className="text-1">JOIN US</span>
                <span className="text-2">Start a Valuable Journey With Us</span>
              </div>
            </div>
            <div className="back">
              <img className="backImg" src={image} alt="" />
              <div className="text">
                <br />
                <span className="text-1">
                  Complete miles of journey <br /> with one step
                </span>
              </div>
            </div>
          </div>

          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Login</div>

                

                <form>
                  <div className="input-boxes">
                    <div className="input-box">
                      <Icon
                        icon={"mdi:email"}
                        color="black"
                        className="text-3xl"
                      />
                      
                      <input
                        type="etext"
                        placeholder="Email-Id"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-box">
                      <Icon
                        icon={"material-symbols:lock"}
                        color="black"
                        className="text-3xl"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="text">
                      <a href=" ">Forgot password?</a>
                    </div>

                    <div className="button input-box">
                      <input
                        type="submit"
                        //value="Login"
                        onClick={handleLoginSubmit}
                      />
                    </div>

                    <div className="text sign-up-text">
                      {" "}
                      Don't have an account?
                      <label htmlFor="flip">Register Now</label>
                    </div>
                  </div>
                </form>
              </div>

          

              <div className="register-form">
                <div className="title">REGISTER</div>

                <form>
                  <div className="input-boxes">
                    <div className="input-box">
                      <Icon
                        icon={"material-symbols:person"}
                        color="black"
                        className="text-3xl"
                      />
                      <input
                        type="ntext" //text to ntext
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} //adding name variable made above in the form
                        required
                      />
                    </div>

                    <div className="input-box">
                      <Icon
                        icon={"material-symbols:phone-callback-sharp"}
                        color="black"
                        className="text-3xl"
                      />
                      <input
                        type="tel"
                        style={{ backgroundColor: "#fff" }}
                        name="phoneNumber"
                        placeholder="Phone"
                        value={phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)} //adding phoneNumber variable made above in the for
                        required
                      />
                    </div>

                    <div className="input-box">
                      <Icon
                        icon={"mdi:email"}
                        color="black"
                        className="text-3xl"
                      />
                      <input
                        type="etext" //text to etext
                        name="email"
                        placeholder="Email-Id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} //adding email variable made above in the form
                        required
                      />
                    </div>

                    <div className="input-box">
                      <Icon
                        icon={"mdi:password"}
                        color="black"
                        className="text-3xl"
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} //adding password variable made above in the form
                      />
                    </div>

                    <div className="input-box">
                      {isPasswordMatch ? (
                        <Icon
                          icon={"material-symbols:check-circle-outline-rounded"}
                          color={"green"}
                          className="text-3xl"
                        />
                      ) : (
                        <Icon
                          icon={"mdi:password"}
                          color={"black"}
                          className="text-3xl"
                        />
                      )}
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        name="secPassword"
                        value={secPassword}
                        onChange={(e) => setSecPassword(e.target.value)} //adding second password variable made above in the form
                      />
                    </div>

                    <div className="button input-box">
                      <input
                        type="submit"
                        //value="Register"
                        onClick={handleRegisterSubmit}
                      />
                    </div>

                    <div className="text login-text">
                      Already have an account?
                      <label htmlFor="flip">Login now</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
