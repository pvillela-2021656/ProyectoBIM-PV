import { Schema, model } from "mongoose";

const categoryScheme = Schema({
    categoryName:{
        type: String,
        required: [true, "Name of the category is needed."],
        unique: true
    },
    categoryDescription:{
        type: String,
        required: [true, "Description of the category is needed."]
    },
    categoryNameStatus:{
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timeStamps: true
})

export default model("Category", categoryScheme)