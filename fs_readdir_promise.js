let fs = require("fs")
module.exports = function(dir){
    return new Promise((resolve, reject)=>{
        fs.readdir(dir,function(err, filenames){
            if(err) reject(err)
            else resolve(filenames)
        })
    })
}