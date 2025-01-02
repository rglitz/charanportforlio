const express = require('express');
const app = express();
const cors = require('cors'); // Optional if you want to enable CORS
const routes = require('./src/routes');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
