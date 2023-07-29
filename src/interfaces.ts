interface Person {
  readonly name: string;
  printInfo(): void;
}

interface GreetableUser extends Person {
  name: string;
  age: number;
  sex: Sex;

  printInfo(): void;
}

type SoftwareResponsibility = 'BackEnd' | 'FrontEnd' | 'Full-Stack';

type ProgrammingLanguage =
  | 'Java'
  | 'C'
  | 'C++'
  | 'JavaScript'
  | 'TypeScript'
  | 'Python'
  | 'Kotlin';

type Sex = 'Male' | 'Female' | 'Other';

let user1: GreetableUser;

user1 = {
  name: 'Arka',
  age: 26,
  sex: 'Male',
  printInfo() {
    console.log(
      `Name of the person is ${this.name}, with an age of ${this.age} and gender of ${this.sex}.`
    );
  }
};

// user1.printInfo();

class SoftwareEngineer implements Person {
  name: string;
  protected age: number;
  protected sex: Sex;
  protected programmingLanguage: ProgrammingLanguage;
  protected responsibility: SoftwareResponsibility;

  constructor(
    name: string,
    age: number,
    sex: Sex,
    programmingLanguage: ProgrammingLanguage,
    responsibility: SoftwareResponsibility
  ) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.programmingLanguage = programmingLanguage;
    this.responsibility = responsibility;
  }

  printInfo(): void {
    console.log(
      `${this.name} is a software engineer, with an age of ${this.age} and with the gender of ${this.sex}.\n` +
        `This engineer's responsibility lies on ${this.responsibility}, with this preferrend programming language: ${this.programmingLanguage}.\n`
    );
  }
}

const engineer1 = new SoftwareEngineer(
  'Arka Bhuiyan',
  26,
  'Male',
  'Java',
  'Full-Stack'
);
engineer1.printInfo();

const engineer2 = new SoftwareEngineer(
  'Shourov Faisal',
  28,
  'Male',
  'JavaScript',
  'FrontEnd'
);
engineer2.printInfo();

const engineer3 = new SoftwareEngineer(
  'Giash Uddin',
  29,
  'Male',
  'Java',
  'BackEnd'
);
engineer3.printInfo();

const engineer4 = new SoftwareEngineer(
  'Mahiya Rafa',
  25,
  'Female',
  'TypeScript',
  'FrontEnd'
);
engineer4.printInfo();
