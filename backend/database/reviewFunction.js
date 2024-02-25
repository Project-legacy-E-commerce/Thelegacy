const {Reviewrate} = require("../database/sequalise")


const saveRate = (data) => {
   return Reviewrate.create(data)
}

const deleteRate=(id)=>{
    return Reviewrate.destroy({
        where: { id:id }
      })
}

module.exports={saveRate,deleteRate}