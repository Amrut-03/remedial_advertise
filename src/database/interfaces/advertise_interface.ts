import { Document } from "mongoose";

export interface IAdverTiseInterface extends Document{
    aduid: String,
    urlimage: String,
    subtitle: String,
}