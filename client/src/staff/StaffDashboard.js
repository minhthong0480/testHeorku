import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allPets, deletePet } from "../action/pet";
import SmallCard from "../components/cards/SmallCard";
import StaffDashNav from '../components/StaffDashNav'
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


const UserDashboard = () => {
  const [pets, setPets] = useState ([])
  const [query, setQuery] = useState([])
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

    useEffect(()=>{
        loadAllPets();
    },[]);

    const loadAllPets = async () =>{
        let res = await allPets(auth.token);
        setPets(res.data);
    }

    const handleDeletePet = async (petId) => {
      if (!window.confirm("Do you want to delete this pet?")) return;
      deletePet(auth.token, petId).then((res) => {
        toast.success("Pet Deleted");
        loadAllPets();
      });
    };
  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Staff Dashboard</h1>
      </div>

      <div className="container-fluid p-4">
        <StaffDashNav />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 text-center">
            <h2>Pet Collection</h2>
          </div>
        </div>
        <div className="row justify-content-start ms-3">
          <div className="col-md-8">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
              />
              {pets
                .filter((h) => h.petname.toLowerCase().includes(query))
                .map((h) => (
                  <div className="container-fluid m-3">
                    <br />
                    <SmallCard
                      key={h._id}
                      h={h}
                      handleDeletePet={handleDeletePet}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="col-md-2">
            <Link to="/staff/create-pet" className="btn btn-primary">
              + Add New
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserDashboard;
