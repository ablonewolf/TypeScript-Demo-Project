interface Person {
  name: string;
  age: number;
  sex: string;

  printInfo(): void;
}

let user1: Person;

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

user1.printInfo();
