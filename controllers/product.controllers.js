const productModels = require("../models/product.models");

const createProduct = async (req, res) => 
{
    
	const newProduct = new productModels({
		name : req.body.name,
        price : req.body.price,
        qte : req.body.qte,
        type : req.body.type
	});

	try 
    {
        const saveProduct = await newProduct.save();
        return res.status(200).json(saveProduct);
	} 
    catch (err)
    {
		return res.status(500).json(err);
	}
};

const getProducts = async (req, res) => 
{
	try
    {
		const products = await productModels.find();
		return res.status(200).json(products);
	} 
    catch (err) 
    {
		return res.status(500).json(err);
	}
};

const getProduct = async (req, res) =>
{
	const id = req.params.productId;
	try 
    {
		const product = await productModels.findById(id);
		return res.status(200).json(product);
	} 
    catch (err) 
    {
		return res.status(500).json(err);
	}
};

const getProductsByCategory = async (req, res) =>
{
	const id = req.params.categoryId;
	try 
    {
		const products = await productModels.find({type : id});
		return res.status(200).json(products);
	} 
    catch (err) 
    {
		return res.status(500).json(err);
	}
};

const deleteProduct = async (req, res) => 
{
	const id = req.params.productId;
	try 
    {
		const product = await productModels.findByIdAndDelete(id);
		return res.status(200).json(product);
	} 
    catch (err) 
    {
		return res.status(500).json(err);
	}
};

const updateProduct = async (req, res) => 
{
	const id = req.params.productId;
	try 
    {
		const product = await productModels.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		return res.status(200).json(product);
	} 
    catch (err) 
    {
		return res.status(500).json(err);
	}
};

module.exports.createProduct = createProduct;
module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
module.exports.getProductsByCategory = getProductsByCategory;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;