import React, { Fragment, useState } from "react";
import { login } from "../action/auth";
import LoginForm from "../components/forms/LoginForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("thong@gmail.com");
  const [password, setPassword] = useState("123456");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SEND DATA", { email, password });
    dispatch(login({email, password}, navigate))
    
  }
  return (
    <Fragment>
      <div className="containter h1 bg-secondary p-5 text-center">
        <h1>Login Page</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <LoginForm
              handleSubmit={handleSubmit}
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
