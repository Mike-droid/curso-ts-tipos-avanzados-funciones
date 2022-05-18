let user: [string, number] = ['mike', 23] //* Esto es una tupla, solamente puede tener esos 2 argumentos en ese orden

console.log(user[0]) //* 'mike
console.log(user[1]) //* 23

const [username, age] = user //* Destructuración de una tupla
console.log(username) //* 'mike'
console.log(age) //* 23
