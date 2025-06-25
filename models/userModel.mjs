import mongoose from "mongoose";
// User schema (blueprint)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  age: { type: Number, required: true }
});

// Export model
const User = mongoose.model("Users", userSchema);

export {
  User
}