const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/dbuser")
const userSchema=new mongoose.Schema({
  name:String,
  image:String,
  email:String
})
exports.userdatamodels=mongoose.model('userdata',userSchema)