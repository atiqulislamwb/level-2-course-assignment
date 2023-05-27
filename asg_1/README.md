#Assignment Question Answer

Q1.What is TypeScript, and how is it different from JavaScript?

Answer: TypeScript is an object-oriented programming language developed by Microsoft Corporation, whereas JavaScript is the programming language for the web. TypeScript is an open-source language to build large-scale web apps, whereas JavaScript is a server-side programming language that helps to develop interactive web pages.

Q2.Can you explain the difference between "interface" and "type" in TypeScript?

Answer: Yes, Modern Typescript types and interfaces are both very powerful
Key differences:

- The type alias can also be used for other types such as primitives,
  unions, and tuples.
- interfaces are open and type aliases are closed
- Types are used to enforce the data type of a variable
- Interfaces are used to enforce the shape of an object
- Unlike a type alias, an interface can be defined multiple times,
  and will be treated as a single interface

Q3.Can you give an example of how to use generics in TypeScript?

Answer:Generics have been a major feature of strongly typed languages
like Java and C#. In TypeScript, they allow the types of components
and functions to be "SPECIFIED LATER" which allows them to be used
in creating reusable components that can apply to different use cases,
Example:
function returnInput <Type>(arg: Type): Type {
return arg;
};
const returnInputStr = returnInput<string>('Foo Bar');
const returnInputNum = returnInput<number>(5);

console.log(returnInputStr);
console.log(returnInputNum);

Q4.What is the difference between an "unknown" and "any" type in TypeScript?
Answer:

- TypeScript forces us to determine the type of the unknown value before we can work with it, but it doesn’t with the any value.
- We cannot assign unknown to anything but itself or any, while we can assign any to anything.

Q5.Can you give an example of how to use enums in TypeScript?

Answer:Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript. Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

Example:
enum Direction {
Up = 1,
Down,
Left,
Right,
}

Q6.What is the "as" keyword used for in TypeScript?

Answer:The as keyword is a type assertion in typescript. Type assertion is used such that we can set the data type of the variable on our own and tells the compiler not to infer it on its own. Type assertion is used to tell the compiler that we want to treat any as a number, or string

Q7.Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

Answer:For anything outside of this list, the typeof type guard simply returns object.
Example:In the example below, StudentId has a string | number type union parameter entry. We see that if the variable is a string, Student is printed, and if it is a number, Id is printed. The typeof type guard helps us to extract the type from x:

function StudentId(x: string | number) {
if (typeof x == 'string') {
console.log('Student');
}
if (typeof x === 'number') {
console.log('Id');
}
}
StudentId(`446`); //prints Student
StudentId(446); //prints Id

Example : The basic syntax for the in type guard is below:

interface Pupil {
ID: string;
}
interface Adult {
SSN: number;
}
interface Person {
name: string;
age: number;
}
let person: Pupil | Adult | Person = {
name: 'Britney',
age: 6
};
const getIdentifier = (person: Pupil | Adult | Person) => {
if ('name' in person) {
return person.name;
