require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const webxrRoutes = require('./routes/webxr');

// express app
const app = express()
//middleware
app.use(express.json())
app.use('/',webxrRoutes)

// if we use mongodb 
// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('connected to database')
//     // listen to port
//     app.listen(process.env.PORT || 4000, () => {
//       console.log('listening for requests on port', process.env.PORT || 400);
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//   }) 

//else 
//listen for requests on port 4000

app.listen(process.env.PORT || 4000, () => {
  console.log('listening for requests on port', process.env.PORT || 400);
})