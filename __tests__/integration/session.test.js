const request = require("supertest");

const truncate = require("../utils/truncate");

const app = require("../../src/app");

const { User } = require("../../src/app/models");
describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("O usuario deve ter credenciais", async () => {
    const user = await User.create({
      name: "wagnerww",
      email: "wagnerricardo@teste.ocom",
      password_hash: "4535345"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: "wagnerricardo@teste.ocom",
        passwrod_hash: "4535345"
      });

    expect(response.status).toBe(200);
  });
});
