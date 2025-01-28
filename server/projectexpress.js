// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = 3000;
// // Serve static files from the 'portfolio' folder
// app.use(express.static(path.join(__dirname, 'portfolio')));
// // Route for the homepage
// app.get('/', (req, res) => {
// res.sendFile(path.join(__dirname, 'portfolio', 'index.html'));
// });
// // Start the server
// app.listen(PORT, () => {
// console.log(`Server is running on http://localhost:${PORT}`);
// });
// import express from 'express';
// import path from 'path';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import { fileURLToPath } from 'url';
// const __filename=fileURLToPath(import.meta.url);
// const __dirname=path.dirname(__filename);
// const app =express();
// app.use(express.json());
// dotenv.config();
// const port=process.env.PORT=3000;
// app.use(function num(req,res,next){
// const secretcode=req.query.secret;
// if(secretcode==='1234')
// {
// req.isAuthorized=true;
// }
// else
// {
// req.isAuthorized=false;
// }
// next();
// });
// app.get("/",(req,res)=>{
// if (req.isAuthorized)
// {
// res.sendFile(path.join(__dirname,"portfolio","index.html"));
// }
// else
// {
// res.send("Unauthorized");
// }
// })
// //******************************************************************
// app.listen(port,()=>{
// console.log(`Server is running on http://localhost:${port}`);
// });


import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT; // Port for the server
const url = process.env.MONGOS_URL; // MongoDB connection URL
console.log('MongoDB URL:', url); // Debugging line

if (!url) {
    console.error('MongoDB connection URL is missing!');
    process.exit(1); // Exit the process if the URL is not defined
}

const app = express();

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
mongoose.connect(url)
    .then(() => {
        // Start the server after successful connection
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((err) => console.error("Connection Failed", err));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "portfolio")));

// Route to serve the port.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "portfolio", "index.html"));
});

