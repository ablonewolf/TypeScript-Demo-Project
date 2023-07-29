interface AddNumbers {
  (a: number, b: number): number;
}

const addNumber: AddNumbers = (number1: number, number2: number) => {
  return number1 + number2;
};

console.log(`The sum of 8 and 88 is: ${addNumber(8, 68)}.`);
