const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')

const router = require("../routes/index")

const app = express();

//connect app to database
//use catch to check for connection error
mongoose
  .connect("mongodb://localhost/poocInventory", { useNewUrlParser: true })
  .then(() => {
    console.log("connected to db");
  })
  .catch(err => {
    console.log(err);
  });

//app body parser
app.use(express.json())

app.use(cors())
//use routes
app.use('/', router)

//listen to app port
app.listen(4000, function() {
  console.log("application runnning on port 4000");
});
