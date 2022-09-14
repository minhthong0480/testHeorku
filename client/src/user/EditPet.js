import { Fragment, React, useState, useEffect } from "react";
import { useParams, useMatch } from "react-router-dom";
import { toast } from "react-toastify";
import { Select } from "antd";
import "antd/dist/antd.css";
import { read, updatePet } from "../action/pet";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PetEditForm from "../components/forms/PetEditForm";

const { Option } = Select;

const EditPet = ({}) => {
    //redux
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
//
const navigate = useNavigate();
  const [values, setValues] = useState({
    ownername: "",
    petname: "",
    age: "",
    type: "",
    breed: "",
    note: "",
  });
  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );
  const { ownername, petname, age, type, breed, note } = values;

  const [image, setImage] = useState('')

  let match = useMatch("/user/edit-pet/:petId");
  const {petId} = useParams()
    // console.log(petId)
  
  const loadUserPet = async () => {
    let res = await read(petId, token);
    setValues({ ...values, ...res.data });
    setPreview(`${process.env.REACT_APP_API}/pets/pet/image/${petId}`);
  };

  useEffect(() => {
    // console.log(match.params);
    loadUserPet();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault()

    let petData = new FormData()
    petData.append('ownername', ownername)
    petData.append("petname", petname);
    petData.append("age", age);
    petData.append("type", type);
    petData.append("breed", breed);
    petData.append("note", note);
    petData.append("postedBy", auth.user._id);
    image && petData.append("image", image);

    try {
        let res = await updatePet(token, petData, petId)
        console.log('Pet Updated',res);
        toast.success(`${res.data.petname} is updated`)
        setTimeout(() => {
            // loadUserPet();
            navigate('/user/dashboard')
            window.location.reload();
          }, 3000);
        
    } catch (err) {
        console.log(err);
        toast.error(err.response.data.err)
    }
    
  };

  const handleImageChange = (e) => {
    // console.log(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Edit User Pet</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            <PetEditForm 
                values={values}
                setValues={setValues}
                handleChange={handleChange}
                handleImageChange={handleImageChange}
                handleSubmit={handleSubmit}
              />
          </div>
          <div className="col-md-2">
            <img
              src={preview}
              alt="preview_image"
              className="img img-fluid m-2"
            />
            {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditPet;
