import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';


/* 
* This file is used to configure the application. but this is the older version to configure the application,
* we use latest verion import to configure the application.
    const express = require('express')
    const dotenv = require("dotenv")
*/

const app = express()

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})