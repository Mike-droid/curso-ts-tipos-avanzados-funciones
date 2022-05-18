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
