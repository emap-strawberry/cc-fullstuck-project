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
  it("should return status 200 and OK message", async () => {
    const res = await chai.request(app).get("/api/guess_records");
    expect(res).to.have.status(200);
  });
});
