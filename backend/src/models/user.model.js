import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// 🔑 Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10); // 10 rounds is standard
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    return next(err);
  }
});

// 🔑 Method to compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  console.log("Type of enteredPassword:", typeof enteredPassword, "value:", enteredPassword);
  console.log("Type of stored password:", typeof this.password, "value:", this.password);

  return await bcrypt.compare(String(enteredPassword), this.password);
};


const User = mongoose.model("User", userSchema);
export default User;
