import { Product } from "./product.model"

export const products: Product[] = []

export const addProduct = (data: Product) => {
  /* data.id = 'asdhadksadjk'
  data.stock = 400 */
  //! si bien esto es completamente válido, puede ser que no querramos que esto suceda

  products.push(data)
}
