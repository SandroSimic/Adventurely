import catchAsync from "../utils/catchAsync.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import dotenv from "dotenv";
dotenv.config();

const registerUser = catchAsync(async (req, res, next) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    birthDate,
    // profilePicture,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !phoneNumber ||
    !email ||
    !password ||
    !birthDate ||
    !birthDate.month ||
    !birthDate.day ||
    !birthDate.year
  ) {
    return next(new AppError("Please provide all required fields", 400));
  }

  const user = await User.create({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    birthDate,
    // profilePicture,
  });

  res.status(201).json({
    message: "User registered successfully",
    user,
  });
});

const loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide all fields", 400));
  }

  const user = await User.findOne({ email });

  if (!user) {
    return next(new AppError("Invalid credentials", 401));
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new AppError("Invalid credentials", 401));
  }

  generateToken(res, user._id);
  res.status(200).json({
    message: "User logged in successfully",
    user,
  });
});

export { loginUser, registerUser };
