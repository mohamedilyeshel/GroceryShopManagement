const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		name: { type: String },
		price: { type: Number },
		qte: { type: Number },
		type: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);