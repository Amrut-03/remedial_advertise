import { Router } from "express";
import { getAdvertiseRepo } from "../repositories/advertise_repo";
import { createAdvertiseController, deleteAdvertiseController, getAdvertiseController, getAllAdvertiseIdsController, updateAdvertiseController } from "../controllers/advertise_controller";

const advertiseRouter = Router();

advertiseRouter.get("/", getAllAdvertiseIdsController);
advertiseRouter.get("/:advertiseId", getAdvertiseController);
advertiseRouter.post("/",createAdvertiseController);
advertiseRouter.delete("/advertiseId",deleteAdvertiseController);
advertiseRouter.put("/",updateAdvertiseController);


export default advertiseRouter;