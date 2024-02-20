const con = require('../database/sequalise')
module.exports ={
   connect : async (req , res)=>{
        try{
            const result = await con.connected()
            res.json(result)
        }
        catch(err){
            console.log(err);
        }
   }

}