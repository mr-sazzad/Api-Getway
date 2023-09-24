import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import httpStatus from "http-status";
import globalExceptionHandler from "./app/middlewares/globalExceptionHandler";
import routes from "./app/routes/index";

const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    status: 200,
    success: true,
    message: "Hello From Api Getaway!",
    author: "sazzad karim"
  });
});

app.use(globalExceptionHandler);

app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API not found",
    errorMessages: [
      {
        path: "",
        message: "API not found"
      }
    ]
  });
});

export default app;
