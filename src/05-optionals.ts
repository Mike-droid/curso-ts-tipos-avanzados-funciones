export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: Number,
) => {
  return {
    id,
    isNew: isNew ?? true,
    stock: stock ?? 10, //* valor por defecto
  }
}

//! usar || puede dar problemas, es mejor usar ??

const p1 = createProduct(123, true, 100)
console.log(p1)

const p2 = createProduct(124, true)
console.log(p2)

const p3 = createProduct(125, false, 0)
console.log(p3)
