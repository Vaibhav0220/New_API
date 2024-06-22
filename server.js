const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const host = "192.168.109.119"; 

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define route
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));
