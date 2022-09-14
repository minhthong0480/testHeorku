import React, { Fragment, useState } from "react";
import RegisterForm from "../components/forms/RegisterForm";
import { useNavigate } from "react-router-dom";
import { register } from "../action/auth";
import { useDispatch } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.table({ name, email, password });
    dispatch(register({name, email, password}, navigate))
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Register</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <RegisterForm
              handleSubmit={handleSubmit}
              name={name}
              email={email}
              password={password}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
