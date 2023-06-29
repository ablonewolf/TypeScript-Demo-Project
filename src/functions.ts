const addNumbers = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(addNumbers(5, 7));
