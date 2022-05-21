import faker from '@faker-js/faker'

import { addProduct, products, updateProduct, getProducts } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    categoryId: faker.datatype.uuid(),

    color: faker.commerce.color(),

    description: faker.commerce.productDescription(),

    image: faker.image.imageUrl(),
    isNew: faker.datatype.boolean(),

    price: parseFloat(faker.commerce.price()),

    size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
    stock: faker.datatype.number({min:10, max: 100}),

    tags: faker.random.arrayElement(),
    title: faker.commerce.productName(),
  })
}

console.log(products)

const productToUpdate = products[0]
updateProduct(productToUpdate.id, {
  color: 'red',
})

getProducts({
  color: 'red',
  tags: ['tag1', 'tag2'],
})
