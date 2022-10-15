import {
  getAll,
  getById,
  insertProduct,
  remove,
  search,
  update,
} from "../models/product.models.js";

export const createProduct = async (req, res) => {
  try {
    const { productName } = req.body;
    const resp = await insertProduct({
      productID: new Date().getTime(),
      productName: productName.toLowerCase(),
    });
    if (resp)
      return res
        .status(201)
        .json({ code: 201, message: `${productName} added successfully` });
    return res.status(400).json({ message: resp });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const getAllProduct = async (req, res) => {
  try {
    const resp = await getAll();
    if (resp) return res.status(200).json({ code: 200, data: resp[0] });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const getProductById = async (req, res) => {
  try {
    const id = req.params.productID;
    const resp = await getById(id);
    if (resp[0]) return res.status(200).json({ code: 200, data: resp[0] });
    return res.status(400).json({ message: "ProductID not registered" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const searchProduct = async (req, res) => {
  try {
    const { productName } = req.query;
    const resp = await search(productName);
    if (resp[0]) return res.status(200).json({ code: 200, data: resp[0] });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.productID;
    const { productName } = req.body;
    const resp = await update(id, productName.toLowerCase());
    if (resp)
      return res
        .status(200)
        .json({ code: 200, data: `productID '${id}' updated` });
    return res.status(400).json({ message: "ProductID not registered" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const removeProduct = async (req, res) => {
  try {
    const id = req.params.productID;
    const resp = await remove(id);
    console.log(resp);
    if (resp)
      return res
        .status(200)
        .json({ code: 200, message: `productID '${id}' deleted` });
    return res.status(400).json({ message: "ProductID not registered" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
