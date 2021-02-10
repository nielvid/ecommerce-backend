const express = require("express");
const app = express();
const path = require("path");

const Router = require("./routes/Router");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
// const session = require("express-session");
// const MongoDBStore = require("connect-mongodb-session")(session);

dotenv.config();
app.use(express.json());

const corsOptions = {
  origin: "https://localhost:3000"
};
app.use(cors(corsOptions));
app.use(helmet());

app.use(express.static(path.join(__dirname, "/uploads")));
/*
const store = new MongoDBStore({
  uri: process.env.MONGO_LOCAL,
  collection: "products"
});

app.use(session({
  secret: "secret token",
  resave: false,
  saveUninitialized: true,
  unset: "destroy",
  store: store,
  name: "session cookie name",
  genid: (req) => {
    // Returns a random string to be used as a session ID
  }
}));
*/
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
