import { expect } from "@jest/globals";
import AluguelLivroService from "../../services/aluguelLivroService";

const aluguelService = new AluguelLivroService();

describe("aluguelLivroService tests", () => {
  it("should return book return date validating the number of days rented", async () => {
    const rentedDate = new Date("2023-01-01");
    const numberOfDaysRented = 5;
    const returnDateMock = new Date("2023-01-06");

    const returnDate = await aluguelService.cadastrarDataDevolução(
      rentedDate,
      numberOfDaysRented
    );

    expect(returnDate).toEqual(returnDateMock);
  });
});
