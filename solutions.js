// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof  a==='number' && typeof b === 'number')
    return a+b;
  else
    return console.log('Los tipos de datos no son adecuados')
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
