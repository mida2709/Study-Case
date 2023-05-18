import React, { useState } from 'react';
import { mobil } from './Components/Car';
import logo from './images/logo.png';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCars = mobil.filter(car =>
    car.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h2 className="search-text">Cari Mobil Impian Anda</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <div className="car-container">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={require(`./images/${car.path}`).default} alt={car.nama} className="car-image" />
            <div className="car-details">
              <h3>{car.nama}</h3>
              <p>Merek: {car.merek}</p>
              <p>Warna: {car.warna}</p>
              <p>Tipe: {car.tipe}</p>
              <button>LIHAT DETAIL</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
