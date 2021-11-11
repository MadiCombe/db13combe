const mongoose = require("mongoose") 
const puppySchema = mongoose.Schema({ 
 puppy_breed: String, 
 weight: Number, 
 size: String 
}) 
 
module.exports = mongoose.model("Puppy", 
puppySchema) 