import { Fragment, useEffect, useState } from "react";
import DashNav from "../components/DashNav";
import { Link } from "react-router-dom";
import { userPets, deletePet } from "../action/pet";
import SmallCard from "../components/cards/SmallCard";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const UserDashboard = () => {
  const [pets, setPets] = useState([]);
  const [query, setQuery] = useState("");
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  useEffect(() => {
    loadUserPets();
  }, []);

  const loadUserPets = async () => {
    let res = await userPets(auth.token);
    setPets(res.data);
  };
  // console.log(pets)

  const handleDeletePet = async (petId) => {
    if (!window.confirm("Do you want to delete this pet?")) return;
    deletePet(auth.token, petId).then((res) => {
      toast.success("Pet Deleted");
      loadUserPets();
    });
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Dashboard</h1>
      </div>

      <div className="container-fluid p-4">
        <DashNav />
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
            <Link to="/user/create-pet" className="btn btn-primary">
              + Add New
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
        <br />
        
      </div> */}
    </Fragment>
  );
};

export default UserDashboard;
