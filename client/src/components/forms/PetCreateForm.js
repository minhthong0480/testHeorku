import { Fragment, React, useState } from "react";
import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";

const PetCreateForm = (props) => {
  const { values, setValues, handleChange, handleImageChange, handleSubmit } =
    props;
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  const { Option } = Select;

//   const { RangePicker } = DatePicker;

//   const disabledDate = (current) => {
//     // Can not select days before today and today
//     return current && current < moment().subtract(1, "days");
//   };

  const [preview, setPreview] = useState(
    "http://via.placeholder.com/100x100.png?text=PREVIEW"
  );
  //destructing variable from state
  const { ownername, petname, age, type, breed, note, image } = values;
  const dispatch = useDispatch();
  //console.log(values)

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="btn btn-outline-secondary btn-block m-2 text-left">
            Choose your Pet Picture
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              hidden
            />
          </label>

          <input
            type="text"
            name="ownername"
            onChange={handleChange}
            placeholder="Owner Name"
            className="form-control m-2"
            values={ownername}
            // hidden
          />

          <input
            type="text"
            name="petname"
            onChange={handleChange}
            placeholder="Pet Name"
            className="form-control m-2"
            values={petname}
          />

          <input
            type="number"
            name="age"
            onChange={handleChange}
            placeholder="Age"
            className="form-control m-2"
            values={age}
          />

          <Select
            onChange={(value) => setValues({ ...values, type: value })}
            className="w-100 m-2"
            size="large"
            placeholder="Type of your Pet"
          >
            <Option value='Dog'>Dog</Option>
            <Option value='Cat'>Cat</Option>
            <Option value='Bird'>Bird</Option>
            
          </Select>
          

          <input
            type="text"
            name="breed"
            onChange={handleChange}
            placeholder="Breed"
            className="form-control m-2"
            values={breed}
          />

          <textarea
            type="content"
            name="note"
            onChange={handleChange}
            placeholder="Note"
            className="form-control m-2"
            values={note}
          />
        </div>

        
        {/* <RangePicker className="form-control m-2" disabledDate={disabledDate} /> */}

        <button className="btn btn-outline-primary m-2">Save</button>
      </form>
      
    </Fragment>
  );
};

export default PetCreateForm;
