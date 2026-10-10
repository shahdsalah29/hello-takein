import { fetchUser } from "./user";

test("fetchUser returns the user", async () => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    username: "johndoe",
  };

  const fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => user,
  } as Response);

  try {
    const result = await fetchUser(1);
    expect(result).toEqual(user);
  } finally {
    fetchMock.mockRestore();
  }
});

test("fetchUser returns the user", async () => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    username: "johndoe",
  };

  const fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => user,
  } as Response);

  try {
    const result = await fetchUser(1);
    expect(result).toEqual(user);
  } finally {
    fetchMock.mockRestore();
  }
});

test("fetchUser rejects on network error", async () => {
  const fetchMock = jest
    .spyOn(global, "fetch")
    .mockRejectedValue(new Error("Network error"));

  try {
    await expect(fetchUser(1)).rejects.toThrow("Network error");
  } finally {
    fetchMock.mockRestore();
  }
});
