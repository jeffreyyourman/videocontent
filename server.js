const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

app.get("/api/json", async (req, res) => {
  res.json({ response: 'this is our first api call!' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
