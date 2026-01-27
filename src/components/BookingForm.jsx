import React from 'react'

export const BookingForm = () => {
  return (
    <form>
        <label htmlFor="Name">Namn: </label>
        <input type="text" name='Name' id='Name' />
        <label htmlFor="Phone">Telefonnummer: </label>
        <input type="text" name="Phone" id="Phone" />
    </form>
  )
}
