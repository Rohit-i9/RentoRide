import { Link } from "react-router-dom";

function VehicleCard({ vehicle }) {
  return (
    <div className="vehicle-card">
      <div className="vehicle-image">
        🚗
      </div>

      <h3>{vehicle.name}</h3>
      <p>{vehicle.type}</p>
      <h4>₹{vehicle.price}/day</h4>

      <Link to="/book-ride">
        <button>Book Now</button>
      </Link>
    </div>
  );
}

export default VehicleCard; 