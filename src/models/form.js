import mongoose, { Schema } from "mongoose";

const formSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please fill a valid email address",
      ],
    },
    message: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 500,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.models.Form ||mongoose.model("Form", formSchema);

export default Form;
