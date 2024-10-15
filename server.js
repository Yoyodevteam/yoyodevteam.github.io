const express = require('express');
const path = require('path');

const app = express();

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route for Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for Purple banner page
app.get('/bannerpurple', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bannerpurple.html'));
});

// Route for Blue banner page
app.get('/bannerblue', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bannerblue.html'));
});

// Start the server
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
