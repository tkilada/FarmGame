const mongoose = require("mongoose");



const SaveFileSchema  = new mongoose.Schema({
    Player:Object,
    FarmHouse:Object,
    Field:Object, 
    Paris:Object,
    Shops:Object,
    Tavern:Object,
    Palace:Object, 
    Month:{type:String, required: true},
    TurnPoints:{type:Number, required: true},
    name:{type:String, required: true},
    owner_id:{type:mongoose.Types.ObjectId, ref:'User'},
})



module.exports = mongoose.model("Save", SaveFileSchema)