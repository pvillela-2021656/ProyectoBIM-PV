import { Double } from "bson";
import { Schema } from "mongoose";

const productScheme = Schema({
    productImage:{
        type: String
    },
    name:{
        type: String,
        required: [true, "Name of the product is required."]
    },
    description:{
        type: String,
        required: [true, "Description of the product is required."]
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true
    },
    price:{
        type: Double,
        required: [true, "Price of the product is required."]
    },
    amount:{
        type: Number
    },
    status:{
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timeStamps: true
})

export default model("Product", productScheme)