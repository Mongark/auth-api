import express from "express";
import hello_router from "./routes/hello";

const app = express();

app.use(hello_router);

export default app;
