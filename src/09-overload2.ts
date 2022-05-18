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

const rtaArray = parseStr("mike");
rtaArray.reverse()

const rtaString = parseStr(["m", "i", "k", "e"]);
rtaString.length

const rtaNumber = parseStr(123);

console.log(rtaArray);
console.log(rtaString);
console.log(rtaNumber);
