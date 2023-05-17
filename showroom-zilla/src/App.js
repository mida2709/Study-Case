import Frame from './images/Frame 27.png'
import React from 'react';
import Car from './Components/Car';


function App() {
  return (
    <div>
      <header>
        <img src={Frame} className="uk" alt="Frame" />
        <h1 className="judul">Zilla Showroom</h1>
        <div className="card">
          <p className="cari">Cari Mobil Impian Anda</p>
          <div className="search">
            <p className="s">Search</p>
          </div>
          <div className="cardname">
          </div>
        </div>
        <Car/>
      </header>
  
    </div>
  );
};

export default App;


