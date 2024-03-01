import mongoose from "mongoose";
import AdvertiseModel from "../database/models/advertise_model";
import { IAdverTiseInterface } from "../database/interfaces/advertise_interface";

export const getAdvertiseRepo = async (
  advertiseId: String
): Promise<IAdverTiseInterface | null> => {
  try {
    const advertise = await AdvertiseModel.findOne({ aduid: advertiseId });
    return advertise;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteAdvertiseRepo = async (
  advertiseId: String
): Promise<boolean> => {
  try {
    const deleted = await AdvertiseModel.findOneAndDelete({
      aduid: advertiseId,
    });
    if (deleted) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const creatAdvertiseRepo = async (
  advertise: IAdverTiseInterface
): Promise<boolean> => {
  try {
    await AdvertiseModel.create(advertise);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateAdvertiseRepo = async (
  advertiseId: String,
  updatedAdvertise: IAdverTiseInterface
): Promise<boolean> => {
  try {
    const result = await AdvertiseModel.findOneAndUpdate(
      { aduid: advertiseId },
      updatedAdvertise,
      { new: true }
    );
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
