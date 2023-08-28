const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(
    `99 bottles of beer on the wall <br>
    <a href='/99'>Take one down, pass it around</a>`
  );
});

app.get("/:numsOfBottle", (req, res) => {
  const numsOfBottle = parseInt(req.params.numsOfBottle); // Parse the parameter as an integer
  const update_quantity = numsOfBottle - 1;

  if (numsOfBottle > 0) {
    res.send(
      `${numsOfBottle} bottles of beer on the wall<br>Take one down, pass it around <br><a href='/${update_quantity}'>${update_quantity} bottles of beer on the wall</a>`
    );
  } else if (numsOfBottle === 0) {
    res.send(`Uh-oh, done already?`);
  } else {
    res.send(`Invalid input`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is now running on localhost:${PORT}`);
});
