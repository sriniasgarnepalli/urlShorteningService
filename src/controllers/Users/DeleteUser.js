import User from "../../models/User.js";

const deleteUser = async (req, res) => {
  try {
    const user = req.user; // User id received from authMiddleWare

    await User.findByIdAndDelete(user._id);

    res.status(200).json({ message: "User account deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server-error" });
  }
};

export default deleteUser;
