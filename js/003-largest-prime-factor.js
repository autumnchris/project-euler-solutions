// Problem 3
// Largest Prime Factor

/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function largestPrimeFactor(num) {
  let factors = [];
  let i;
  let j;

  for (i = 2; i <= num; i++) {

    if (num % i === 0) {
      num = num/i;

      for (j = 2; j <= i; j++) {

        if (i % j === 0) {
          factors.push(j);
          i = i/j;
        }
      }
    }
  }
  return factors[factors.length - 1];
}

largestPrimeFactor(600851475143);
