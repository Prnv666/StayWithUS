import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./HomeRoomCard.css";

const HomeRoomCard = ({ room, index }) => {
  const navigate = useNavigate();

  const rooms = [
    {
      id: "room-1",
      title: "Urbanza Suites",
      image: "src/assets/roomImg1.png",
      address: "Main Road 123 Street, 23 Colony",
      price: 3999,
      rating: 4.5,
      bestSeller: true,
    },
    {
      id: "room-2",
      title: "Urbanza Suites",
      image: "src/assets/roomImg1.png",
      address: "Main Road 123 Street, 23 Colony",
      price: 2999,
      rating: 4.5,
      bestSeller: false,
    },
    {
      id: "room-3",
      title: "Urbanza Suites",
      image: "src/assets/roomImg1.png",
      address: "Main Road 123 Street, 23 Colony",
      price: 2499,
      rating: 4.5,
      bestSeller: true,
    },
  ];

  return (
    <div className="container shadow rounded py-5">
      <div className="row g-4 justify-content-center">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
          >
            <div
              className="card shadow hover-scale border-0 rounded-4"
              style={{ cursor: "pointer", maxWidth: "350px" }}
              onClick={() => navigate(`/rooms/${room.id}`)}
            >
              <div className="position-relative">
                <img
                  src={room.image}
                  alt={room.title}
                  className="card-img-top rounded-top-4"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                {room.bestSeller && (
                  <span className="badge bg-light text-dark position-absolute top-0 start-0 m-2 px-3 py-1 rounded-pill shadow-sm">
                    Best Seller
                  </span>
                )}
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{room.title}</h5>
                <p className="card-text text-muted mb-2 d-flex align-items-center gap-2">
                  <FaLocationDot />
                  {room.address}
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="fw-bold fs-5">
                    ₹{room.price}{" "}
                    <span className="text-muted fs-6">/night</span>
                  </div>
                  <div className="d-flex align-items-center gap-1 text-warning">
                    <FaStar /> {room.rating}
                  </div>
                </div>
                <button
                  className="btn btn-outline-dark btn-sm w-100 mt-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/rooms/${room.id}`);
                    scrollTo(0, 0);
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="row">
          <div className="col-lg-12 col-12 col-md-12 col-sm-12 text-center p-5">
            <button
              onClick={() => {
                navigate("/rooms");
                scrollTo(0, 0);
              }}
              className="btn btn-outline-dark px-5 btn-sm text-center"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRoomCard;
