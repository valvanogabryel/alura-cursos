/* eslint-disable no-undef */
import { sumExtraHours, calcDiscount } from "../index.js";

describe("sheet calculation tests", () => {
  it("should return the sum of extra hours", () => {
    const expected = 2500;
    const received = sumExtraHours(2000, 500);

    expect(received).toBe(expected);
  });

  it("should return the value with de discount applied", () => {
    const expected = 2500;
    const received = calcDiscount(3000, 500);

    expect(received).toBe(expected);
  });
});
