import mongoose from "mongoose";

const MONGODB_USERNAME = "admin";
const MONGODB_PASSWORD = "gabryelval123";

const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.6cbuths.mongodb.net/node`;

mongoose.set("strictQuery", false);

mongoose.connect(uri);

const db = mongoose.connection;

export default db;
