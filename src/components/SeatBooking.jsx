import React, { useState } from 'react';
import '../styles/SeatBooking.css';

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const A = Array.from({length: 24}, (_, i) => `A${i + 1}`);
  const B = Array.from({length: 24}, (_, i) => `B${i + 1}`);

  console.log(selectedSeats);
  const isSeatSelected = (seat) => {
    return selectedSeats.includes(seat);
  };

  const handleClick = (seat) => {
    if (isSeatSelected(seat)) {
      setSelectedSeats(selectedSeats.filter(selected => selected !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const renderSeat = (seat) => {
    const selected = isSeatSelected(seat) ? 'selected' : '';
    const className = `seat ${selected}`;
    return (
      <div key={seat} className={className} onClick={() => handleClick(seat)}>
        {seat}
      </div>
    );
  };

  const renderRow = (seats) => {
    return (
      <div className="row">
        {renderSeat(seats[0])}
        {renderSeat(seats[1])}
        <div className="margin"></div>
        {renderSeat(seats[2])}
        {renderSeat(seats[3])}
      </div>
    );
  };

  const renderRows = () => {
    let rows = [];
    for (let i = 0; i < A.length; i += 4) {
      rows.push(
        <React.Fragment key={i}>
          {renderRow([A[i], A[i + 1], B[i], B[i + 1]])}
          {renderRow([A[i + 2], A[i + 3], B[i + 2], B[i + 3]])}
        </React.Fragment>
      );
    }
    return rows;
  };

  return (
    <div className="seat-booking">
      {renderRows()}
    </div>
  );
};


export default SeatBooking;
