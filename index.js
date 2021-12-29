var express = require("express");
var path = require('path');

const port = 7777;
const app = express();

app.get("/", (req, res) => {
  res.sendFile('index.html',
    { root: path.join(__dirname, 'files') }
  );
});

app.use(express.static('files'))
app.use(express.static('node_modules/bootstrap/dist'))
app.use(express.static('node_modules/jquery/dist'))

// Starting the server on the 80 port
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});

