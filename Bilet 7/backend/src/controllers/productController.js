import product from "../models/productModel.js";

export const createProduct=async(req,res)=>{
    console.log(req.body)
    try {
        let newProduct=new product(req.body)
        await newProduct.save()
        res.status(201).send(newProduct)
    } catch (error) {
        res.status(500).send("server error")
    }
}

export const deleteProduct=async(req,res)=>{
    let {id}=req.params
    let deletedProduct=await product.findByIdAndDelete(id)
    try {
        if(!deletedProduct){
            res.status(400).send("Product not deleted")
        }res.status(200).send("product deleted")
    } catch (error) {
        res.status(500).send("server error")
    }
}

export const getProducts=async(req,res)=>{
    try {
        let products=await product.find()
        if(!products){
            res.status(404).send("Products not found")
        }res.status(200).send(products)
    } catch (error) {
        res.status(500).send("server error")
    }
}