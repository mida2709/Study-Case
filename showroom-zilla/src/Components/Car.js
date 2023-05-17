import Card from './Card';
import React from 'react';
import css from '../css/style.css';



const Car = ({ car }) => {
  return (
  
    <div className="car">
      <img src={car.path} alt={car.nama} />
      <p>{car.nama}</p>
      <p>{car.merek}</p>
      <p>{car.warna}</p>
      <p>{car.tipe}</p>
      <button>LIHAT DETAIL</button>

    </div>
  );
};

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <Car car={car} key={car.id} />
      ))}
    </div>
  );
};

function App() {
  const cars = [
    {
      id: 1,
      nama: 'Civic Type R',
      path: 'civic-type-r.jpg',
      merek: 'Honda',
      warna: 'Merah',
      tipe: 'Sedan'
    },
    {
      id: 2,
      nama: 'Innova Venture',
      path: 'innova-venture.jpg',
      merek: 'Toyota',
      warna: 'Putih',
      tipe: 'Mini Bus'
    },
    {
        id: 4,
        nama: 'M4 Competition',
        path: 'm4-competition.jpg',
        merek: 'BMW',
        warna: 'Biru Tua',
        tipe: 'Sport Car'
    },
    {
        id: 5,
        nama: 'S Class 3000',
        path: 's-class-3000.jpg',
        merek: 'Mercedes',
        warna: 'Abu-abu',
        tipe: 'Sedan'
    },
    {
        id: 6,
        nama: 'Aventador',
        path: 'aventador.jpg',
        merek: 'Lamborghini',
        warna: 'Kuning',
        tipe: 'Sport Car'
    },
    {
        id: 7,
        nama: 'Almaz',
        path: 'almaz.jpg',
        merek: 'Wuling',
        warna: 'Abu-abu',
        tipe: 'SUV'
    },
    {
        id: 8,
        nama: 'Sigra',
        path: 'sigra.jpg',
        merek: 'Daihatsu',
        warna: 'Hitam',
        tipe: 'Mini Bus'
    },
    {
        id: 9,
        nama: 'Cullinan',
        path: 'cullinan.jpg',
        merek: 'Rolls Royce',
        warna: 'Emas',
        tipe: 'SUV'
    },
    {
        id: 10,
        nama: 'Macan',
        path: 'macan.jpg',
        merek: 'Porsche',
        warna: 'Orange',
        tipe: 'SUV'
    },
    {
        id: 11,
        nama: 'Veyron',
        path: 'veyron.jpg',
        merek: 'Bugatti',
        warna: 'Hitam',
        tipe: 'Sport Car'
    },
    {
        id: 12,
        nama: 'Aventador',
        path: 'aventador-merah.jpg',
        merek: 'Lamborghini',
        warna: 'Merah',
        tipe: 'Sport Car'
    },

  ];

  return (
    <div className="app">
      <header>
        <h1>Zilla Showroom</h1>
      </header>
      <main>
        <CarList cars={cars} />
      </main>
    </div>
  );
}

export default App;



// export const Car = [
//     {
//         id: 1,
//         nama: 'Civic Type R',
//         path: 'civic-type-r.jpg',
//         merek: 'Honda',
//         warna: 'Merah',
//         tipe: 'Sedan'
//     },
//     {
//         id: 2,
//         nama: 'Innova Venture',
//         path: 'innova-venture.jpg',
//         merek: 'Toyota',
//         warna: 'Putih',
//         tipe: 'Mini Bus'
//     },
//     {
//         id: 3,
//         nama: 'APV',
//         path: 'apv.jpg',
//         merek: 'Suzuki',
//         warna: 'Hitam',
//         tipe: 'Mini Bus'
//     },
//     {
//         id: 4,
//         nama: 'M4 Competition',
//         path: 'm4-competition.jpg',
//         merek: 'BMW',
//         warna: 'Biru Tua',
//         tipe: 'Sport Car'
//     },
//     {
//         id: 5,
//         nama: 'S Class 3000',
//         path: 's-class-3000.jpg',
//         merek: 'Mercedes',
//         warna: 'Abu-abu',
//         tipe: 'Sedan'
//     },
//     {
//         id: 6,
//         nama: 'Aventador',
//         path: 'aventador.jpg',
//         merek: 'Lamborghini',
//         warna: 'Kuning',
//         tipe: 'Sport Car'
//     },
//     {
//         id: 7,
//         nama: 'Almaz',
//         path: 'almaz.jpg',
//         merek: 'Wuling',
//         warna: 'Abu-abu',
//         tipe: 'SUV'
//     },
//     {
//         id: 8,
//         nama: 'Sigra',
//         path: 'sigra.jpg',
//         merek: 'Daihatsu',
//         warna: 'Hitam',
//         tipe: 'Mini Bus'
//     },
//     {
//         id: 9,
//         nama: 'Cullinan',
//         path: 'cullinan.jpg',
//         merek: 'Rolls Royce',
//         warna: 'Emas',
//         tipe: 'SUV'
//     },
//     {
//         id: 10,
//         nama: 'Macan',
//         path: 'macan.jpg',
//         merek: 'Porsche',
//         warna: 'Orange',
//         tipe: 'SUV'
//     },
//     {
//         id: 11,
//         nama: 'Veyron',
//         path: 'veyron.jpg',
//         merek: 'Bugatti',
//         warna: 'Hitam',
//         tipe: 'Sport Car'
//     },
//     {
//         id: 12,
//         nama: 'Aventador',
//         path: 'aventador-merah.jpg',
//         merek: 'Lamborghini',
//         warna: 'Merah',
//         tipe: 'Sport Car'
//     },
// ]
