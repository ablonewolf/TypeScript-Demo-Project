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
