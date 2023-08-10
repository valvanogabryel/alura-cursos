import { Schema, model } from "mongoose";

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "O nome do(a) autor(a) é obrigatório"],
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
