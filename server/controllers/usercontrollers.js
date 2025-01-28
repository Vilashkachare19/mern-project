import User from "../models/usermodels.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    if (!userData) {
      res.status(404).json({ msg: "User not Found" });
    }
    await userData.save();
    res.status(200).json({ msg: "User got created successfully." });
  } catch (error) {
    res.status(500).json({ err: error });
  }
}


export const getAll =  async (req,res)=>{
    try { 
        const userData= await User.find();
    if(!userData){res.status(404).json({msg:"User not found"});
    }
    res.status(200).json(userData);
    }

catch(error){
    res.status(500).json({err:error})
    }
}

export const findUserById = async(req,res)=> {
    try{
         const userid= req.params.id;
 
      const userData= await User.findById(userid);
      
      if(!userData){
         res.status(404).json({message:"User not found."});
        }
        res.status(200).json(userData);
     }
      catch(error){
        res.status(500).json({err:error});
     }
       
 }

 export const updateUser = async(req,res)=>{
    try{
         const userid= req.params.id;
 
      const userExist= await User.findById(userid);
      
      if(!userExist){
         res.status(404).json({message:"User not found."});
        } 
        const updatedata= await User.findByIdAndUpdate(userid,req.body,{new:true});
        res.status(200).json({msg:"User has been updated succesfully"});
     }
      catch(error){
        res.status(500).json({err:error});
     }       
 }

 export const DeleteUser = async(req,res)=>{
  try{
       const userid= req.params.id;

    const  userData= await User.findById(userid);
    
    if(!userData){
       res.status(404).json({message:"User not found."});
      }
      const deleteData = await User.findByIdAndDelete(userid);
      res.status(200).json({msg:"User Deleted Successfully"});
   }
    catch(error){
      res.status(500).json({err:error});
   }
}


// Register
export const register = async (req, res) => {
   try {
       const { name, email, password, age } = req.body;
       if (!name || !email || !password || !age) {
           return res.status(404).json({ message: "All fields are required" });
       }
 
       // Hash
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);
       const newUser = new User({ name, email, password: hashedPassword, age });
       await newUser.save();
       res.status(200).json({ message: "User registered successfully" });
   } catch (error) {
       res.status(500).json({ message: "Internal Server Error" });
   }
 };

 //login
export const login = async (req, res) => {
   try {
     const { email, password } = req.body;
 
     // Check if email and password are provided
     if (!email || !password) {
       return res.status(400).json({ message: "All fields are required" });
     }
 
     // Check if user exists
     const user = await User.findOne({ email });
     if (!user) {
       return res.status(404).json({ message: "User not found" });
     }
 
     // Compare passwords
     const isMatch = await bcrypt.compare(password, user.password);
     if (!isMatch) {
       return res.status(401).json({ message: "Invalid credentials" });
     }
 
     // Generate JWT token
     const token = jwt.sign(
       { id: user._id },
       process.env.JWT_SECRET,
       { expiresIn: process.env.JWT_EXPIRES_IN }
     );
 
     // Save token to the user record
     user.token = token;
     await user.save();
 
     // Send response with token and user details
     res.status(200).json({
       token,
       user: {
         id: user._id,
         name: user.name,
         email: user.email,
         age: user.age
       }
     });
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: "Invalid or no token" });
   }
 };

 export const logout= async(req,res)=>{

  try{
     const user=await User.findById(req.user.id);
     if(!user)
     {
        return res.status(404).json({msg:"User Not Found"});
     }

     user.token="";
     
     await user.save();

     res.status(200).json({msg:"Logout Successfully"});

  }
  catch(err)
  {
     res.status(500).json({msg:err.message});
  }
};