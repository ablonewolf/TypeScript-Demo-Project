const addNumbers = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const sum = (...numbers: number[]) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

printOutput(addNumbers(5, 7));
