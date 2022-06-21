const Product  = require("../models/Products");

// const {products} = require('../data')
const getProducts = async (req,res)=>{
    const products = await Product.find();
    let {limit} = req.query;
   let newProducts =  products.map((product)=>{
       let {id,title,price,description,category,image} = product;
       return {id,title,price,description,category,image};
   })

   if(limit){
       newProducts = newProducts.slice(0, Number(limit))
   }
   res.json(newProducts)

//    res.render ('index', newProducts);

}

const getSingleProduct= async (req,res)=>{
    let {productId} = req.params
    let selectedProduct = await Product.findById(productId)
    // console.log(productId);
    // res.render('product',selectedProduct)
   res.json(selectedProduct)
    

}

const addProduct = async (req,res) =>{

   let result = await await Product.create({
    title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
   })
    res.json(result)
}

const updateProduct = async (req,res) =>{   
    let {productId} = req.params;
    // console.log(productId);
   let result =  await Product.findById(productId, req.body)
    res.json(result)
}


const deleteProduct = async (req,res) =>{
    let {productId} = req.params;
    // console.log(productId);
    await Product.findByIdAndDelete(productId)
    res.json(result)
}
module.exports = {getProducts,getSingleProduct,addProduct,updateProduct,deleteProduct};