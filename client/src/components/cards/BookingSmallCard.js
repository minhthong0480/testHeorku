import { Fragment } from "react";
import { useNavigate, Link, useMatch } from "react-router-dom";
import { DeleteOutlined, FormOutlined, CloseOutlined } from "@ant-design/icons";
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Divider, Tag } from "antd";

// const SmallCard = ({h})=> <>{JSON.stringify(h)}</>
const BookingSmallCard = ({
  h,
  handleDeleteBooking = (f) => f,

  handleApproved = (f) => f,

  handleDisapproved = (f) => f,
}) => {
  const isStaff = useMatch("/staff/dashboard/booking");
  const navigate = useNavigate();

  const Status = () => {
    switch (h.status) {
      case "Processing":
        return (
          <Tag className="p-1" icon={<SyncOutlined spin />} color="processing">
            Processing
          </Tag>
        );
      case "Approved":
        return (
          <Tag className="p-1" icon={<CheckCircleOutlined />} color="success">
            Approved
          </Tag>
        );
      case "Denied":
        return (
          <Tag icon={<CloseCircleOutlined />} color="error">
            Denied
          </Tag>
        );
      default:
        break;
    }
  };

  console.log(h.pets)
  // console.log(h.);
  return (
    <Fragment>
      <div className="card m-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            {h.pets.image ? (
              <img
                src={`${process.env.REACT_APP_API}/pets/pet/image/${h.pets._id}`}
                alt="pet_picture"
                className="card-image img img-fluid"
              />
            ) : (
              <img
                src="https://via.placeholder.com/900x500.png?text=Pet+picture"
                alt="pet_picture"
                className="card-image img img-fluid"
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{h.pets.petname}</h3>
              {isStaff && (
                <>
                  <div className="card-text mb-1 h4">Owner: </div>{" "}
                  <p>{h.pets.ownername}</p>
                </>
              )}

              <p className="alert alert-info">
                Note: {`${h.note.substring(0, 200)}...`}
              </p>
              <div className="d-flex h4">Booked Dates:</div>
              <p className="card-text mb-1">From: {h.fromDate.slice(0, 15)}</p>
              <p className="card-text ">To: {h.toDate.slice(0, 15)}</p>
              <div>
                <div>
                  {" "}
                  <p className="h4">Status: </p>{" "}
                </div>{" "}
                {<Status />}
              </div>
              <div className="d-flex justify-content-between mt-3 h4">
                <button
                  onClick={() => navigate(`/booking/${h._id}`)}
                  className="btn btn-primary"
                >
                  Show more
                </button>
                {isStaff && (
                  <>
                    <FormOutlined
                      className="text-warning"
                      onClick={() => handleApproved(h._id)}
                    />
                    <CloseOutlined
                      className="text-warning"
                      onClick={() => handleDisapproved(h._id)}
                    />
                  </>
                )}
                <DeleteOutlined
                  onClick={() => handleDeleteBooking(h._id)}
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

export default BookingSmallCard;
