const router = require("express").Router();
const SaveModel = require("../models/SaveSchema")
const User = require("../models/user.model")
const validateSession = require("../middleware/validate-session")

// Add Save to db
router.get("/LoadGame" , validateSession,async (req,res)=> {
    try {
        const filter = {owner_id: req.user._id}
        const saves = await SaveModel.find(filter)
    
        res.json({save:saves, message: "Save Loaded"})
    } catch (error) {
        res.json({message:error.message})
    }
    
})
router.get("/LoadThisGame/:id" , validateSession,async (req,res)=> {
    try {
        
        const saves = await SaveModel.find({_id: req.params.id})

        res.json({save:saves, message: "Save Loaded"})
    } catch (error) {
        res.json({message:error.message})
    }
    
})


router.post("/SaveGame", validateSession, async (req,res)=> {
    try {
        const save = new SaveModel ({
            
            Player: req.body.Player,
            FarmHouse: req.body.FarmHouse,
            Field: req.body.Field,
            Paris: req.body.Paris,
            Shops: req.body.Shops,
            Tavern: req.body.Tavern,
            Palace: req.body.Palace,
            Month:req.body.Month,
            name : req.body.name,
            TurnPoints:req.body.TurnPoints,
            owner_id: req.user
        })
        const newSave = await save.save()
        res.json({
            save: newSave,
            message:"Game Saved"
        })
    } catch (error) {
        res.json({message:error.message})
    }
    
})





module.exports = router; 