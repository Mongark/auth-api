import { Request, Response, Router } from "express";

const hello_router = Router();

hello_router.get('/hello', (req: Request, res: Response) => {
    res.status(200).send("hello");
    console.log("GET /hello");
});

export default hello_router;
