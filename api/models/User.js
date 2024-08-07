import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create a User model based on the schema
const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
