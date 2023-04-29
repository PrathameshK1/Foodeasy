import User from "../../models/User";
import connectDb from "../../middleware/mongoose";

connectDb()

export default async function handler(req,res){

    const {username,password}=req.body
    const user=await(User.findOne({email,password}))
    if(!user){
        return res.json({status:"not able to find"})
    }
    else{
        res.redirect(302,'/Home')
    }
}