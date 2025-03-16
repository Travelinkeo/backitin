const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para servir los datos de aerolíneas
app.get('/itinerary/airlines', (req, res) => {
  console.log('Solicitud recibida para /itinerary/airlines');
  const filePath = path.join(__dirname, 'airlines.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Error al leer los datos de aerolíneas' });
    res.json(JSON.parse(data));
  });
});

// Ruta para servir los datos de aeropuertos
app.get('/itinerary/airports', (req, res) => {
  console.log('Solicitud recibida para /itinerary/airports');
  const filePath = path.join(__dirname, 'airports.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Error al leer los datos de aeropuertos' });
    res.json(JSON.parse(data));
  }); 
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});