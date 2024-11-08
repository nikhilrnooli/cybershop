const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb://localhost:27017/");
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
