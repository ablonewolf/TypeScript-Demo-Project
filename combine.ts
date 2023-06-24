const combine = function (input1: number | string, input2: number | string) {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else {
    return input1.toString() + ' ' + input2.toString();
  }
};

console.log(combine(56, 44));
console.log(combine('Hello', 24));
