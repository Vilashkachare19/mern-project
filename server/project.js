// PROGRAM : 1

// const http = require("http");

// const server =http.createServer((req, res) => {
//     if(req.method=== 'GET' && req.url==='/vilash'){

// res.writeHead(200,{'Content-Type':'text/plain'}) 
// res.end("Hello Everyone:!!");
// }else{
//     res.writeHead(404,{'Content-Type': "text/plan"})
//     res.end("Not Found");
// }      
// });

// server.listen(3000,()=>{
//     console.log("Server is running on http://localhost:3000")
// })

// --------------------------------------------------------------

// PROGRAM : 2 

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import route from './routes/userroutes.js';
import route from './routes/userroutes.js';
import cors from 'cors';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL;

// Built-in body parsing middleware (replaces body-parser)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Log the PORT to verify
console.log(`Port: ${PORT}`);

// Basic GET Route
app.get("/", (req, res) => {
  res.send("Hello");
});

// Connect to MongoDB
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("DB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Connection Failed:", err);
  });

// Use routes middleware
app.use('/api', route);