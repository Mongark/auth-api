import app from "../src/app";
import supertest from "supertest";

const test_app = supertest(app);

describe("GET /hello", () => {
    it("should return a 200 response", async() => {
        const res = await test_app.get('/hello');
        expect(res.statusCode).toEqual(200);
    });
});
