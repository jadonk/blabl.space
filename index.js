var express = require("express");
const port = 7777;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Starting the server on the 80 port
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});

