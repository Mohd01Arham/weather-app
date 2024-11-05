// Load environment variables from .env file
require('dotenv').config();
// Import the axios package
const axios = require('axios');

const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // You can choose any port
app.use(express.static(path.join(__dirname, 'public')));



// Define the OpenWeatherMap API base URL
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

// API endpoint to get weather data
app.get('/weather', async (req, res) => {
    const city = req.query.city; // Get city from query parameter

    try {
        const response = await axios.get(baseURL, {
            params: {
                q: city,
                appid: process.env.OPENWEATHER_API_KEY,
                units: 'metric'
            }
        });
        res.json(response.data); // Send the weather data as JSON
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json({ message: 'Error fetching the weather data' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});