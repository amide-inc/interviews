const express =  require('express');
const authRoute = require('./router/auth-route');
const userRoute = require('./router/user-route');
const app = express()
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.port || 8080
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
mongoose.connect(
    "mongodb+srv://amide:root@e-comm-app-db.p0hwj.mongodb.net/ag-data",
    (err) => {
        if(err) {
            console.log("connection issues")
        }else{
            console.log("DB connected")
        }
    }
    )
app.get('/', (req, res) => {
    res.send('Welcome to ANTARTIC Global')
})
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.listen(port, () => {
    console.log("server connected with port " + port )
})