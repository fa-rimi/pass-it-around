// ! i forgot to npm i express and it threw an error
const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("aha!")
});

app.listen(PORT, (req, res) => {
    console.log(`Server is now running on localhost:${PORT}`);
});
