import mongoose from "mongoose";

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0.6cbuths.mongodb.net/`;

const connectToDatabase = async () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(uri, (error) => {
    if (error) {
      return console.log(`error connecting to database: ${error.message}`);
    }
    console.log("Connected to database");
  });
};

export default connectToDatabase;
