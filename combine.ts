type combinable = number | string;
type conversionDescriptor = 'number' | 'text';

const combine = function (
  input1: combinable,
  input2: combinable,
  resultConvertion: 'number' | 'text'
) {
  if (
    typeof input1 === 'number' &&
    typeof input2 === 'number' &&
    resultConvertion === 'number'
  ) {
    return input1 + input2;
  } else {
    return input1.toString() + ' ' + input2.toString();
  }
};

console.log(combine(56, 44, 'number'));
console.log(combine('Hello', 24, 'text'));
