let fs = require("fs")
module.exports = function(dir, filename,file_data, encoding_str){
    return new Promise((resolve, reject)=>{
        if(dir === undefined) dir = ""
        if(filename === undefined) filename = ""
        let dir_file = dir + filename
        fs.writeFile(dir_file,file_data,encoding_str,function(err){
            if(err) reject(err)
            else resolve(dir_file)            
        })
    })
}