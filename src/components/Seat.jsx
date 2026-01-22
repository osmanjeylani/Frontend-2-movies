import React, { useState } from "react";

export const Seat = ({ handleCount }) => {
    const [seat, setSeat] = useState(false)

  return (
    <>
      <div className={seat ? "seat selected" : "seat"} onClick={() => {
        handleCount(seat)
        
        setSeat(!seat)
      }}></div>
    </>
  );
};
