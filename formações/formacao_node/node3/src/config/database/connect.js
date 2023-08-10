import mongoose from "mongoose";

const uri = process.env.DB_CONNECTION_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

export default db;
