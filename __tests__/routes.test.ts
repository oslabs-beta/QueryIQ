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
