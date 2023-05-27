const stringArray: string[] = ["bus", "train", "car"];
const numberStringTuple: [number, string] = [1, "one"];

stringArray.push("van");
numberStringTuple[0] = 3;
numberStringTuple[1] = "three";

console.log(stringArray); //  ["bus", "train", "car", "van"]
console.log(numberStringTuple); //  [3, "three"]
