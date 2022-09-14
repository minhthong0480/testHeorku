import { Fragment, React, useState } from "react";
import {forgot} from "../action/auth"
import axios from "axios";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  // const [text, setText] = useState('')
  // const [send, setSend] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault();
    // const data = {
    //   email: this.email,
    // };
    // setSend(true)
    try {
      let res = await forgot(email)
      console.log("Email sent", res);
      toast.success(`Email Sent`)
      }
    catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="containter h1 bg-secondary p-5 text-center">
          <h1>Reset Password</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="mt-3">
                <div className="form-group mb-3">
                  <label className="form-label text-center">
                    Enter Your Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name@example.com"
                    value={email}
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button type = "submit" className="btn btn-primary mb-2">Reset</button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
}

export default ForgotPassword;
