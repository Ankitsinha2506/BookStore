import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"


/* 
* This file is used to configure the application. but this is the older version to configure the application,
* we use latest verion import to configure the application.
    const express = require('express')
    const dotenv = require("dotenv")
*/

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI
// Connect to MondoDB
try {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Connected to MongoDB')

} catch (error) {
    console.log('Error connecting to MongoDB' + error)

}

// Defining Routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})