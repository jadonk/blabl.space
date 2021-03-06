var express = require("express");
var path = require('path');

const port = 7777;
const app = express();

app.get("/", (req, res) => {
  res.sendFile('index.html',
    { root: path.join(__dirname, 'files') }
  );
});

const codes = {
  "code-1": "asdf",
  "code-2": "qwerty",
};

app.use(express.static('files'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/jquery/dist'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/post", (req, res) => {
  req.body.unlocked = (codes[req.body.lock] == req.body.code);
  console.log("code: %s, post: %j",  codes[req.body.lock], req.body);
  res.json(req.body);
});

// Starting the server on the 80 port
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});

