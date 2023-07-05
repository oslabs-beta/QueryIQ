import fs from "fs";
import path from "path";
import request from "supertest";
import assert from "assert";
import { exec, ChildProcess } from 'child_process';

const server = "http://localhost:3001";
let serverProcess: ChildProcess;

beforeAll(async () => {
  console.log('Starting the server...');
  const startServer = 'npm run serve:dev';
  serverProcess = exec(startServer);
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for the server to start (adjust the delay as needed)
});

afterAll(() => {
  console.log('Stopping the server...');
  serverProcess.kill(); // Terminate the server process (you may need to customize this logic to gracefully stop your server)
});

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