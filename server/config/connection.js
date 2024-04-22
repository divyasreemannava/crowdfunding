const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://navyatelugu:cherry123@cluster1.vj1dj4j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    sslValidate: true, // Enable SSL certificate validation
  }
);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("MongoDB connected successfully");
});

module.exports = db;
