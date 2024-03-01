"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAdvertiseIdsController = exports.deleteAdvertiseController = exports.updateAdvertiseController = exports.createAdvertiseController = exports.getAdvertiseController = void 0;
const advertise_repo_1 = require("../repositories/advertise_repo");
const getAdvertiseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertiseId = req.params.advertiseId;
    console.log(advertiseId);
    try {
        const advertise = yield (0, advertise_repo_1.getAdvertiseRepo)(advertiseId);
        if (advertise) {
            res.status(200).json({ data: advertise });
        }
        else {
            res.status(500).json({ error: "User Not Found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.getAdvertiseController = getAdvertiseController;
const createAdvertiseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertise = req.body;
    try {
        const success = yield (0, advertise_repo_1.creatAdvertiseRepo)(advertise);
        if (success) {
            res.status(200).json({ data: advertise });
        }
        else {
            res.status(500).json({ error: "User Not Created" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.createAdvertiseController = createAdvertiseController;
const updateAdvertiseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedAdvertise = req.body;
    try {
        const success = yield (0, advertise_repo_1.updateAdvertiseRepo)(updatedAdvertise.aduid, updatedAdvertise);
        if (success) {
            res.status(200).json({ data: "User Updated" });
        }
        else {
            res.status(500).json({ error: "User Not Updated" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.updateAdvertiseController = updateAdvertiseController;
const deleteAdvertiseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertiseId = req.params.advertiseId;
    try {
        const success = yield (0, advertise_repo_1.deleteAdvertiseRepo)(advertiseId);
        if (success) {
            res.status(200).json({ data: "User Deleted" });
        }
        else {
            res.status(500).json({ error: "User Not Deleted" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.deleteAdvertiseController = deleteAdvertiseController;
const getAllAdvertiseIdsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allAdvertise = yield (0, advertise_repo_1.getAllAdvertiseIdsRepo)();
        if (allAdvertise) {
            res.status(200).json({ data: allAdvertise });
        }
        else {
            res.status(500).json({ error: "Error getting advertise IDs" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "500 error" });
    }
});
exports.getAllAdvertiseIdsController = getAllAdvertiseIdsController;
