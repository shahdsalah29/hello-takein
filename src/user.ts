export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export async function fetchUser(id: number): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch user ${id}: ${response.status}`);
  }

  return (await response.json()) as User;
}
