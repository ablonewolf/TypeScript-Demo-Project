type Programmer = {
  name: string;
  programmingLanguage: ProgrammingLanguage;
};

type Developer = {
  name: string;
  stack: ApplicationStack;
};

type SoftwareDeveloper = Programmer & Developer;

const developer1: SoftwareDeveloper = {
  name: 'Arka Bhuiyan',
  programmingLanguage: 'Java',
  stack: 'Full-Stack'
};

console.log(
  `Name of the developer: ${developer1.name}, preferred programming language: ${developer1.programmingLanguage}, preferred application stack for development: ${developer1.stack}.`
);
