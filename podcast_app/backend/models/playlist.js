const mongoose = require('mongoose')
const joi = require("joi")

const ObjectId = mongoose.Schema.Types.ObjectId;

const playlistSchema = new mongoose.Schema({
    name:{type:String,required:true},
    userId:{type:ObjectId,ref:"user",required:true},
    desc:{type:String},
    podcasts:{type:Array,default:[]},
    img:{type:String},
})

const validate = (playlist) => {
    const schema = joi.object({
        name:joi.string().required(),
        userId:joi.string().required(),
        desc:joi.string().allow(""),
        podcasts:joi.array().items(joi.string()),
        img:joi.string().allow(""),
    });
    return schema.validate(playlist)
}

const playlist = mongoose.model("playlist",playlistSchema)

module.exports = {playlist,validate};