const mongoose = require("mongoose");

//connection creation and creation a new db
mongoose.connect("mongodb://127.0.0.1:27017/olympics")
.then(() => console.log("connection Sucessfull...."))
.catch((err) => console.log(err));

