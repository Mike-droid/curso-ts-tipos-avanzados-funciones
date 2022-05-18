const withoutEnd = (): never => {
  while (true) {
    console.log('nunca pares de aprender')
  }
}

const fail = (message: string): never => {
  throw new Error(message)
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string'
  } else if(Array.isArray(input)) {
    return 'es un array'
  }

  return fail('no hay match')
}

console.log(example('hola'))
console.log(example(['hola']))
console.log(example(1)) //! el programa termina aquí
console.log(example('after fail 💢'))
