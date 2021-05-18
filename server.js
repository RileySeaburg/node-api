// Bring in express
import express from 'express'
import dotenv from 'dotenv'


// Load environment variables
dotenv.config({ path: './config/config.env' })

// Initialize express application
const app = express()

// Assign port to the environment variable or 3000
const PORT = process.env.PORT || 3000

// Start application
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))