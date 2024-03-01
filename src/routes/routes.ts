import { Router } from "express";
import helloRouter from "./hello.routes";
import advertiseRouter from "./advertise_route";
import allAdvertise from "./allAdvertise";

const router = Router();

router.use('/advertise', advertiseRouter);
router.use('/hello', helloRouter);
router.use('/all',allAdvertise);

export default router;