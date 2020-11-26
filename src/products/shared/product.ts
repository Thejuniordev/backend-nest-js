import { Document } from "mongoose";
export class Product extends Document {
    available: boolean;
    name: string;
}

