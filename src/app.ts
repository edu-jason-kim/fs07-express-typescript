import type { NextFunction, Request, RequestHandler, Response } from "express";
import express from "express";

const app = express();
const port = 3000;

const handler = (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
};

const handler2: RequestHandler = (req, res, next) => {
  res.send("Hello World!");
};

app.get("/", handler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
