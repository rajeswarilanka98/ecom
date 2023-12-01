const express = require("express");
const Router = express.Router();

const orderControllers = require("../controllers/order");

Router.post("/create", orderControllers.orderCreation);
Router.post("/update", orderControllers.orderUpdate);
Router.get("/list", orderControllers.orderList);
Router.post("/search", orderControllers.orderSearch);
Router.delete("/delete", orderControllers.orderDelete);


module.exports = Router;