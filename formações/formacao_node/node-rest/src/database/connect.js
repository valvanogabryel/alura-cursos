import mongoose from "mongoose";

const username = process.env.MONGODB_URI_USERNAME;
const password = process.env.MONGODB_URI_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0.6cbuths.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri);

mongoose.connect(uri);
