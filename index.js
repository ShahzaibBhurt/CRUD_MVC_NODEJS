const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const UserRoute = require('./routes/userRoute')
const app = express();

app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json())

app.use('/users', UserRoute)

app.listen(3000, ()=>{
    console.log("Your App is running on port 3000")
})