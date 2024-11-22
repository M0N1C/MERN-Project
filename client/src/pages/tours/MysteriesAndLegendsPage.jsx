import React, { useState } from "react";
import BookingForm from "../../components/BookingForm";

function MysteriesAndLegendsPage() {
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
    setIsBooking(false);
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Mysteries and Legends Tour</h1>
      <img
        src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/13/2b/f2/a8.jpg"
        alt="Mysteries and Legends Tour"
        className="w-full h-64 object-cover mb-6"
      />
      <p className="text-gray-600 mb-4">
        Uncover the hidden mysteries of Berlin. From haunted locations to dark historical stories, this tour takes you on a thrilling adventure.
      </p>
      <h2 className="text-2xl font-semibold text-gray-900">Schedule</h2>
      <ul className="text-gray-600 mb-4">
        <li>Monday - Friday: 7:00 PM, 9:00 PM</li>
        <li>Saturday - Sunday: 8:00 PM</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-900">Meeting Point</h2>
      <p className="text-gray-600 mb-4">Meet at Hackescher Markt, 10178 Berlin</p>
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

      {isBooking && (
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-6">Complete your booking</h2>
          <BookingForm
            tourTitle="Mysteries and Legends"
            availableDates={availableDates}
            onBook={handleBooking}
          />
        </div>
      )}
    </div>
  );
}

export default MysteriesAndLegendsPage;
