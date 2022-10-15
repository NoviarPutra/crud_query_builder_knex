import dbConfig from "../config/config.js";

export const insertProduct = (data) => {
  return dbConfig("product").insert(data);
};
export const getAll = () => {
  return dbConfig.raw("SELECT * FROM product");
};
export const getById = (id) => {
  return dbConfig("product").where("productID", id);
};
export const search = (value) => {
  return dbConfig.raw(
    `SELECT * FROM product WHERE productName LIKE '%${value}%'`
  );
};
export const update = (id, data) => {
  return dbConfig("product")
    .where({ productID: id })
    .update({ productName: data });
};
export const remove = (id) => {
  return dbConfig("product").where("productID", id).del();
};
