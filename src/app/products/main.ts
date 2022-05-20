import { addProduct } from "./product.service";

addProduct({
  id: 1,
  title: "Product 1",
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 10,
  size: 'L',
  category: {
    id: 1,
    name: 'Category 1',
    createdAt: new Date(),
    updatedAt: new Date()
  }
})
