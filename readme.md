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
