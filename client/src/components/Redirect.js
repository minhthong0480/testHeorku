import React from "react";

function Redirect() {
  return (
    <div className="text-center m-3">
      <h1>Please Log In To View This Page</h1>
      <p>Haven't got an account? Click <a href="/register">here</a> to register</p>
      
    </div>
  );
}

export default Redirect;
