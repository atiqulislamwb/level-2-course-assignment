class Person {
  constructor(private name: string, private age: number) {}

  public getDetails(): string {
    return `${this.name} is ${this.age} years old and ${this.name} is says, hi mom`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, private grade: string) {
    super(name, age);
  }

  public getGrade(): string {
    return `${this.name} got a grade of ${this.grade} in his past exam.`;
  }
}

const personOnEarth = new Person("Jhon", 34);
console.log(personOnEarth.getDetails()); //  Jhon is 25 years old.

const studentOnEarth = new Student("Doe", 13, "B");
console.log(studentOnEarth.getDetails()); //  Doe is 20 years old.
console.log(studentOnEarth.getGrade());
