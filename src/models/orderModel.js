const mongoose = require("mongoose");


const orderSchema = mongoose.Schema({

    order_id : {
        type : String,
        required: true
    },
    item_name : {
        type: String,
        required: true
    },
    cost : {
        type: String,
        required: true
    },
    order_date : {
        type: String,
        required: true
    },
    delivery_date: {
        type: String,
    }


}, {timestamps : true});


const Order = mongoose.model('Order', orderSchema);

module.exports= Order;
