import { summarize } from "./stats";
import { fetchUser } from "./user";

const myName: string = "shahad";

function greet(person: string): string {
  return `Hello, ${person}! Your TakeIN setup is working. 🎉`;
}

async function main() {
  console.log(greet(myName));

  const result = summarize([12, 7, 25, 3]);
  console.log(result);

  try {
    const user = await fetchUser(1);
console.log(`User: ${user.name} <${user.email}>`);
  } catch (error) {
    console.error("Something went wrong:", (error as Error).message);
  }
}

main();