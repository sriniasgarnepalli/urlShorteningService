import express from "express";
import registerUser from "../controllers/Users/UserRegistration.js";
import loginUser from "../controllers/Users/UserLogin.js";
import UserLogin from "../middleware/userLogin.js";
import deleteUser from "../controllers/Users/DeleteUser.js";
import protect from "../middleware/authMiddleware.js";
import updateUser from "../controllers/Users/UpdateUser.js";

const userRouter = express.Router();

userRouter.get("/users"); // retrieve list of all users

userRouter.get("/user/:username"); // retrieve user info based on user name

userRouter.post("/user/register", registerUser); // user signup

userRouter.post("/user/login", UserLogin, loginUser); // user login

userRouter.put("/user/update", protect, updateUser); // update user record

userRouter.delete("/user/delete", protect, deleteUser); // delete user record

userRouter.get("*", (req, res) => {
  return res.status(400).send("Not-found");
});

export default userRouter;
