import { Request, Response } from "express";
import { creatAdvertiseRepo,getAdvertiseRepo,deleteAdvertiseRepo,updateAdvertiseRepo, getAllAdvertiseIdsRepo } from "../repositories/advertise_repo";
import { IAdverTiseInterface } from "../database/interfaces/advertise_interface";

export const getAdvertiseController = async (req: Request, res: Response) => {
  const advertiseId = req.params.advertiseId as string;
  console.log(advertiseId);

  try {
    const advertise = await getAdvertiseRepo(advertiseId);
    if (advertise) {
      res.status(200).json({ data: advertise });
    } else {
      res.status(500).json({ error: "User Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const createAdvertiseController = async (req: Request, res: Response) => {
  const advertise: IAdverTiseInterface = req.body;

  try {
    const success = await creatAdvertiseRepo(advertise);
    if (success) {
      res.status(200).json({ data: advertise });
    } else {
      res.status(500).json({ error: "User Not Created" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const updateAdvertiseController = async (req: Request, res: Response) => {
    const updatedAdvertise: IAdverTiseInterface = req.body;
  
    try {
      const success = await updateAdvertiseRepo(updatedAdvertise.aduid,updatedAdvertise);

      if (success) {
        res.status(200).json({ data: "User Updated" });
      } else {
        res.status(500).json({ error: "User Not Updated" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  };

  export const deleteAdvertiseController = async (req: Request, res: Response) => {
    const advertiseId = req.params.advertiseId as string;
    try {
      const success = await deleteAdvertiseRepo(advertiseId);
      if (success) {
        res.status(200).json({ data: "User Deleted" });
      } else {
        res.status(500).json({ error: "User Not Deleted" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  };

  export const getAllAdvertiseIdsController = async (req: Request, res: Response) => {
    try {
      const allAdvertise = await getAllAdvertiseIdsRepo();
      if (allAdvertise) {
        res.status(200).json({ data: allAdvertise });
      } else {
        res.status(500).json({ error: "Error getting advertise IDs" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "500 error" });
    }
  };