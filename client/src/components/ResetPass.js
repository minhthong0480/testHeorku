import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readResetUser, reset, updateUser } from "../action/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ResetPassForm from "../components/forms/ResetPassForm"

const ResetPass = () => {
  //   const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
//   const { auth } = useSelector((state) => ({ ...state }));
//   const { user } = auth;
//   const {token} = auth;
    // console.log(token);

//   const [values, setValues] = useState({
//     // name: user?.name,
//     email: email,
//     password: password,
//   });

  const {token} = useParams();

//   console.log(userId);

//   const { name, email } = values;
//   const { password, email } = values;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loadUserData = async () => {
    let res = await readResetUser(token);
    setPassword(res.data); 
  };

  useEffect(() => {
    loadUserData();
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userData = new FormData();
    // userData.append("name", name);
    userData.append("email", email);
    userData.append("password", password);

    try {
      let res = await reset( userData)
      console.log("User Password Updated", res)
      toast.success(`Your password is updated`)
      setTimeout(() => {
        navigate('/login')
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

//   const handleChange = (e) => {
//     // console.log(values)
//     setPassword((e)=>e.target.value);
//   };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Reset Password</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <ResetPassForm
              handleSubmit={handleSubmit}
            //   values={values}
            //   setValues={setValues}
            //   handleChange={handleChange}
                email={email}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPass;
