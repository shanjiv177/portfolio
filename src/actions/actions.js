"use server";
import connectToDatabase from "../lib/db.js";
import Form from "../models/form.js";

export async function submitContactForm(currState, formData) {
  "use strict";

  try {

    console.log(formData);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return { success: false, err: "All fields are required.", name, email, message };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { success: false, err: "Invalid email address.", name, email, message};
    }

    await connectToDatabase();

    await Form.create({
      name,
      email,
      message,
    })

    return { success: true, err: null };
  } catch (error) {
    return { success: false, err: error.message || "An error occurred." };
  }
}