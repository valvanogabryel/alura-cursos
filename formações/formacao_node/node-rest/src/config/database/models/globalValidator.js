import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (value) => value.trim() === "",
  message: ({ path }) => {
    return `O campo [${path}] foi fornecido com um valor em branco`;
  },
});
