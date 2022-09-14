import { Fragment, React, useState } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";

const PetEditForm = (props) => {
  const { values, setValues, handleChange, handleImageChange, handleSubmit } =
    props;
  //   const { auth } = useSelector((state) => ({ ...state }));
  //   const { token } = auth;

  const { Option } = Select;

  //   const { RangePicker } = DatePicker;

  //   const disabledDate = (current) => {
  //     // Can not select days before today and today
  //     return current && current < moment().subtract(1, "days");
  //   };

  //   const [preview, setPreview] = useState(
  //     "https://via.placeholder.com/100x100.png?text=PREVIEW"
  //   );
  //destructing variable from state
  const { ownername, petname, age, type, breed, note, image } = values;

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="btn btn-outline-secondary btn-block m-2 text-left">
            Change your Pet Picture
            <input
              type="file"
              name="image"
              defaultValue={image}
              onChange={handleImageChange}
              accept="image/*"
              hidden
            />
          </label>

          <input
            type="text"
            name="ownername"
            defaultValue={ownername}
            onChange={handleChange}
            placeholder="Owner Name"
            className="form-control m-2"
            values={ownername}
          />

          <input
            type="text"
            name="petname"
            defaultValue={petname}
            onChange={handleChange}
            placeholder="Pet Name"
            className="form-control m-2"
            values={petname}
          />

          <input
            type="number"
            name="age"
            defaultValue={age}
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
            value={type}
          >
            <Option value="Dog">Dog</Option>
            <Option value="Cat">Cat</Option>
            <Option value="Bird">Bird</Option>
          </Select>

          <input
            type="text"
            name="breed"
            defaultValue={breed}
            onChange={handleChange}
            placeholder="Breed"
            className="form-control m-2"
            values={breed}
          />

          <textarea
            type="content"
            name="note"
            defaultValue={note}
            onChange={handleChange}
            placeholder="Note"
            className="form-control m-2"
            values={note}
          />
        </div>

        {/* <RangePicker className="form-control m-2" disabledDate={disabledDate} /> */}

        <button className="btn btn-outline-primary m-2">Save Edit</button>
      </form>
    </Fragment>
  );
};

export default PetEditForm;
