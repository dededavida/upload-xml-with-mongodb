import { Router } from "express";
import ctesRouter from "./ctes.routes";
import nfesRouter from "./nfes.routes";

const routes = Router();

routes.use("/nfes", nfesRouter);
routes.use("/ctes", ctesRouter);

export default routes;
