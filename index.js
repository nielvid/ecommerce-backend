const express = require("express");
const app = express();
const path = require("path");

const Router = require("./routes/Router");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());

const corsOptions = {
  origin: "https://localhost:3000"
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "/uploads")));

mongoose.connect(process.env.MONGO_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) throw err;
  console.log("Connected to database");
});

app.use("/api/v1", Router);
/*
// serve build if on production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('store/build'))

  // get anything, load index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'store', 'build', index.html))
  })
}
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started ${PORT}`);
});
