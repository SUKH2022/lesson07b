// This model represents a user in the database
// It's a simple model enhance with plugins to provide authentication-related

const mongoose = require("mongoose");
const passport = require("passport");
const dataSchemaObject = {
    username: {type: String, required: true, unique: true},
    password: {type: String}, // don't make this require, we want to encrypt it 
};

const mongooseSchema = mongoose.Schema(dataSchemaObject);
module.exports = mongoose.model("User", mongooseSchema);