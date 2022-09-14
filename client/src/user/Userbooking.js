import moment from "moment";
import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userBookings, createBooking } from "../action/booking";

import { DatePicker, Select } from "antd";
import {toast} from 'react-toastify'
import UserBookingForm from "../components/forms/UserBookingForm";
import { useNavigate } from "react-router-dom";
import { userPets } from "../action/pet";

const Userbooking=() =>{
  const [pets, setPets] = useState([]);
  const [note, setNote] = useState([])
  const [date, setDate] = useState([])
  // const [values, setValues] = useState({
    
  //   note: "",
  //   date: "",
  // });


  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().subtract(1, "days");
  };

  useEffect(() => {
    loadBooking();
  }, []);

  // const {auth} = useSelector((state) => ({...state}))

  const loadBooking = async () => {
    let res = await userPets(token);
    // setValues({...values, ...res.data});
    setPets(res.data)
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let bookingData = new FormData()
  //   bookingData.append('pets', pets)
  //   bookingData.append("note", note);
  //   bookingData.append("date", date);
  //   bookingData.append("postedBy", auth.user._id);

  //   console.log([...bookingData]);
    
  //   try {
  //     let res = await createBooking(token, bookingData)
  //     console.log("Booking Created", res);
  //     toast.success(`New Booking Added`)
  //   } catch (err) {
  //     console.log(err)
  //     toast.error(err.response.data)
  //   }
  // };

  // const handleChangeNote = (e) => {
  //   setNote(e.target.value);
  // };

  // const handleChangeDate = (e) => {
  //   setDate(e.target.value)
  // }

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Add Booking</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            <UserBookingForm
              pets={pets}
              note={note}
              date={date}
              setPets={setPets}
              setNote={setNote}
              setDate={setDate}
              disabledDate={disabledDate}
              // handleChangeNote={handleChangeNote}
              // handleChangeDate={handleChangeDate}
              // handleSubmit={handleSubmit}
            />
            {/* <pre>{JSON.stringify(pets,note,date, null, 4)}</pre> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Userbooking;
