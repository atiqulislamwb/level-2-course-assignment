interface Person {
  name: string;
  age: number;
}

function filterPerson(arr: Person[]): Person[] {
  return arr.filter((person) => person.age >= 18);
}

const people: Person[] = [
  { name: "Jhon", age: 12 },
  { name: "Doe", age: 94 },
  { name: "Winslet", age: 10 },
];

const person = filterPerson(people);

console.log(person);
