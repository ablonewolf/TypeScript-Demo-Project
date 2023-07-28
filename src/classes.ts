class Department {
  private name: string;
  private students: Student[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public describe(this: Department) {
    console.log(`Name of the department: ${this.name}`);
    console.log(
      `Total number of students in the department is ${this.students.length}`
    );
  }

  public printStudentInfo(this: Department) {
    for (let student of this.students) {
      student.printInfo();
    }
  }

  public addStudent(student: Student) {
    this.students.push(student);
  }
}

class Student {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public printInfo(this: Student) {
    console.log(`Name of the student: ${this.name} and age: ${this.age}.`);
  }
}

const arka = new Student('Arka Bhuiyan', 26);
const farhan = new Student('Farhan Zaman', 26);
const nipa = new Student('Nipa Howlader', 26);
const shourov = new Student('Showrov Faisal', 28);

const computerScience = new Department('Computer Science and Engineering');
computerScience.addStudent(arka);
computerScience.addStudent(farhan);
computerScience.addStudent(nipa);
computerScience.addStudent(shourov);
computerScience.describe();
computerScience.printStudentInfo();
