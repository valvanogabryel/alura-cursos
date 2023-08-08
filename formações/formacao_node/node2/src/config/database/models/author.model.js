import { Schema, model } from "mongoose";

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

const AuthorsModel = model("Authors", AuthorSchema);

export default AuthorsModel;
