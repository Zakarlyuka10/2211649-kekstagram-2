// const lineLength = function (string, maxLength) {
//   return string.length <= maxLength;
// };

// console.log(lineLength('Привет', 10));
// lineLength('Привет', 10);

const lineLength = function (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};

console.log(lineLength('Привет', 10));

const Palin = function (string) {
  let empty = '';

  for (let i = string.length - 1; i >= 0; i--) {
    empty += string[i];
  }

  return empty === string;
};

console.log(Palin('казак'));

const Kolo = function (string) {
  let a = '';
  const digits = '0123456789';

  for (let i = 0; i < string.length; i++) {
    if (digits.includes(string[i])) {
      a += string[i];
    }
  }

  if (a === '') {
    return NaN;
  } else {
    return +a;
  }

}

console.log(Kolo('казак10rjhj0.66'));