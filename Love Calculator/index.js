const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Use body-parser middleware for parsing URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Define route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Define route for the Love Calculator form
app.get('/love-calculator', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'love-calculator.html'));
});

// Define route for handling Love Calculator submissions
app.post('/calculate-love', (req, res) => {
    const name1 = req.body.name1;
    const name2 = req.body.name2;

    const loveScore = Math.floor(Math.random() * 100); // Random love score
    const result = "The love between " + name1 + " and " + name2 + " is " + loveScore + "%";

    console.log('Love Calculator Result:', result);

    res.send(`
    <html>
      <head>
        <title>Love Calculator Result</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Love Calculator Result</h1>
        <p>${result}</p>
      </body>
    </html>
  `);
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ` + port);
});
