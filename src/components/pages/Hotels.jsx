import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Hotels = () => {
  const navigate = useNavigate();

  const rooms = [
    {
      id: 1,
      type: "room",
      name: "Deluxe Room",
      image: "https://media.istockphoto.com/id/2157081715/photo/master-bedroom-interior-in-luxury-apartment-net-and-clean-lines-decor.webp?a=1&b=1&s=612x612&w=0&k=20&c=S5ckCRakoGTgDgIkZeX-ffd6XpGXcEHgodOoqAyjySE=",
      price: "₹ 3,500/night",
      features: ["AC", "WiFi", "Room Service"],
    },
    {
      id: 2,
      type: "room",
      name: "Suite Room",
      image: "https://media.istockphoto.com/id/453175549/photo/hotel-suite.webp?a=1&b=1&s=612x612&w=0&k=20&c=LSTtDmb_1aJQGXX8s-OxinM4j79I4ht_QfKl9Cf_W0M=",
      price: "₹ 5,000/night",
      features: ["Mini Bar", "King Bed", "Bathtub"],
    },
  ];

  const halls = [
    {
      id: 3,
      type: "hall",
      name: "Royal Marriage Hall",
      image: "https://media.istockphoto.com/id/497490513/photo/banquet-hall-with-colorful-lights.jpg?s=1024x1024&w=is&k=20&c=iGpKkSUu4xqNe7LN34zhYCzG9JxQEUNhKwdhL-0_vGQ=",
      price: "₹50,000/day",
      features: ["500 Guests", "Stage", "Catering"],
    },
    {
      id: 4,
      type: "hall",
      name: "Luxury Banquet Hall",
      image: "https://media.istockphoto.com/id/157643691/photo/wedding-ballroom-hall.webp?a=1&b=1&s=612x612&w=0&k=20&c=lraArp-kXapmqjFmroYs1WKMjYeNkdLA8TiIStZQiLQ=",
      price: "₹80,000/day",
      features: ["AC", "Lighting", "Decor"],
    },
  ];

  const handleBook = (item) => {
    navigate(`/details/${item.id}`, { state: item });
  };

  return (
    <>
      <div className="container-fluid text-dark py-3 my-5">
        <h1 className="text-center">Suites & Halls</h1>
      </div>

      <div className="container my-5">
        <h3 className="mb-4">Available Rooms</h3>
        <div className="row">
          {rooms.map((room) => (
            <div className="col-md-6 col-lg-4 mb-4" key={room.id}>
              <div className="card h-100 shadow-sm">
                <img src={room.image} className="card-img-top" alt={room.name} />
                <div className="card-body">
                  <h5 className="card-title">{room.name}</h5>
                  <p className="card-text text-success fw-bold">{room.price}</p>
                  <ul className="list-unstyled">
                    {room.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handleBook(room)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-5 mb-4">Marriage Halls</h3>
        <div className="row">
          {halls.map((hall) => (
            <div className="col-md-6 col-lg-4 mb-4" key={hall.id}>
              <div className="card h-100 shadow-sm">
                <img src={hall.image} className="card-img-top" alt={hall.name} />
                <div className="card-body">
                  <h5 className="card-title">{hall.name}</h5>
                  <p className="card-text text-success fw-bold">{hall.price}</p>
                  <ul className="list-unstyled">
                    {hall.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handleBook(hall)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hotels;
