const mongoose = require("mongoose");

const uri = "mongodb+srv://kazimkhan474_db_user:Kazimkhan9980@innomine.9spgi7t.mongodb.net/?appName=Innomine";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Connection Failed");
    console.error(err);
    process.exit(1);
  });