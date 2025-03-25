import React, { useState } from 'react';
import './Tekne.css';

export default function Tekne() {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [passengers, setPassengers] = useState(1);

  return (
    <div className="background">
      <form id="search" className="sea js" autoComplete="off">
        <div className="check-way">
          <label className="radio">
            <input type="radio" name="way" id="one-way" className="active" />
            <span>Tek Yön</span>
          </label>
          <label className="radio">
            <input type="radio" name="way" id="two-way" />
            <span>Gidiş-Dönüş</span>
          </label>
        </div>
        <div className="locations">
          <div className="origin location group">
            <div className="input-group">
              <label className='yazılar' htmlFor="origin-input">Nereden</label>
              <select id="origin" name="origin" className="form-control">
                <option value="istanbul">İstanbul</option>
                <option value="yalova">İzmir</option>
                <option value="bursa">Antalya</option>
              </select>
            </div>
          </div>
          <div className="destination location group">
            <div className="input-group">
              <label className='yazılar' htmlFor="destination-input">Nereye</label>
              <select id="destination" name="destination" className="form-control">
                <option value="istanbul">İstanbul</option>
                <option value="yalova">Yalova</option>
                <option value="bursa">Bursa</option>
              </select>
            </div>
          </div>
          <div className="form-group">
                    <label className='yazılar' htmlFor="departureDate">Gidiş Tarihi</label>
                    <input
                        type="date"
                        id="departureDate"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className='yazılar' htmlFor="returnDate">Dönüş Tarihi</label>
                    <input
                        type="date"
                        id="returnDate"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                    />
                </div>
          <div className="details group">
            <div className="input-group">
              <label className='yazılar' htmlFor="passengers">Yolcu Sayısı</label>
              <input
                type="number"
                id="passengers"
                name="passengers"
                min="1"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className='button-tk'  >
        <button id="search-button" className="button-tk" type="submit">
          Tekne Ara
        </button>
        </div>
      </form>
    </div>
  );
}
