const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser middleware for parsing URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for handling GET requests and rendering the HTML form
app.get('/form', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>GET Form</title>
      </head>
      <body>
        <h1>GET Form</h1>
        <form action="/submit" method="post">
          <label for="data">Data:</label>
          <input type="text" name="data">
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

// Define a route for handling POST requests
app.post('/submit', (req, res) => {
  const receivedData = req.body.data;
  console.log('Received data:', receivedData);

  res.send('Data received successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ` + port);
});
