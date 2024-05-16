const amazonProduct = require("../Models/amazonProduct");
const product = require("../Models/amazonProduct");

exports.addproduct = async (req, res) => {
  try {
    const newProduct = new product(req.body);
    await newProduct.save();
    res.status(200).send({ msg: "product added successfully" });
  } catch (error) {
    res.status(500).send({ msg: "error on  adding", error });
    console.log(error);
  }
};

exports.getproduct = async (req, res) => {
  try {
    // Pagination parameters
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 5000;

    // Calculate skip based on pagination
    const skip = (page - 1) * limit;

    // Fetch all fields and apply pagination
    const foundProduct = await product.find().skip(skip).limit(limit);

    res.status(200).send({ foundProduct });
  } catch (error) {
    res.status(500).send({ msg: "Can not get the product", error });
  }
};
exports.getproductbyid = async (req, res) => {
  try {
    const { _id } = req.params; // Destructure _id directly from req.params
    const product = await amazonProduct.findById(_id); // Use findById without {}

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).send(product); // Send the product as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getproductbyasin = async (req, res) => {
  try {
    const { category_name } = req.params;
    // Pagination parameters
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 5000;

    // Calculate skip based on pagination
    const skip = (page - 1) * limit;

    // Fetch all fields and apply pagination
    const foundProduct = await product
      .find({ category_name })
      .skip(skip)
      .limit(limit);

    res.status(200).send({ foundProduct });
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteproduct = async (req, res) => {
  try {
    const { _id } = req.params;
    await product.deleteOne({ _id });
    res.status(200).send({ msg: "Product deleted" });
  } catch (error) {
    res.status(500).send({ msg: "can not delete the product", error });
  }
};

exports.editproduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const { price } = req.body;

    console.log(req.body);
    console.log(price);
    await product.updateOne({ _id }, { $set: { price: price } });
    res.status(200).send({ msg: "Product updated" });
  } catch (error) {
    res.status(500).send({ msg: "the product can not be updated  ", error });
  }
};
