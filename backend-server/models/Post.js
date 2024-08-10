const {default:moongoose, default: mongoose} = require("mongoose")

const postSchema=new moongoose.Schema({
    postText:{
        type:String,
        require:true
    },
    createdAt:String,
    imageUrl:String,
    createdBy:{
        type:moongoose.Schema.Types.ObjectId,ref:'user',
        require:true
    }
})

module.exports = moongoose.model('post', postSchema)