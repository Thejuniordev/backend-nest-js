import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    available: Boolean,
    name: String
});