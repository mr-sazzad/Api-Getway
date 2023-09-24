import { Router } from "express";
import {
  getAllFromDatabase,
  getSingleFromDatabase,
  insertIntoDatabase
} from "./academicSemesterController";

const router = Router();

router.get("/:id", getSingleFromDatabase);
router.get("/", getAllFromDatabase);
router.post("/", insertIntoDatabase);

export const AcademicSemesterRoutes = router;
