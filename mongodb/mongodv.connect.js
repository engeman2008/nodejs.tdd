//

const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://eman:eman@cluster0.oiwnpjt.mongodb.net/todo-tdd?retryWrites=true&w=majority"
    );
    console.log("connected to database");
  } catch (error) {
    console.log("Error connecting to DB");
    console.log(error);
  }
}

module.exports = { connect };
