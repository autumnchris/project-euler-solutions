// Problem 4
// Largest palindrome product

/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function largestPalindromeProduct(n) {
  const highestPossibleFactor = Number(Array(n).fill(9).join(''));
  let largestPalindrome = -Infinity;
  let i;
  let j;

  for (i = highestPossibleFactor; i >= 1; i--) {
    for (j = highestPossibleFactor; j >= 1; j--) {

      if (checkForPalindrome(i * j) && i * j > largestPalindrome) {
        largestPalindrome = i * j;
      }
    }
  }

  return largestPalindrome;
}

function checkForPalindrome(num) {
  return num.toString() === num.toString().split('').reverse().join('');
}

largestPalindromeProduct(3);
