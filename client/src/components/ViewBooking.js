import { Fragment, React, useState, useEffect } from "react";
import { useParams, useMatch } from "react-router-dom";
import { toast } from "react-toastify";
import "antd/dist/antd.css";
import { read } from "../action/pet";
import { useSelector } from "react-redux";
import { readBooking } from "../action/booking";

const ViewBooking = () => {
  const [booking, setBooking] = useState({});
  const [pet, setPet] = useState({});
  const [image, setImage] = useState({});
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );
  const [values, setValues] = useState({
    ownername: "",
    petname: "",
    age: "",
    type: "",
    breed: "",
    note: "",
  });

  // let match = useMatch("/user/edit-pet/:petId");

  const { bookingId } = useParams();

  const loadBooking = async () => {
    let res = await readBooking(bookingId, token);
    console.log(res);
    setBooking(res.data);
    console.log(booking);
    // setImage(`${process.env.REACT_APP_API}/pets/pet/image/${booking.pets?._id}`);
  };

  useEffect(() => {
    loadBooking();
    console.log("a");
  }, []);

  return (
    <Fragment>
      {/* {console.log(booking)} */}
      <div className="container-fluid bg-secondary p-5 text-center">
        {/* <h2>{booking.pets.petname}</h2> */}
        <h2>{booking.pets?.petname}'s Booking Invocie</h2>
        {/* <h2>View Booking</h2> */}
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <br />
            {booking?.pets?._id ? (
              <img
                src={`${process.env.REACT_APP_API}/pets/pet/image/${booking.pets._id}`}
                alt=""
                className="card-image img img-fluid"
              />
            ) : (
              <img
                src="https://via.placeholder.com/900x500.png?text=Pet+picture"
                alt=""
                className="card-image img img-fluid"
              />
            )}
          </div>
          <div className="col-md-6">
            <br />
            <h3>Owner Information</h3>
             <p>Owner: {booking.pets?.ownername}</p>
             <p className="alert alert-info mt-3 ">Note: {booking.note}</p>
             <p className="cardtext">Book Date: <br />
              <span className="float-right text-primary">
              From: {booking.fromDate?.slice(0, 15)} To:{" "}
              {booking.toDate?.slice(0, 15)}
              </span>
             </p>
             <h3>Pet Information</h3>
             <p>Type: {booking.pets?.type}</p>
             <p>Breed: {booking.pets?.breed}</p>
             <p>Age: {booking.pets?.age}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ViewBooking;
