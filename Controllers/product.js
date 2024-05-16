const product = require("../Models/product")


exports.addproduct=async(req, res)=>{
    try {
      const newProduct= new product(req.body)

      console.log(req.body)
      await newProduct.save()
      res.status(200).send({msg : "product added successfully" })
    } catch (error) {
      res.status(500).send({msg : "error on  adding", error})
      console.log(error)
    }
}


exports.getproduct = async(req, res)=>{
    try {
        const foundProduct = await product.find()
        res.status(200).send({foundProduct})
    } catch (error) {
        res.status(500).send({msg : "can not get the product", error})
    } 

}

exports.deleteproduct = async(req, res)=>{
    try {
        const {_id}  = req.params
        await product.deleteOne({_id})
        res.status(200).send({msg : "Product deleted"})
    } catch (error) {
        res.status(500).send({msg : "can not delete the product", error})
    } 
}

exports.editproduct = async(req, res)=>{
    try {
        const {_id } = req.params
        const {price } = req.body

        console.log(req.body)
        console.log(price)
        await product.updateOne({_id}, {$set: {price : price} })
        res.status(200).send({msg : "Product updated"})
    } catch (error) {
        res.status(500).send({msg : "the product can not be updated  ", error})
    } 
}
