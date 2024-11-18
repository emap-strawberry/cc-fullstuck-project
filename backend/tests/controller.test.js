const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../server");

chai.use(chaiHttp);

describe("Health Check", () => {
  it("should return status 200 and OK message", async () => {
    const res = await chai.request(app).get("/api/health");
    expect(res).to.have.status(200);
  });
});

describe("Guess Records", () => {
  it("should return status 200 when you GET guess_records", async () => {
    const res = await chai.request(app).get("/api/guess_records");
    expect(res).to.have.status(200);
    expect(res).to.be.json;
  });
  it("should return status 200 when you POST guess_records with your name", async () => {
    const res = await chai
      .request(app)
      .post("/api/guess_records")
      .send({ user_name: "Player1", guess: 456 });
    expect(res).to.have.status(200);
    expect(res).to.be.json;
  });
  it("should return status 200 when you POST guess_records without your name", async () => {
    const res = await chai
      .request(app)
      .post("/api/guess_records")
      .send({ guess: 123 });
    expect(res).to.have.status(200);
    expect(res).to.be.json;
  });
});
