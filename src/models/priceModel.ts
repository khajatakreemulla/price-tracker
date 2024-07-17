import mongoose, { Schema, Document } from 'mongoose';

export interface PriceDocument extends Document {
    code: String;
    rate: Number;
    volume: Number;
    cap : Number;
    delta : JSON;
}

const priceSchema: Schema = new Schema({
    code : { type : String },
    rate : { type : Number },
    volume : { type : Number },
    cap : { type : Number },
    delta : { type : JSON }
}, {timestamps: true})

const Price = mongoose.model<PriceDocument>("Price", priceSchema)

export default Price;