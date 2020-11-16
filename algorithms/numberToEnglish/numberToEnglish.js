/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  let dewieDecimal = (num) => {
    let place;
    let placeValue;
    let next;
    let result = '';

    if (numbersToWords[num]) {
      result = numbersToWords[num];
    }

    else if (num < 100) {
      placeValue = Math.floor(num / 10) * 10;
      next = num % 10;
      result = `${numbersToWords[placeValue]}-${numbersToWords[next]}`;
    }
    else {
      if (num < 1000) {
        place = 100;
      } else {
        place = 1000;
        while (place*1000 <= num) {
          place *= 1000;
        }
      }
      placeValue = Math.floor(num/place);
      next = num % place;
      result = `${dewieDecimal(placeValue)} ${numbersToPlace[place]}`;
      let remaindingNumbers = dewieDecimal(next);
      if(remaindingNumbers !== 'zero') {
        result += ` ${remaindingNumbers}`;
      }
    }
    return result
  }
  return dewieDecimal(this);
};
