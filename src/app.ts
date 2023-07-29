// console.log('Your code goes here...');

function add(number1: number, number2: number) {
  return number1 + number2;
}

enum Roles {
  ADMIN,
  MANAGER,
  ENGINEER,
  ARCHITECTURE
}

type person = {
  name: string;
  age: number;
  occupation: [string, string];
  role: number;
};

// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')!
// );

const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi There!';
}

interface ErrorContaienr {
  [prop: string]: string;
}

const errorBag: ErrorContaienr = {
  email: 'Not a valid email',
  username: 'Must start with a character'
};
// const arka: person = {
//   name: 'Arka',
//   age: 25,
//   occupation: ['Software Engineer', 'Backend'],
//   role: Roles.ADMIN
// };
