abstract class Department {
  private students: Student[] = [];

  constructor(private name: string) {
    this.name = name;
  }

  get departmentName() {
    return this.name;
  }

  get currentStudents() {
    return this.students;
  }

  abstract describe(this: Department): void;

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

class Course {
  constructor(private courseName: string, private courseCredit: number) {
    this.courseName = courseName;
    this.courseCredit = courseCredit;
  }

  public printCourseInfo(this: Course) {
    console.log(
      `Course name: ${this.courseName}, and its credit: ${this.courseCredit}.`
    );
  }
}

class ComputerScience extends Department {
  private courses: Course[];
  private static instance: ComputerScience;

  private constructor(private chairman: string) {
    super('Computer Science and Engineering');
    this.chairman = chairman;
    this.courses = [];
  }

  public describe(this: ComputerScience): void {
    console.log(`Name of the department: ${this.departmentName}.`);
    console.log(`Name of the chairman of this department: ${this.chairman}.`);
    console.log(
      `Total number of students in the department is ${this.currentStudents.length}.`
    );
    console.log(
      `Total number of courses on offer by this department: ${this.courses.length}.`
    );
  }

  static getInstance() {
    if (ComputerScience.instance) {
      return this.instance;
    } else {
      this.instance = new ComputerScience(`Upama Kabir`);
      return this.instance;
    }
  }

  public addCourse(course: Course) {
    this.courses.push(course);
  }

  public printCourseInfo() {
    for (let course of this.courses) {
      course.printCourseInfo();
    }
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
    console.log(`Name of the department: ${this.departmentName}.`);
    console.log(`Name of the chairman of this department: ${this.chairman}.`);
    console.log(
      `Total number of students in the department is ${this.currentStudents.length}.`
    );
  }
}

const arka = new Student('Arka Bhuiyan', 26);
const farhan = new Student('Farhan Zaman', 26);
const nipa = new Student('Nipa Howlader', 26);
const shourov = new Student('Showrov Faisal', 28);

const java = new Course('Java', 3);
const structuredProgramming = new Course('Structured Programming', 3);
const appDevelopmentLab = new Course('App Development Lab', 1.5);
const operatingSystems = new Course('Operating Systems', 3);
const softwareDesignPattern = new Course('Software Design Patterns', 3);
const webEngineering = new Course('Web Engineering', 1.5);

const computerScience = ComputerScience.getInstance();
const computerScience2 = ComputerScience.getInstance();

console.log(
  `are computerScience and computerScience2 same instance? ${
    computerScience === computerScience2
  }`
);
computerScience.addStudent(arka);
computerScience.addStudent(farhan);
computerScience.addStudent(nipa);
computerScience.addStudent(shourov);

computerScience.addCourse(java);
computerScience.addCourse(structuredProgramming);
computerScience.addCourse(appDevelopmentLab);
computerScience.addCourse(operatingSystems);
computerScience.addCourse(softwareDesignPattern);
computerScience.addCourse(webEngineering);

computerScience.describe();
computerScience.printStudentInfo();
computerScience.printCourseInfo();
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
