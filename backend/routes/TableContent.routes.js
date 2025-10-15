import express from "express";
import {
  createTablePage,
  updateTablePage,
} from "../controllers/researchCouncil.controller.js";

const tableRouter = express.Router();

// TablePage routes
tableRouter.post("/table-pages", createTablePage);
tableRouter.put("/table-pages/:id", updateTablePage);


export default tableRouter;