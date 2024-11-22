// src/pages/tours/HistoricalPage.jsx
import React, { useState } from "react";
import BookingForm from "../../components/BookingForm";

function HistoricalPage() {
  const [isBooking, setIsBooking] = useState(false);

  const availableDates = [
    {
      date: "2024-12-01",
      times: ["10:00 AM", "2:00 PM", "5:00 PM"],
    },
    {
      date: "2024-12-02",
      times: ["11:00 AM", "3:00 PM", "6:00 PM"],
    },
    {
      date: "2024-12-03",
      times: ["9:00 AM", "1:00 PM", "4:00 PM"],
    },
  ];

  const handleBooking = (bookingDetails) => {
    console.log("Booking details: ", bookingDetails);
    alert(`Booking confirmed for ${bookingDetails.numberOfPeople} people on ${bookingDetails.selectedDate} at ${bookingDetails.selectedTime}`);
    setIsBooking(false); // Cerrar el formulario después de la confirmación
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Historical Center Tour</h1>
      <img
        src="https://c.pxhere.com/photos/ae/4d/berlin_brandenburg_gate_quadriga_building_goal-748077.jpg!d"
        alt="Historical Center"
        className="w-full h-64 object-cover mb-6"
      />
      <p className="text-gray-600 mb-4">
        Explore Berlin's historical landmarks including Brandenburg Gate, the Reichstag, and more.
      </p>
      <h2 className="text-2xl font-semibold text-gray-900">Schedule</h2>
      <ul className="text-gray-600 mb-4">
        <li>Monday - Friday: 10:00 AM, 2:00 PM</li>
        <li>Saturday - Sunday: 11:00 AM</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-900">Meeting Point</h2>
      <p className="text-gray-600 mb-4">Meet at Brandenburg Gate, in front of the main entrance.</p>
      <h2 className="text-2xl font-semibold text-gray-900">Available Months</h2>
      <p className="text-gray-600">Tours are available year-round, except during major holidays.</p>

      <div className="mt-8">
        <button
          onClick={() => setIsBooking(true)}
          className="px-8 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black font-semibold rounded hover:from-pink-500 hover:to-orange-400 transition-all"
        >
          Book Now
        </button>
      </div>

      {/* Mostrar el formulario solo cuando isBooking es true */}
      {isBooking && (
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-6">Complete your booking</h2>
          <BookingForm
            tourTitle="Historical Center"
            availableDates={availableDates}
            onBook={handleBooking}
          />
        </div>
      )}
    </div>
  );
}

export default HistoricalPage;

