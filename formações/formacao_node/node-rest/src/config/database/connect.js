import { config } from "dotenv";
config();
import mongoose from "mongoose";

const username = process.env.MONGODB_URI_USERNAME;
const password = process.env.MONGODB_URI_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0.6cbuths.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);

mongoose.connect(uri);

const db = mongoose.connection;

export default db;
