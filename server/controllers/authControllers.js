import User from "../model/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "user is already registered , plaese login",
      });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({ name, email, password: hashPassword });
    res.status(201).json({
      data: newUser,
      message: "register successfully",
    });
  } catch (error) {
    next(error);
  }
};
