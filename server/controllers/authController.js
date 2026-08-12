import genToken from "../config/token.js";
import User from "../models/userModel.js";

export const googleAuth = async (req, res) => {
  try {
    const {name, email} = req.body;
    let user = await User.findOne({ email });

    if(!user) {
      user = await User.create({ name, email });
    }

    let token = await genToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 hours
    })

    return res.status(200).json({ message: "Google authentication successful", user });
  }

  catch (error) {
    console.error("Error during Google authentication:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

export const logout = async (req, res) => {
  try {
    await res.clearCookie("token");
    return res.status(200).json({ message: "Logout successful" });
  }
  catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}