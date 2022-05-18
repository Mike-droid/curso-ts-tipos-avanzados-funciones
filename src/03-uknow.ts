let unknowVar: unknown

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase()
}

if (typeof unknowVar === 'boolean') {
  unknowVar = true
}

const parse = (str: string): unknown => {
  return JSON.parse(str)
}
