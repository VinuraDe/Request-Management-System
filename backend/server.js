const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/DB');
const requestRoutes = require('./routes/requestRoutes');
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: "http://localhost:5173"
  }));
app.use(express.json());

app.use('/api', requestRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
