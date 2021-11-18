const mongoose = require("mongoose") 
const puppySchema = mongoose.Schema({ 
 puppy_breed: String, 
 weight: Number, 
 size: String 
}) 
 
module.exports = mongoose.model("Puppy", 
puppySchema) 
// for a specific Costume. 
exports.puppy_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Puppy.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle Costume update form on PUT. 
exports.puppy_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await puppy.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.puppy_breed)  
               toUpdate.puppy_breed = req.body.puppy_breed; 
        if(req.body.weight) toUpdate.weight = req.body.weight; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

.puppyAttr { 
    background-color: aquamarine; 
    width: 120px; 
  } 