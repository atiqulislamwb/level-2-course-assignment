function checkString(param: unknown): void {
  if (typeof param === "string") {
    console.log(param);
  } else {
    throw new Error("Parameter is not a string.");
  }
}

checkString("Hi,Mom"); // Hello, world!
checkString(4553433); // Parameter is not a string.
