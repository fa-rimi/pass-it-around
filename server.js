// ! Import the Express.js library - I forgot the first time and it threw an error...
const express = require("express");

// Create an Express application
const app = express();

// Set the port number for the server
const PORT = 3000;

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  // Send a response to the client with a link to start counting the beer bottles
  res.send(
    `99 bottles of beer on the wall <a href='/99'>Take one down, pass it around</a>`
  );
});

// Define a route that takes a number of beer bottles as a parameter
app.get("/:numsOfBottle", (req, res) => {
  // Extract the numsOfBottle parameter from the request URL and parse it as an integer
  const numsOfBottle = parseInt(req.params.numsOfBottle);

  // Calculate the updated quantity of beer bottles
  const update_quantity = numsOfBottle - 1;

  // Check if there are still bottles left
  if (numsOfBottle > 0) {
    // Send a response to the client with the current quantity of beer bottles
    // and a link to continue the countdown
    res.send(
      `${numsOfBottle} bottles of beer on the wall<br>
      Take one down, pass it around<br>
      <a href='/${update_quantity}'>${update_quantity} bottles of beer on the wall</a>`
    );
  } else if (numsOfBottle === 0) {
    // If there are no more bottles left, send a message
    res.send(`Uh-oh, done already?`);
  } else {
    // Edge case: If an invalid input is provided (a negative number), send an error message
    res.send(`Invalid input`);
  }
});

// Start the Express server on the specified port
app.listen(PORT, () => {
  console.log(`Server is now running on localhost:${PORT}`);
});
