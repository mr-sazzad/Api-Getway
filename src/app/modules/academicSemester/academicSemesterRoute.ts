import { Router } from "express";
import { insertIntoDatabase } from "./academicSemesterController";

const router = Router();

router.post("/", insertIntoDatabase);

export const AcademicSemesterRoutes = router;
