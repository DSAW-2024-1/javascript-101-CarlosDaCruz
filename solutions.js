// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  let error;
  if (typeof  a==='number' && typeof b === 'number')
    return a+b;
  else
   error= 'Los datos de entrada no son adecuados';
    return error
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
