let fs = require("fs")
module.exports = function(dir, filename, encoding_str){
    return new Promise((resolve, reject)=>{
        if(dir === undefined) dir = ""
        if(filename === undefined) filename = ""
        let dir_file = dir + filename
        fs.readFile(dir_file,encoding_str,function(err,file_content_string){
            if(err) reject(err)
            else resolve(file_content_string)            
        })
    })
}