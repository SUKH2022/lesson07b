// This model represents a user in the database
// It's a simple model enhance with plugins to provide authentication-related feature
// Such as Password Encryption, deserialization/ serialization, Initialize Strategy etc
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const passport = require("passport");
const dataSchemaObject = {
    username: {type: String, required: true, unique: true},
    password: {type: String}, // don't make this require, we want to encrypt it 
};

const mongooseSchema = mongoose.Schema(dataSchemaObject);
// Inject the passport-local-mongoose plugin into Schema
mongooseSchema.plugin(plm);
module.exports = mongoose.model("User", mongooseSchema);