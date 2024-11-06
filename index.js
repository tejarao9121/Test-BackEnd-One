// Import Express
const express = require('express');

// Initialize Express app
const app = express();

// Define a simple GET route
app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello, World!' });
});
require('dotenv').config();
// Start the server
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
