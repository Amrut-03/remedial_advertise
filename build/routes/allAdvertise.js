"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const advertise_controller_1 = require("../controllers/advertise_controller");
exports.default = (router) => {
    router.get('/all', advertise_controller_1.getAllAdvertiseIdsController);
};
