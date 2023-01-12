//import mongoose
const mongoose = require('mongoose')

//define connection string
mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log("Mongodb connected successfully...");
})
//Create a model to store all product
const Product = mongoose.model('Product',{//here singular of collection name be used here it is Product
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }

})
//create a model to store wishlist items
const Wishlist = mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }



})


//to use Product in other files we need to export it
module.exports={
    Product,
    Wishlist
}