"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hello_routes_1 = __importDefault(require("./hello.routes"));
const advertise_route_1 = __importDefault(require("./advertise_route"));
const router = (0, express_1.Router)();
router.use('/advertise', advertise_route_1.default);
router.use('/hello', hello_routes_1.default);
exports.default = router;
