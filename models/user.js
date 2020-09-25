const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
       
      
    },
    email:{

        type:String,
        required:true,
        unique:true
       
        

    },
    phone:{
        type:Number,
        required:true,
        min:11,
        unique:true
    },
    address:{
        type:String,
        required:true,
       
        
    },
    password:{
        type:String,
        required:true,
        min:12,
      
    },
    role:{
        type:Number,
        default:0
    },
    history:{
        type:Array,
        default:[]
    }
   
   

},{timestamps:true});

module.exports=mongoose.model('users',userSchema)