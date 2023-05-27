type StringOrNumber<T> = T extends string ? string : number;

function foo<T extends string | number>(arg: T): StringOrNumber<T> {
  const result = typeof arg === "string" ? arg : Number(arg);
  return result;
}
