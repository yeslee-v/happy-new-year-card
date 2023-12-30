import express, { Request, Response, NextFunction } from "express";

const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("respond with a resource");
});

export default usersRouter;
