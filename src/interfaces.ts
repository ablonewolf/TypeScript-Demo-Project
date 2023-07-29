interface GreetableUser {
  name: string;
  age: number;
  sex: Sex;

  printInfo(): void;
}

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

user1.printInfo();
