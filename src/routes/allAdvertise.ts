import express from "express";

import { getAllAdvertiseIdsController } from "../controllers/advertise_controller";

export default (router: express.Router)=>{
    router.get('/all',getAllAdvertiseIdsController);
}