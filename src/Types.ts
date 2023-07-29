type coder = 'programmer' | 'developer';

type Programmer = {
  type: 'programmer';
  name: string;
  programmingLanguage: ProgrammingLanguage;
};

type Developer = {
  type: 'developer';
  name: string;
  stack: ApplicationStack;
};

type Programming = {
  name: string;
  programmingLanguage: ProgrammingLanguage;
};

type Developing = {
  name: string;
  stack: ApplicationStack;
};

type SoftwareDeveloper = Programming & Developing;

type UnknownDeveloper = Programmer | Developer;

const printDeveloperInfo = function (developer: UnknownDeveloper) {
  console.log(`Name of the developer: ${developer.name}.`);
  switch (developer.type) {
    case 'programmer': {
      console.log(
        `Preferred programming language: ${developer.programmingLanguage}.`
      );
      break;
    }
    case 'developer': {
      console.log(
        `Preferred application development stack: ${developer.stack}`
      );
      break;
    }
  }
};

const developer1: SoftwareDeveloper = {
  name: 'Arka Bhuiyan',
  programmingLanguage: 'Java',
  stack: 'Full-Stack'
};

const developer2: UnknownDeveloper = {
  type: 'developer',
  name: 'Shourov Faisal',
  stack: 'FrontEnd'
};

// printDeveloperInfo(developer2);

const developer3: UnknownDeveloper = {
  type: 'programmer',
  name: 'Farhan Zaman',
  programmingLanguage: 'JavaScript'
};

// printDeveloperInfo(developer3);

type Combinable = number | string;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: combinable, b: combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + ' ' + b.toString();
  } else {
    return a + b;
  }
}

// console.log(
//   `Result is ${add(5, 3)} and type of the result: ${typeof add(5, 3)}.`
// );
// console.log(
//   `Result is ${add('Arka', 'Bhuiyan')} and the type of the result: ${typeof add(
//     'Arka',
//     'Bhuiyan'
//   )}`
// );
