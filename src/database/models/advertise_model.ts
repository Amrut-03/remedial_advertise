import mongoose, {Document, Schema} from "mongoose";
import { IAdverTiseInterface } from "../interfaces/advertise_interface";

const AdvertiseSchema = new Schema<IAdverTiseInterface>({
    aduid: {type:String, required: true},
    urlimage: {type:String,required: true},
    subtitle: {type: String, default: "Subtitle"},
});

const AdvertiseModel = mongoose.model<IAdverTiseInterface>('AdvertiseModel',AdvertiseSchema)
export default AdvertiseModel