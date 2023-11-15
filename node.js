const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS)
app.use(express.static('public'));

// Render the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/admission.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    // Process the form data here (save to a database, etc.)
    console.log(req.body);
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});