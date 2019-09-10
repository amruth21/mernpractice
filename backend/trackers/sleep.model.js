const mongoose = require("mongoose")

const userSchema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    timestamps: true
})