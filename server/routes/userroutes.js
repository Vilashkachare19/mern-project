// 





import express from "express";
import auth from "../middleware/auth.js";
import { createUser, getAll, findUserById, updateUser, DeleteUser,register,login,logout} from "../controllers/usercontrollers.js";

const route = express.Router();

// Routes
route.post("/create",createUser); // Create a new user
route.get("/getall",getAll); // Get all users
route.get("/finduser/:id", auth,findUserById); // Find user by ID
route.put("/update/:id",auth, updateUser); // Update user by ID
route.delete("/delete/:id", auth,DeleteUser);
route.post("/register",register);
route.post("/login",login);
route.post("/logout", auth,logout);
export default route;
