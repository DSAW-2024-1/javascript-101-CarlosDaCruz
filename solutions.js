// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof  a==='number' && typeof b === 'number')
    return a+b;
  else
    return console.log('Los datos de entrada no son adecuados');
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (typeof n === 'number' && n >= 0){
    if (n == 0 || n == 1) {
      return 1;
    }
    return n * factorial(n - 1);
  } else 
      return console.log('Los datos de entrada no son adecuados');
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  let bigOne= arr[0];
    for (let i=1;i<arr.length;i++){
      if(arr[i]>bigOne)
        bigOne = arr[i];
    }
  
    return bigOne;
  }


// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  if (typeof str !== 'string') {
    
    return console.log('Los datos de entrada no son adecuados');;
  }

  let count=0;
  for (let letter of str){
    if ('AaEeIiOoUu'.includes(letter))
      count++;
  }
  return count;
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
