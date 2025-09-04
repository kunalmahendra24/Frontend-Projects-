const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('✅ Backend is working!');
});
// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const logRoutes = require('./routes/logRoutes');
app.use('/api/logs', logRoutes); // <-- Important

// Connect MongoDB and start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
  
  