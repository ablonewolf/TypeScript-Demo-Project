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

const arka: person = {
  name: 'Arka',
  age: 25,
  occupation: ['Software Engineer', 'Backend'],
  role: Roles.ADMIN
};
