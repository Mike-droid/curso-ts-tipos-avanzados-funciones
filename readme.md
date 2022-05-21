# Cursto de TypeScript: Tipos Avanzados y Funciones

## Introducción

### Configuración del proyecto con ts-node

[TS-node](typestrong.org/ts-node/)

Lo instalamos con `npm i -D ts-node`

Lo ejecutamos con `npx ts-node lugar_del_archivo.ts`

## New Types

### Enums

Enum me permite configurar un set de opciones.

[Capacitor](https://capacitorjs.com/) usa enums.

La ventaja de usar enums es que sabemos qué opciones son las que debemos usar.

Ejemplo:

```typescript
enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

type User = {
  username: string
  role: ROLES
}

const mikeUser: User = {
  username: 'mike',
  role: ROLES.ADMIN,
}
```

### Tuples

Es como un array pero con posiciones limitadas.

### Unkown

Es mucho más preferible usar unknow que any en TS.

### Never type

Se usa para funciones que nunca terminan.

## Funciones

### Parámetros opcionales y nullish-coalescing

Cuando usamos parámetros opcionales, estos *obligatoriamente* deben ir al final.

Y es mejor usar el operador 'nullish-coalescing' `??` para evitar errores que da `||`.

```typescript
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

```

### Parámetros por defecto

```typescript
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
```

### Parámetros rest

```typescript
import { User, ROLES } from "./01-enum"

const currentUser: User = {
  username: 'mike',
  role: ROLES.CUSTOMER,
}

export const checkAdminRole = () => {
  return currentUser.role === ROLES.ADMIN ? true : false
}

export const checkRole = (role1: string, role2: string) => {
  return currentUser.role === role1 || currentUser.role === role2 ? true : false
}

//console.log(checkRole(ROLES.ADMIN, ROLES.SELLER))

export const checkRoleV2 = (roles: string[]) => {
  return roles.includes(currentUser.role) ? true : false
}
//console.log(checkRoleV2([ROLES.ADMIN, ROLES.SELLER]))

export const checkRoleV3 = (...roles: string[]) => {
  return roles.includes(currentUser.role) ? true : false
}
console.log(checkRoleV2([ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER])) //* parámetros infinitos

```

### Sobrecarga de funciones: el problema

La sobrecarga solamente puede usarse con la palabra reservada `function`.

El detalle es que no podemos usar métodos de la variable porque TS no sabe en qué momento nuestra variable es de algún tipo u otro.

### ### Sobrecarga de funciones: la solución

Buena práctica: si tu sobrecarga usa `unknown` o `any` deja esa sobrecarga para el final.

```typescript
//* Esta es la sobrecarga, le damos un tipado a nuestra función
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean; //* just for lol

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(""); //string
  } else if (typeof input === "string") {
    return input.split(""); //string[]
  } else if (typeof input === "number") {
    return true; //boolean
  }
}
```

[Type ORM](https://typeorm.io/) utiliza TS y sobrecarga de métodos.

## Interfaces

### Interfaces

Si bien `type` e `interface` hacen casi lo mismo, `interface` puede verse como un conjunto de tipos, mientras que `type` se puede declarar en una sola línea.

`interface` se puede extender, pero `type` no.

```typescript
type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
}

```

### Estructuras complejas

Ejemplo de estructuras más complejas:

```typescript
import { Product } from '../products/product.model';
import { User } from '../users/user.model';

export interface Order {
  id: string | number;
  createdAt: Date;
  products: Product[];
  user: User;
}

```

### Extender interfaces

Creamos un 'BaseModel':

```typescript
export interface BaseModel {
  id: string | number;
  createdAt: Date;
  updatedAt: Date;
}

```

Y lo usamos con `extends` en los archivos que sean necesarios:

```typescript
import { BaseModel } from '../base.model';
import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
  title: string;
  stock: number;
  size?: Sizes;
  category: Category;
}

```

### Propiedades de solo lectura

Podemos hacer que algunas propiedades no puedan ser alteradas:

```typescript
export interface BaseModel {
  readonly id: string | number; //* la BBDD es la que debe asignar el ID, no una persona
  createdAt: Date;
  updatedAt: Date;
}

```

## Proyecto

### CRUD

Para llenar los datos usaremos [Faker.js](https://fakerjs.dev/) y la instalamos con `npm i @faker-js/faker -D`

### Omit y Pick Type

Podemos omitir ciertos atributos a la hora de crearlos, para que un humano no los llene, ya que son automáticos. Usamos `omit`

```typescript
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
```

Y podemos hacer lo contrario, usando `pick`.

```typescript
type example = Pick<Product, 'color' | 'image'>;
```

### Partial y Required Type

Podemos hacer que los campos sean opcionales con `Partial`

```typescript
export interface UpdateProductDto extends Partial<CreateProductDto> {}
```

Y podemos hacer que sean obligatorios con `Required`

```typescript
type example2 = Required<Product>
```

### Readonly Type

Es tan simple como:

```typescript
export interface GetProductsDto extends Readonly<Partial<Product>>{}
// Ahora todos los campos son de 'solo lectura'
```

### Acceder al tipado por indice

Podemos acceder al tipado por indice 🤯🤯🤯

```typescript
const updateProduct = (id: Product['id']) => {}
```

Así, si cambian el tipado de 'id' de Product, no habrá problemas (depende de caso).

### ReadonlyArray

```typescript
const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

//! ya no puedo hacer esto
/* numbers.push(6)
numbers.pop()
numbers.unshift(0)
*/

//* Esto sí
numbers.filter(n => n > 3)

```
