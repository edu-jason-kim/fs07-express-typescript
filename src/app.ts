import type { NextFunction, Request, RequestHandler, Response } from "express";
import express from "express";
import multer from "multer";

const app = express();
const upload = multer({ dest: "uploads/" });
const port = 3000;

const handler = (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
};

const handler2: RequestHandler = (req, res, next) => {
  res.send("Hello World!");
};

// authentication middleware에서 req.user를 할당
app.use((req, res, next) => {
  // 사용자 인증 로직 진행
  req.user = { id: "1", name: "john" };
  next();
});

app.get("/", handler);

// user.service에서 req.user를 접근
app.get("/me", (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);

  res.send("file uploaded");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
