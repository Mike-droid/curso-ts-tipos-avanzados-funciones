//mike => [m,i,k,e] | string => string[]
//[m,i,k,e] => mike | string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(""); //string
  } else {
    return input.split(""); //string[]
  }
}

const rtaArray = parseStr("mike");
const rtaString = parseStr(["m", "i", "k", "e"]);

console.log(rtaArray);
console.log(rtaString);
