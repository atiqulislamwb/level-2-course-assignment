function reverseArray<T>(...args: T[]): T[] {
  return args.reverse();
}

const relation = ["ami", "tumi", "she", "apni"];
const reversed = reverseArray(...relation);
console.log(reversed);
