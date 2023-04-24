const mongoose = require('mongoose')
const joi = require("joi")

const podcastSchema = new mongoose.Schema({
    name: {type:String,required:true},
    artist: {type:String,required:true},
    podcast: {type:String,required:true},
    img: {type:String,required:true},
    duration: {type:Number,required:true},
})

const validate = (song) =>{
    const schema = joi.object({
        name:joi.string().required(),
        artist:joi.string().required(),
        podcast:joi.string().required(),
        img:joi.string().required(),
        duration:joi.number().required(),
    });
    return schema.validate(podcast);
}

const podcast = mongoose.model("podcast",podcastSchema)

module.exports = {podcast,validate};