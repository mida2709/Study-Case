import React, { useState } from "react";
import Car from "./Car";
import { mobil } from "./mobilData";

const Showroom = () => {
  const [searchResults, setSearchResults] = useState(mobil);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleSelectCar = (carId) => {
    const car = mobil.find((c) => c.id === carId);
    setSelectedCar(car);
  };

  const handleReset = () => {
    setSelectedCar(null);
  };

  return (
    <div>
      <h1>Zilla Showroom</h1>
      {selectedCar ? (
        <>
          <Car car={selectedCar} />
          <button className="blue-button" onClick={handleReset}>
            Kembali ke Daftar Mobil
          </button>
        </>
      ) : (
        <>
          <h2>Cari Mobil Impian Anda</h2>
          <div>
            {searchResults.map((car) => (
              <div key={car.id}>
                <h3>{car.nama}</h3>
                <p>{car.deskripsi}</p>
                <button className="green-button" onClick={() => handleSelectCar(car.id)}>Lihat Detail</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Showroom;
