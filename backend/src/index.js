// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registrationRoutes = require('./routes/registration');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mean-stack', {
});

app.use('/api', registrationRoutes);

app.listen(3000, () => console.log('Server running on port 4000'));
