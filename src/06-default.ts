export const createProduct = (
  id: string | number,
  isNew: boolean = true, //* valor por defecto
  stock: Number = 10, //* valor por defecto
) => {
  return {
    id,
    isNew,
    stock
  }
}

const p1 = createProduct(123)
console.log(p1)
