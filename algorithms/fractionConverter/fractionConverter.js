/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

const GCD = (n, m) => {
  while (n !== 0) {
    let r = m % n;
    m = n;
    n = r;
  }
  return m
}

const findMultiple = (x) => {
  let m = 10;

  while ((x * m) % 1 !== 0) {
    console.log('1',m)
    m *= 10;
    console.log('2',m)
  }
  console.log('3',m)
  return m;
}

var toFraction = function (number) {
  // Your code here
  //two vars, top (number), bottom(1)
  // multiply top & bottom by 100
  // while a GCD !== 1
  // divivde by GCD
  //end while
  let m = findMultiple (number);
  let top = number * m;
  let bottom = m;
  let divsor = GCD(bottom, top);
  while (divsor !== 1) {
    top = top / divsor;
    bottom = bottom / divsor;
    divsor = GCD(bottom, top);
  }
  return `${top}/${bottom}`;
  //return result
};

toFraction(0.253213)
