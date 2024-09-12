import { test, expect } from "vitest";
import { Billing } from "../";

test("Lowest tier", () => {
  const storage = 10;

  const cost = 4000;
  const expectedCost = Billing.compute(storage);

  expect(cost).toEqual(expectedCost);
});

test("Middle tier", () => {
  const storage = 110;

  const cost = 22000;
  const expectedCost = Billing.compute(storage);

  expect(cost).toEqual(expectedCost);
});

test("Highest tier", () => {
  const storage = 1001;

  const cost = 100100;
  const expectedCost = Billing.compute(storage);

  expect(cost).toEqual(expectedCost);
});