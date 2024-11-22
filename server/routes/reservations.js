

const express = require('express');
const Reservation = require('../models/Reservation');  // Asegúrate de tener el modelo de reserva actualizado
const router = express.Router();

// Ruta para crear una nueva reserva
router.post('/reserve', async (req, res) => {
  const { selectedTour, selectedDate, selectedTime, numberOfPeople, email } = req.body;

  try {
    // Crear la nueva reserva con los datos enviados en el cuerpo
    const newReservation = new Reservation({
      selectedTour,
      selectedDate,
      selectedTime,
      numberOfPeople,
      email,  // Guardamos el email en la reserva
    });

    // Guardar la reserva en la base de datos
    await newReservation.save();

    // Responder con la reserva confirmada
    res.status(201).json({ message: 'Reservation confirmed', reservation: newReservation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while making the reservation' });
  }
});

module.exports = router;
