type Programmer = {
  name: string;
  programmingLanguage: ProgrammingLanguage;
};

type Developer = {
  name: string;
  stack: ApplicationStack;
};

type SoftwareDeveloper = Programmer & Developer;

type UnknownDeveloper = Programmer | Developer;

const printDeveloperInfo = function (developer: UnknownDeveloper) {
  console.log(`Name of the developer: ${developer.name}.`);
  if ('programmingLanguage' in developer) {
    console.log(
      `Preferred programming language: ${developer.programmingLanguage}.`
    );
  }

  if ('stack' in developer) {
    console.log(`Preferred application development stack: ${developer.stack}.`);
  }
};

const developer1: SoftwareDeveloper = {
  name: 'Arka Bhuiyan',
  programmingLanguage: 'Java',
  stack: 'Full-Stack'
};

const developer2: UnknownDeveloper = {
  name: 'Shourov Faisal',
  stack: 'FrontEnd'
};

printDeveloperInfo(developer2);

const developer3: UnknownDeveloper = {
  name: 'Farhan Zaman',
  programmingLanguage: 'JavaScript'
};

printDeveloperInfo(developer3);

// console.log(
//   `Name of the developer: ${developer1.name}, preferred programming language: ${developer1.programmingLanguage}, preferred application stack for development: ${developer1.stack}.`
// );
