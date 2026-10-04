import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookRide() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    date: "",
    vehicle: "Car"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      ...formData,
      id: Date.now()
    };

    const oldBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...oldBookings, booking])
    );

    alert("Ride booked successfully!");

    navigate("/bookings");
  };

  return (
    <div className="page">
      <div className="booking-box">
        <h1>Book Your Ride</h1>

        <form onSubmit={handleSubmit}>
          <label>Pickup Location</label>

          <input
            type="text"
            name="pickup"
            placeholder="Enter pickup location"
            value={formData.pickup}
            onChange={handleChange}
            required
          />

          <label>Destination</label>

          <input
            type="text"
            name="destination"
            placeholder="Enter destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />

          <label>Date</label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Select Vehicle</label>

          <select
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
          >
            <option value="Car">Car</option>
            <option value="SUV">SUV</option>
            <option value="Bike">Bike</option>
          </select>

          <button type="submit">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookRide;