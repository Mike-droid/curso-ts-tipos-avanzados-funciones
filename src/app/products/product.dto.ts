import { Product } from "./product.model";

export interface CreateProductDto extends Omit
  < Product,
    'id' |
    'createdAt'|
    'updatedAt' |
    'category'
  >
{
  categoryId: string;
}
//* omitimos los datos porque no los insertará un humano, sino de forma automática

/* type example = Pick<Product, 'color' | 'image'>;
//* Es lo contrario al Omit */

export interface UpdateProductDto extends Partial<CreateProductDto> {}
//* Con el Partial ahora todos los campos son opcionales

/* type example2 = Required<Product> */
//* Es lo contrario al Partial -> todos son obligatorios

export interface GetProductsDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags: ReadonlyArray<string>
}

/* type example3 = Readonly<Product> */
//* Todos los parámetros son de 'solo lectura'
