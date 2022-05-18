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
