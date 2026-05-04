require('dotenv').config();
const express = require('express');
const cors = require('cors');
const measurementController = require('./controllers/measurementController');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/measurements', measurementController.analyze);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', service: 'dishdasha-backend' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
