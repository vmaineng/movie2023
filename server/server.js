//getting global obj from .env file
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movies");

//creating express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//route handler
app.use("/api/movies", movieRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
