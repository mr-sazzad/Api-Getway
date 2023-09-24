// import { Request } from "express";
import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService } from "../../../shared/axios";

const insertIntoDatabase = async (req: Request): Promise<IGenericResponse> => {
  console.log("REQUEST", req);

  const response: IGenericResponse = await CoreService.post("/academic-semesters", req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllFromDatabase = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get("/academic-semesters", {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleFromDatabase = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await CoreService.get(`/academic-semesters/${id}`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = {
  insertIntoDatabase,
  getAllFromDatabase,
  getSingleFromDatabase
};
