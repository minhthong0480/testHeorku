import React from "react";

const MyAccountForm = (props) => {
  const {
    handleSubmit,
    values,
    setValues,
    handleChange
  } = props;
  const { name, email } = values;
  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="form-group mb-3 mt-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          // defaultValue={name}
          placeholder="Enter Your Name"
          value={name}
          name='name'
          onChange={handleChange}
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          // defaultValue={email}
          placeholder="name@example.com"
          value={email}
          onChange={handleChange}
          disabled
        />
      </div>

      {/* <div className="form-group mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          defaultValue={password}
          placeholder="At least 6 characters"
          values={password}
          onChange={handleChange}
          disabled
        />
      </div> */}
      <button className="btn btn-primary">Change</button>
    </form>
  );
};

export default MyAccountForm;
