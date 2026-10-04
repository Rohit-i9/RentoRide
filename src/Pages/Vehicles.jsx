import VehicleCard from "../components/Vehiclecard";

function Vehicles() {
  const vehicles = [
    {
      id: 1,
      name: "Swift Dzire",
      type: "Sedan",
      price: 1500
    },
    {
      id: 2,
      name: "Hyundai Creta",
      type: "SUV",
      price: 2200
    },
    {
      id: 3,
      name: "Royal Enfield",
      type: "Bike",
      price: 800
    },
    {
      id: 4,
      name: "Kia Seltos",
      type: "SUV",
      price: 2500
    }
  ];

  return (
    <div className="page">
      <h1>Available Vehicles</h1>

      <p className="page-subtitle">
        Choose a vehicle according to your requirements.
      </p>

      <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
          />
        ))}
      </div>
    </div>
  );
}

export default Vehicles;