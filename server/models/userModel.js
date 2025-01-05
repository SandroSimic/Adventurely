import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide an first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide an last name"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: [true, "Email already exists"],
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [6, "Password must be at least 6 characters long"],
      validate: {
        validator: function (value) {
          return /[A-Z]/.test(value);
        },
        message: "Password must contain an uppercase letter",
      },
    },
    phoneNumber: {
      type: String,
      required: [true, "Please provide a phone number"],
      validate: {
        validator: function (value) {
          return /^[+]?[0-9]{10,15}$/.test(value);
        },
        message: "Please provide a valid phone number (e.g., +1234567890)",
      },
    },
    birthDate: {
      month: {
        type: Number,
        required: [true, "Please provide a month"],
        min: [1, "Month must be between 1 and 12"],
        max: [12, "Month must be between 1 and 12"],
      },
      day: {
        type: Number,
        required: [true, "Please provide a day"],
        min: [1, "Day must be between 1 and 31"],
        max: [31, "Day must be between 1 and 31"],
      },
      year: {
        type: Number,
        required: [true, "Please provide a year"],
      },
    },
    profilePicture: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  if (!this.password) {
    return false;
  }
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
