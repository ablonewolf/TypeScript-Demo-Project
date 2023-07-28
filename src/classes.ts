class Department {
  private students: Student[] = [];

  constructor(private name: string) {
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
  constructor(private name: string, private age: number) {
    this.name = name;
    this.age = age;
  }

  public printInfo(this: Student) {
    console.log(`Name of the student: ${this.name} and age: ${this.age}.`);
  }
}

class SoftwareEngineering extends Department {
  private mostEnrolledCourse: string;
  constructor(private chairman: string) {
    super('Software Engineering');
    this.chairman = chairman;
    this.mostEnrolledCourse = 'Java';
  }

  set mostViewedCourse(mostViewedCourse: string) {
    this.mostEnrolledCourse = mostViewedCourse;
  }

  get mostViewedCourse() {
    return this.mostEnrolledCourse;
  }

  static get departmentName() {
    return this.name;
  }

  public describe(this: SoftwareEngineering) {
    super.describe();
    console.log(`Chairman of this department: ${this.chairman}`);
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
console.log(`\n`);

const softwareEngineerig = new SoftwareEngineering('Sakib Hasan');

const ishtiaque = new Student('Ishtiaque Habib', 25);
const anim = new Student('Nafis Imtiyaz Anim', 27);
const rejaur = new Student('Rejaur Rahman', 26);
const ifti = new Student('Iftekhar Alam', 26);
const faiaz = new Student('Faiaz Mursalin', 26);

softwareEngineerig.addStudent(ishtiaque);
softwareEngineerig.addStudent(anim);
softwareEngineerig.addStudent(rejaur);
softwareEngineerig.addStudent(ifti);
softwareEngineerig.addStudent(faiaz);
// console.log(`Department name: ${SoftwareEngineering.departmentName}`);
softwareEngineerig.describe();
softwareEngineerig.printStudentInfo();
console.log(
  `Most enrolled course for Software Engineering department till now was: ${softwareEngineerig.mostViewedCourse}.`
);
softwareEngineerig.mostViewedCourse = 'Web Engineering';
console.log(
  `Currently, the most enrolled course for Software Engineering Department is: ${softwareEngineerig.mostViewedCourse}.`
);
