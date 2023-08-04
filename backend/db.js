const mongoose = require("mongoose");
const mongoURL =
  "db_url";

async function dbConnect() {
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("connected to db");
    })
    .catch((e) => {
      console.log(e);
    });
}

module.exports = dbConnect;
