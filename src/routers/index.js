import productRouters from "./product.routes.js";

export const routers = (app) => {
  app.use("/api/v1/product", productRouters);
};
