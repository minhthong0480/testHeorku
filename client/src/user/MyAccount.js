import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readUser, updateUser } from "../action/auth";
import { useDispatch, useSelector } from "react-redux";
import MyAccountForm from "../components/forms/MyAccountForm";
import { toast } from "react-toastify";

const MyAccount = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const { auth } = useSelector((state) => ({ ...state }));
  const { user } = auth;
  const {token} = auth;
    // console.log(token);

  const [values, setValues] = useState({
    name: user?.name,
    email: user?.email,
    // password: user?.password,
  });

  const {userId} = useParams();

  console.log(userId);

  const { name, email } = values;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loadUserData = async () => {
    let res = await readUser(userId, token);
    setValues({...values, ...res.data});
  };

  useEffect(() => {
    loadUserData();
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userData = new FormData();
    userData.append("name", name);
    userData.append("email", email);

    try {
      let res = await updateUser(token, userData, userId)
      console.log("User Updated", res)
      toast.success(`${res.data.name} is updated`)
      setTimeout(() => {
        navigate('/')
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  const handleChange = (e) => {
    console.log(values)
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>My Account</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <MyAccountForm
              handleSubmit={handleSubmit}
              values={values}
              setValues={setValues}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyAccount;
