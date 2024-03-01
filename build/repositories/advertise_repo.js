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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAdvertiseRepo = exports.creatAdvertiseRepo = exports.deleteAdvertiseRepo = exports.getAdvertiseRepo = exports.getAllAdvertiseIdsRepo = void 0;
const advertise_model_1 = __importDefault(require("../database/models/advertise_model"));
const getAllAdvertiseIdsRepo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allAdvertises = yield advertise_model_1.default.find({}, 'aduid');
        const advertiseIds = allAdvertises.map((advertise) => advertise.aduid);
        return advertiseIds;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.getAllAdvertiseIdsRepo = getAllAdvertiseIdsRepo;
const getAdvertiseRepo = (advertiseId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const advertise = yield advertise_model_1.default.findOne({ aduid: advertiseId });
        return advertise;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.getAdvertiseRepo = getAdvertiseRepo;
const deleteAdvertiseRepo = (advertiseId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield advertise_model_1.default.findOneAndDelete({
            aduid: advertiseId,
        });
        if (deleted) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.deleteAdvertiseRepo = deleteAdvertiseRepo;
const creatAdvertiseRepo = (advertise) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield advertise_model_1.default.create(advertise);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.creatAdvertiseRepo = creatAdvertiseRepo;
const updateAdvertiseRepo = (advertiseId, updatedAdvertise) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield advertise_model_1.default.findOneAndUpdate({ aduid: advertiseId }, updatedAdvertise, { new: true });
        if (result) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.updateAdvertiseRepo = updateAdvertiseRepo;
