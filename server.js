require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/restakers', require('./routes/restakers'));
app.use('/validators', require('./routes/validators'));
app.use('/rewards', require('./routes/rewards'));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
