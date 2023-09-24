import { RequestHandler } from "express";
import sendResponse from "../../../shared/response";
import { AcademicSemesterService } from "./academicSemesterService";

export const insertIntoDatabase: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicSemesterService.insertIntoDatabase(req);
    sendResponse(res, result);
  } catch (err: any) {
    next(err);
  }
};
