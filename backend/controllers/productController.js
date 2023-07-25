const Product = require("../models/productModels");

// Create Product -- Admin
exports.createProduct = async (req, res, next) => {
        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            product
        });
    
};

// Get All Products
exports.getAllProducts = async(req, res) => {
    const products = await Product.find();
    res.status(200).json({ message: "Route is working fine" });
};


///////////////////////////////////////////////////////////////////////

// const Product = require("../models/productModels");

// //Create Product
// exports.createProduct = async (req, res, next)=>{
//     const Product = await Product.create(req.body);

//     res.status(201).json({
//         success:true,
//         product
//     })
// }

// exports.getAllProducts = (req, res) => {
//     res.status(200).json({message:"Route is working fine"})
// }