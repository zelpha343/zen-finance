import { Schema } from "mongoose";

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    logs: [{
        logDescription: String,
        merchant: String,
        amount: Number,
        add: Boolean,
        dayName: String,
        Date: Date
    }],
    balance
});