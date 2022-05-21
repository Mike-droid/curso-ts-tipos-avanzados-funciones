const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

//! ya no puedo hacer esto
/* numbers.push(6)
numbers.pop()
numbers.unshift(0)
*/

//* Esto sí
numbers.filter(n => n > 3)
