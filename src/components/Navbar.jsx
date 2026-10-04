import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">RideEasy</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/book-ride">Book Ride</Link>
        <Link to="/bookings">My Bookings</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;