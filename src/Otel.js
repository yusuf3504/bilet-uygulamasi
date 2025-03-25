import React, { useState } from 'react';
import './Otel.css';

export default function Otel() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);
 const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('');
  return (
    <div className="hotel-background">
      <form id="hotel-search" className="hotel-form" autoComplete="off">
        <div className="form-group">
          <label htmlFor="location-input">Nerede</label>
          <input id="location-input" type="text" placeholder="Şehir veya Otel Adı" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="departureDate">Giriş Tarihi</label>
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="returnDate">Çıkış Tarihi</label>
          <input
            type="date"
            id="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Kaç Misafir</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rooms">Kaç Oda</label>
          <input
            type="number"
            id="rooms"
            name="rooms"
            min="1"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className="form-control"
          />
        </div>
        <button id="search-button" className="btn btn-primary" type="submit">
          Otel Ara
        </button>
      </form>
    </div>
  );
}