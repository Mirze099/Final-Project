import { ProductModel } from "../models/Models.js";

export let ProductController = {
  getAll: async (req, res) => {
    let product = await ProductModel.find();
    res.send(product);
  },
  getById: async (req, res) => {
    let id = req.params.id;
    let myproduct = await ProductModel.findById(id);
    res.send(myproduct);
  },
  post: async (req, res) => {
    let newproduct = ProductModel(req.body);
    await newproduct.save();
    res.send({
      message: "Success",
      data: newproduct,
    });
  },
  delete: async (req, res) => {
    let { id } = req.params;
    await ProductModel.findByIdAndDelete(id);
    res.send({
      message: "Success",
    });
  },
  edit: async (req, res) => {
    let { id } = req.params;
    let update = ProductModel(req.body);
    let updated = await ProductModel.findByIdAndUpdate({ _id: id }, update, {
      new: true,
    });
    res.send(updated);
  },
};
