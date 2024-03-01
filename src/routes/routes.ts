import { Router } from "express";
import helloRouter from "./hello.routes";
import advertiseRouter from "./advertise_route";

const router = Router();

router.use('/advertise', advertiseRouter);
router.use('/hello', helloRouter);

export default router;