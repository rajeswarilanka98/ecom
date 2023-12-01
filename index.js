const express = require("express");
const app = express();

const orderRouter = require("./src/routes/orderRoutes");

const dotenv = require("dotenv");

const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();
require("dotenv").config();
const { MONGODB } = require('./config');

mongoose.connect('mongodb://localhost:27017/ecom');
const db=mongoose.connection
try{
    console.log("db connected");

}catch{
    console.log("error")
}
app.use(express.json());
app.use(cors());

app.use("/orders", orderRouter );

app.get("/", (req, res) =>{
    res.send("Running Fine");
});

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('connected to mongodb');
return app.listen(3300);
})
.then(() => console.log('server running at 3300'))
.catch(err => console.log(err.message));


