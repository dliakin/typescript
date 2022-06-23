const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const msg: string = "Hello TypeScript";

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ["Hello", "TypeScript"];

//Tuple
const contact: [string, number] = ["Dmitrii", 1234567];

//Any
let variable: any = 42;
//...
variable = "New String";
variable = [];

//===
function sayMyName(name: string): void {
  console.log(name);
}

sayMyName("Heisenberg");

//Never
function throwError(msg: string): never {
  throw new Error(msg);
}

// function infinite(): never {
//   while (true) {}
// }

//Type

type Login = string;
const login: Login = "admin";
// const login2: Login = 2; // Login is not a number

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";
// const id3: ID = true; //Type 'boolean' is not assignable to type 'ID'

type SomeType = string | null | undefined;
