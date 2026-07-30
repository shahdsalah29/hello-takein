import { summarize } from "./stats";
const myName: string = "shahad";

function greet(person: string): string {
  return `Hello, ${person}! Your TakeIN setup is working. 🎉`;
}

console.log(greet(myName));
const result = summarize([12, 7, 25, 3]);

console.log(result);