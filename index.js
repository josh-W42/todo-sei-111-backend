// imports
const express = require('express');

const port = process.env.PORT || 4000;
const app = express();

// middleware - JSON parsing
app.use(express.json());


// middleware - API routes
app.get('/', (req, res) => {
  res.send('hello')
})


// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));
