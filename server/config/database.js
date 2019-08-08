const mongoose = require("mongoose");

const DB_CONNECTION = "mongodb://127.0.0.1:27017/khonvo_challenge";

const connect = () => {
  mongoose.connect(
    DB_CONNECTION,
    { useNewUrlParser: true },
    (err, database) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

module.exports = { connect };
