const mongoose = require("mongoose")

module.exports = (erq,res,next) =>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(404).send({message:"Invalid Id"});

    next();
}