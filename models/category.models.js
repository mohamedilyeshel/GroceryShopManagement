const mongoose = require("mongoose");

const CategorieSchema = new mongoose.Schema(
	{
		type : { type: String },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Category", CategorieSchema);