const express = require('express');
const messageRoutes = require('./routes/messageRoutes');

const app = express();

app.use(express.json());

// Root route for GET /
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Routes for /api/message
app.use('/api/message', messageRoutes);

module.exports = app;
