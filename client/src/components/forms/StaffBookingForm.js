import { Fragment, React, useState } from "react";
import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {toast} from 'react-toastify'
import { userBookings, createBooking } from "../../action/booking";
import {useNavigate} from "react-router-dom"



const StaffBookingForm = (props) => {
  const { pets, disabledDate } =
    props;
  // const [pets, setPets] = useState([]);
  const [note, setNote] = useState([]);
  const [date, setDate] = useState([]);
  const [petId, setPetId] = useState('');
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const { Option } = Select;

  //deconstruct props
  // const {pets} = props
  // console.log(props);

 const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    let bookingData = new FormData()
    bookingData.append('pets', petId)
    bookingData.append("note", note);
    bookingData.append("fromDate", date[0]);
    bookingData.append("toDate", date[1]);
    bookingData.append("postedBy", auth.user._id);
    console.log(date[0]);

    console.log([...bookingData]);
    
    try {
      let res = await createBooking(token, bookingData)
      console.log("Booking Created", res);
      toast.success(`New Booking Added`)
      setTimeout(() => {
        navigate("/staff/dashboard/booking");
      }, 4000);
    } catch (err) {
      console.log(err)
      toast.error(err.response.data)
    }
  };

  const handleChangeNote = (e) => {
    setNote(e.target.value);
  };

  // const handleChangeDate = (e) => {
  //   setDate(e.target.value)
  // }



  const { RangePicker } = DatePicker;
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Select
            className="w-100 m-2"
            size="large"
            name='pets'
            placeholder="Choose Pet from your Collection"
            onChange={(values) => setPetId(values)}
            //value={pets}
          >
            {pets.map((pet) => (
              <Option key={pet._id} value={pet._id}>{pet.petname}</Option>
            ))}
          </Select>

          <textarea
            type="content"
            name="note"
            onChange={handleChangeNote}
            placeholder="Leave a note for Staff"
            className="form-control "
            values={note}
          />

          <div className="ml-4">
            <label> Date (From - To)</label>
          </div>
          <RangePicker
          
            className="form-control m-2"
            name='date'
            onChange={(values) => setDate(values)}
            disabledDate={disabledDate}
            values={date}
          />
          

          <br />
          <button className="btn btn-outline-primary m-2">Book</button>
        </div>
      </form>
    </Fragment>
  );
};

export default StaffBookingForm;
