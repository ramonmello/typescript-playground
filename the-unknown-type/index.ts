/**
 * First example
 */
console.log("------ First example ------");
let value: unknown;

// Change order of lines to test
value = undefined;
value = "Hello unknown type";

if (typeof value === "string") {
  const uppercaseText = value.toUpperCase();
  console.log(uppercaseText);
}

/**
 * Second example
 */
console.log("------ Second example ------");

function range(from: number, to: number): number[];
function range(from: unknown, to: unknown): number[] {
  if (typeof from !== "number" || typeof to !== "number") {
    throw Error("range() expects exactly 2 numbers");
  }

  const values: number[] = [];
  for (let i = from; i < to; i++) {
    values.push(i);
  }

  return values;
}

console.log(range(0, 5));
