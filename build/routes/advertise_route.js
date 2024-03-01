"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const advertise_controller_1 = require("../controllers/advertise_controller");
const advertiseRouter = (0, express_1.Router)();
advertiseRouter.get("/:advertiseId", advertise_controller_1.getAdvertiseController);
advertiseRouter.post("/", advertise_controller_1.createAdvertiseController);
advertiseRouter.delete("/advertiseId", advertise_controller_1.deleteAdvertiseController);
advertiseRouter.put("/", advertise_controller_1.updateAdvertiseController);
exports.default = advertiseRouter;