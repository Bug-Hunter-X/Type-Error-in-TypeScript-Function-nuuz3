function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or handle the error appropriately
  }
  return numA + numB;  
}

let result1 = add(1, 2); // Correct usage
console.log(result1); // Output: 3

let result2 = addSafe(1, '2'); // Safe usage with string
console.log(result2); // Output: 3

let result3 = addSafe('abc', 2); // Safe usage with string handling NaN
console.log(result3); // Output: 0 