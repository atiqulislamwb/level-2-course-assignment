function repeatFunction(str: string, num: number = 3): void {
  for (let i = 0; i < num; i++) {
    console.log(str);
  }
}

repeatFunction("Hi Mom", 7); //repeat 7 times
repeatFunction("Hi"); // repeat default (3) time
