const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bfhlRoutes = require('./routes/bfhlRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', bfhlRoutes);

app.get('/', (req, res) => {
  res.send('BFHL API is running...');
});

// Export for Vercel
module.exports = app;

// Only listen when running locally
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
