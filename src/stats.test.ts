import { summarize } from "./stats";

test("summarize normal numbers", () => {
  const result = summarize([1, 2, 3, 4, 5]);

  expect(result).toEqual({
    count: 5,
    total: 15,
    average: 3,
    max: 5,
  });
});

test("summarize a single value", () => {
  const result = summarize([10]);

  expect(result).toEqual({
    count: 1,
    total: 10,
    average: 10,
    max: 10,
  });
});

test("summarize throws for an empty array", () => {
  expect(() => summarize([])).toThrow("Cannot summarize an empty array");
});
