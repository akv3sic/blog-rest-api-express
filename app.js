const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

// Middlewares
/*
app.use('/posts', () => {
    console.log('This is a middleware example')
})
*/
app.use(cors())
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json())

// ROUTES

// import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

app.get('/', (req, res) => {
    res.send('We are on home')
})


// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
{ useNewUrlParser: true,
useUnifiedTopology: true },
() => {console.log('conncected to DB')
})

// Start listening
app.listen(process.env.PORT, () => { console.log(`Running at http://localhost:${process.env.PORT}`) })