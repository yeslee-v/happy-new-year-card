import express, { Request, Response, NextFunction } from "express";

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("index", { title: "Express with EJS" });
});

export default indexRouter;
