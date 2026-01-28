import { useState } from 'react'

export const BookingForm = ({ onClose }) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const booking = {
      name,
      phone
    };

    await  fetch("http://localhost:3001/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(booking)
    });

    alert("🎉 Bokningen är bekräftad!");
    onClose();

    setName("");
    setPhone("");
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Namn</label>
      <input
      id="name"
      name="name"
      type="text"
      required
      value={name}
      onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="phone">Telefonnummer</label>
      <input
      id="phone"
      name="phone"
      type="tel"
      required
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">Bekräfta bokning</button>
    </form>

  );
};


{/* <form>
        <label htmlFor="Name">Namn: </label>
        <input type="text" name='Name' id='Name' />
        <label htmlFor="Phone">Telefonnummer: </label>
        <input type="text" name="Phone" id="Phone" />
    </form> */}