export interface StatsSummary {
  count: number;
  total: number;
  average: number;
  max: number;
}

export function summarize(values: number[]): StatsSummary {
  if (values.length === 0) {
    throw new Error("Cannot summarize an empty array");
  }
  const count = values.length;

  const total = values.reduce((sum, value) => sum + value, 0);

  const average = total / count;

  const max = Math.max(...values);

  return {
    count,
    total,
    average,
    max,
  };
}
