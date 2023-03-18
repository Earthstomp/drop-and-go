const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 6003;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(require("./routes/listing"));
app.use(require("./routes/user"))
app.use(require("./routes/provider"))
app.use(require("./routes/booking"))

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
