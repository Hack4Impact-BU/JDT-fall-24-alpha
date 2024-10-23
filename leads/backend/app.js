const express = require('express'); // import express
const cors = require('cors'); // import cors
const bodyParser = require('body-parser'); // import body-parser
const app = express(); // create an express app

app.use(cors()); // allow for cross-origin requests
app.use(bodyParser.json()); // parse JSON data

const PORT = 4000; // specify a port

// This is a POST route
app.post('/chat' // this is your route endpoint
        , (req, res) => { // this is your route handler callback function
    
    const userMessage = req.body.userMessage; // get the user's message from the request body
    if (!userMessage) return;
    
    res.json({
        message: 'Hello, my name is Your Name. I am a student at Boston University.'
    })
})

// Tell the app to start listening on the specified port
app.listen(PORT, () => {
    // This callback function will run when the server starts
    console.log(`Server is running on port ${PORT}`);
})