const db = require('./db')

//get all product frm db
const getProducts = ()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No product found!'
                }
            }
        }
    )
}

//get all wishlist Items frm db
const getWishlist = ()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    wishlists:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No product found!'
                }
            }
        }
    )
}
module.exports={
    getProducts,
    getWishlist
}