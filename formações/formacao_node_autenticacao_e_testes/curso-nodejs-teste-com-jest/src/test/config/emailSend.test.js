import nodemailer from "nodemailer";
import "dotenv/config";
import { expect } from "@jest/globals";

const transporter = nodemailer.createTransport({
  host: process.env.HOST_EMAIL,
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL,
  },
});

const verifyConnection = () =>
  new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) reject(error);
      resolve(success);
    });
  });

describe("Email send tests", () => {
  it("should validade the connection with the system", async () => {
    const isConnected = true;

    const connection = await verifyConnection();

    expect(connection).toStrictEqual(isConnected);
  });
});
