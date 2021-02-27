// imports
require('dotenv').config()
const express = require('express');
const routes = require('./routes');

const port = process.env.PORT || 4000;
const app = express();

// middleware - JSON parsing
app.use(express.json());


// middleware - API routes
app.get('/', (req, res) => {
  res.send('hello')
})
app.use('/todos', routes.todos)


// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));
