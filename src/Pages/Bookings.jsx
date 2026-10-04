import { useEffect, useState } from "react";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(savedBookings);
  }, []);

  return (
    <div className="page">
      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="empty">
          <h3>No bookings found</h3>
          <p>Book your first ride to see it here.</p>
        </div>
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => (
            <div className="booking-card" key={booking.id}>
              <h3>🚗 {booking.vehicle}</h3>

              <p>
                <strong>Pickup:</strong> {booking.pickup}
              </p>

              <p>
                <strong>Destination:</strong>{" "}
                {booking.destination}
              </p>

              <p>
                <strong>Date:</strong> {booking.date}
              </p>

              <span className="status">
                Confirmed
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookings;