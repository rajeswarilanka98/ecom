const orderModel = require ("../models/orderModel");
const express = require ("express");
const { errorResponse } = require ("../helpers/messages");


let orderController = {
    //order creation 
    async orderCreation(req, res, next) {
      try{
        let {order_id,item_name,cost,order_date,delivery_date} = req.body;
        await orderModel.create({order_id,item_name,cost,order_date,delivery_date})
        .then((datas) =>{
          return res.status(200).json({
            responseCode: 200,
            output: datas
          })
        })
        .catch((error) => {
          console.log('1',error)
          return errorResponse(req, res, "order creation failed");
        });
      } catch (error) {
        return next(error);
      }
    },

    //order update
    async orderUpdate(req, res, next) {
      try{
        let {order_id,order_date} = req.body;
        await orderModel.findOneAndUpdate(
          {order_id},{order_date:order_date}
          ).then(datas =>{
            return res.status(200).json({
              responseCode: 200
            })
          }).catch(err => {
            console.log(err,"err..")
            return errorResponse(req, res, "failed to update order");
            // return res.status(400).json({
            //   responseCode: 400,
            //   errorMessage:"failed to update order"
            // })
        });
      } catch (error) {
        logger.errorLogger(` api Error - ${error}`);
        return next(error);
      }
    },

    //order list
    async orderList(req, res, next) {
      try{
        await orderModel.find({order_date: req.body.order_date})
        .then(datas =>{
          return res.status(200).json({
            responseCode: 200,
            output: datas, 
          })
        }).catch((error) => {
          console.log(error);
          return errorResponse(req, res, "failed to get order list");
        });
      } catch (error) {
        return next(error);
      }
    },

    //order search
    async orderSearch(req, res, next ) {
      try{
        const orderData = await orderModel.findOne({ order_id: req.body.order_id });
        if(!orderData) {
          return errorResponse(req, res, "failed to get order search");
      }else{
            return res.status(200).json({
                responseCode: 200,
                output: orderData
            })
      }
    } catch (error) {
      return next(error);
    }
    },

    //order delete
    async orderDelete(req, res, next ) {
      try{
        const orderDelete = await orderModel.findOneAndDelete({ order_id: req.body.order_id });
        if(orderDelete) {
          res.status(200).json({ message:"successfully deleted" });
        }else{  
          return res.status(404).json({ message:" not deleted" });
        }
    } catch (error) {
      return next(error);
    }
    },


      
      
       
};
module.exports = orderController;
