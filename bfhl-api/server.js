const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bfhlRoutes = require('./routes/bfhlRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/', bfhlRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('BFHL API is running...');
});

// For Vercel (no listen here)
module.exports = app;

// If running locally
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
