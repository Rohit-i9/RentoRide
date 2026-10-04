import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Book Your Ride Easily</h1>

          <p>
             Book a ride or rent a vehicle quickly, safely and affordably.
          </p>

          <div className="hero-buttons">
            <Link to="/book-ride">
              <button>Book a Ride</button>
            </Link>

            <Link to="/vehicles">
              <button className="secondary-btn">
                Rent a Vehicle
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div>
          <h2>🚕</h2>
          <h3>Easy Booking</h3>
          <p>Book your ride in just a few clicks.</p>
        </div>

        <div>
          <h2>🚗🏍️</h2>
          <h3>Multiple Vehicles</h3>
          <p>Choose from cars, bikes and other vehicles.</p>
        </div>

        <div>
          <h2>🔒</h2>
          <h3>Safe & Reliable</h3>
          <p>Enjoy a convenient and reliable service.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;