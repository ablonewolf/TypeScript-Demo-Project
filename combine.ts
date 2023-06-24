type combinable = number | string;
type conversionDescriptor = 'number' | 'text';

const add = (number1: number, number2: number) => number1 + number2;
const addAndHandle = (
  input1: combinable,
  input2: combinable,
  callBackFunction: (output: combinable) => void
) => {
  const inputType =
    typeof input1 === 'number' && typeof input2 === 'number'
      ? 'number'
      : 'text';
  callBackFunction(combine(input1, input2, inputType));
};

const combine = function (
  input1: combinable,
  input2: combinable,
  resultConvertion: 'number' | 'text'
): number | string {
  if (
    typeof input1 === 'number' &&
    typeof input2 === 'number' &&
    resultConvertion === 'number'
  ) {
    return add(input1, input2);
  } else {
    return input1.toString() + ' ' + input2.toString();
  }
};
const printResult = (output: combinable) =>
  console.log(`The output is: ${output}.`);
addAndHandle(56, 44, printResult);
addAndHandle('Hello', 'Arka', printResult);
addAndHandle('My age is', 24, printResult);
