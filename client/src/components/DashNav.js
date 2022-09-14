import { Fragment } from "react";
import { Link } from "react-router-dom";

const DashNav = () => {
  const active = window.location.pathname;
  console.log(active);
  return (
    <Fragment>
      
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className={`nav-link ${active === "/user/dashboard" && "active"}`}
            to="/user/dashboard"
          >
            Your Pets
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${active === "/user/dashboard/booking" && "active"}`}
            to="/user/dashboard/booking"
          >
            Your Booking
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default DashNav;
