const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "Please Enter Product description"]
    },
    price:{
        type:Number,
        required:[true, "Please Enter Product price"],
        maxLength:[8, "price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
        }
    ],
    category:{
        type:String,
        required:[true, "Please Enter Product Category"]
    },
    Stock:{
        type:Number,
        required:[true, "Please Enter Product Stock"],
        maxLength:[4, "Stock Cannot Exceed 4 Characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[{
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:String,
            required:true
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("product",productSchema);







//////////////////////////////////////////////////////////
// const mongoose = require("mongoose");

// const productSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Please Enter Product Name"],
//         trim: true
//     },
//     description: {
//         type: String,
//         required: [true, "Please Enter Product description"]
//     },
//     price: {
//         type: Number,
//         required: [true, "Please Enter Product price"],
//         max: [99999999, "price cannot exceed 99999999"],
//         min: [0, "price cannot be negative"]
//     },
//     rating: {
//         type: Number,
//         default: 0,
//         min: [0, "Rating cannot be negative"],
//         max: [5, "Rating cannot be more than 5"]
//     },
//     images: [
//         {
//             public_id: {
//                 type: String,
//                 required: true
//             },
//             url: {
//                 type: String,
//                 required: true,
//                 validate: {
//                     validator: function (v) {
//                         // Simple URL validation check
//                         return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
//                     },
//                     message: "Invalid image URL"
//                 }
//             }
//         }
//     ],
//     category: {
//         type: String,
//         required: [true, "Please Enter Product Category"]
//     },
//     stock: {
//         type: Number,
//         required: [true, "Please Enter Product Stock"],
//         max: [9999, "Stock cannot exceed 9999"],
//         min: [0, "Stock cannot be negative"],
//         default: 1
//     },
//     numOfReviews: {
//         type: Number,
//         default: 0
//     },
//     reviews: [
//         {
//             name: {
//                 type: String,
//                 required: true
//             },
//             rating: {
//                 type: Number,
//                 required: true,
//                 min: [1, "Rating must be at least 1"],
//                 max: [5, "Rating cannot be more than 5"]
//             },
//             comment: {
//                 type: String,
//                 required: true
//             }
//         }
//     ],
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = mongoose.model("Product", productSchema);
