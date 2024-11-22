import React, { useState, useEffect } from "react";

function BookingForm({ tourTitle, availableDates, onBook }) {
  const [selectedTour, setSelectedTour] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedDate, setSelectedDate] = useState(availableDates[0]?.date || "");
  const [selectedTime, setSelectedTime] = useState(availableDates[0]?.times[0] || "");

  // Establecer el tour inicial al montar el componente
  useEffect(() => {
    if (tourTitle) {
      setSelectedTour(tourTitle);  // Usamos el tourTitle recibido como propiedad
    }
  }, [tourTitle]);

  const tourOptions = [
    "Historical Center",
    "Cold War",
    "Street Art and Berlin Alternative",
    "Parks and Gardens",
    "Mysteries and Legends",
    "Potsdam and Sanssouci Palace",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      selectedTour,
      numberOfPeople,
      selectedDate,
      selectedTime,
    };
    onBook(bookingDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Selector de Tour */}
      <div>
        <label htmlFor="selectedTour" className="block text-gray-700">Select Tour</label>
        <select
          id="selectedTour"
          value={selectedTour}
          onChange={(e) => setSelectedTour(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        >
          {tourOptions.map((tour) => (
            <option key={tour} value={tour}>
              {tour}
            </option>
          ))}
        </select>
      </div>

      {/* Número de personas */}
      <div>
        <label htmlFor="numberOfPeople" className="block text-gray-700">Number of People</label>
        <input
          type="number"
          id="numberOfPeople"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
          min="1"
          className="w-full p-2 border rounded mt-1"
        />
      </div>

      {/* Selección de Fecha */}
      <div>
        <label htmlFor="date" className="block text-gray-700">Select Date</label>
        <select
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        >
          {availableDates.map((date) => (
            <option key={date.date} value={date.date}>
              {date.date}
            </option>
          ))}
        </select>
      </div>

      {/* Selección de Hora */}
      <div>
        <label htmlFor="time" className="block text-gray-700">Select Time</label>
        <select
          id="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        >
          {availableDates
            .find((date) => date.date === selectedDate)
            ?.times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
        </select>
      </div>

      {/* Botón de confirmación */}
      <button
        type="submit"
        className="px-8 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black font-semibold rounded hover:from-pink-500 hover:to-orange-400 transition-all"
      >
        Confirm Booking
      </button>
    </form>
  );
}

export default BookingForm;

