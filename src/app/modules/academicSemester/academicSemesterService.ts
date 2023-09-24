// import { Request } from "express";
import { CoreService } from "../../../shared/axios";

const insertIntoDatabase = async (req) => {
  console.log("REQUEST", req);

  const response = await CoreService.post("/academic-semesters", req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = {
  insertIntoDatabase
};
