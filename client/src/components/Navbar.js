import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  console.log(auth);
  // const {isStaff} = useSelector((state) => state.isStaff);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //functin for logout
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <nav className=" navbar navbar-expand bg-light">
      <div className="container-fluid">
        <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          {auth !== null && (
            <ul className="nav">
              {!auth.user.isStaff && (
                <li className="nav-item">
                  <Link className="nav-link active" to={`/user/update-user/${auth.user._id}`}>
                    My Account
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link active" to={auth.user.isStaff ? "staff/dashboard" : "user/dashboard"}>
                  Dashboard
                </Link>
              </li>
            </ul>
          )}
        </ul>

        {auth !== null && (
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link pointer active" onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        )}

        {auth === null && (
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link active" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        {/* <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
};

export default Navbar;
