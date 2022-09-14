import { Fragment, React, useState } from "react";
import { toast } from "react-toastify";
import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import { createPet } from "../action/pet";
import {  useSelector } from "react-redux";
import PetCreateForm from "../components/forms/PetCreateForm";
import { useNavigate } from "react-router-dom";

const UserPet = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  const { Option } = Select;
  const navigate = useNavigate();

  const [values, setValues] = useState({
    ownername:'',
    petname: "",
    age: "",
    type: "",
    breed: "",
    note: "",
    image: "",
    from: "",
    to: "",
  });

  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );
  //destructing variable from state
  const { ownername, petname, age, type, breed, note, image } = values;
  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let petData = new FormData();
    petData.append('ownername', ownername)
    petData.append("petname", petname);
    petData.append("age", age);
    petData.append("type", type);
    petData.append("breed", breed);
    petData.append("note", note);
    petData.append("postedBy", auth.user._id);
    image && petData.append("image", image);

    console.log([...petData]);

     //dispatch(createPet(token, petData));
     try {
      let res = await createPet(token, petData)
    console.log("PET CREATE RES", res);
    toast.success("New Pet added");
    setTimeout(() => {
      //window.location.reload();
      navigate('/user/dashboard')
    }, 3000);
     } catch (err) {
      console.log(err)
      toast.error(err.response.data)
     }
  };

  const handleImageChange = (e) => {
    // console.log(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
    setValues({ ...values, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Add Pet</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
              <PetCreateForm 
                values={values}
                setValues={setValues}
                handleChange={handleChange}
                handleImageChange={handleImageChange}
                handleSubmit={handleSubmit}

              />
          </div>
          <div className="col-md-2">
            <img src={preview} alt="preview_image" className="img-fluid m-2" />
            {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserPet;
