import fs from "fs";
import path from "path";
import request from "supertest";
import assert from "assert";

const server = "http://localhost:3001";

describe("Datasource and Dashboard creation", () => {
  describe("POST", () => {
    it("responds with 200 status and application/json content type", async () => {
      await request(server)
        .post("/api/connect")
        .expect("Content-Type", /application\/json/)
        .expect(200);
    });
  });
});

describe("Error catch route", () => {
  it("should respond with a 404 error and 'page not found'", async () => {
    const response = await request(server).get("/wrongaddress");
    expect(response.status).toBe(404);
    expect(response.text).toBe("Page not found");
  });
});