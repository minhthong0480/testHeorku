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
            className={`nav-link ${active === "/staff/dashboard" && "active"}`}
            to="/staff/dashboard"
          >
            User's Pet Collection
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${active === "/staff/dashboard/booking" && "active"}`}
            to="/staff/dashboard/booking"
          >
            Booking Invoice
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default DashNav;
