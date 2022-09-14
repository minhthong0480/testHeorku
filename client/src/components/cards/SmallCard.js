import { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined, FormOutlined } from "@ant-design/icons";

const SmallCard = ({ h, handleDeletePet = (f) => f }) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="card m-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            {h.image && h.image.contentType ? (
              <img
                src={`${process.env.REACT_APP_API}/pets/pet/image/${h._id}`}
                alt="pet_picture"
                className="card-image img img-fluid"
              />
            ) : (
              <img
                src="https://via.placeholder.com/900x500.png?text=pet+picture"
                alt="pet_picture"
                className="card-image img img-fluid"
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{h.petname}</h3>
              <p className="alert alert-info">
                Note: {`${h.note.substring(0, 200)}...`}
              </p>
              <p className="card-text">Owner: {h.ownername}</p>
              <p className="card-text">Type: {h.type}</p>
              <p className="card-text">Age: {h.age}</p>
              <p className="card-text">Breed: {h.breed}</p>

              <div className="d-flex justify-content-between h4">
                {/* <button
                  onClick={() => navigate(`/pets/${h._id}`)}
                  className="btn btn-primary"
                >
                  Show more
                </button> */}
                <Link to={`/user/edit-pet/${h._id}`}>
                  <FormOutlined className="text-warning" />
                </Link>
                <DeleteOutlined
                  onClick={() => handleDeletePet(h._id)}
                  className="text-danger"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SmallCard;
