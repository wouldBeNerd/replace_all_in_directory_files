function replace_all_in_dir(dir,replace_str, replace_with_str, encoding){
return new Promise((resolve,reject)=>{
    if(String.ReplaceAll === undefined) require("./str_replace_all_proto_promise.js")()
    let fs_readdir_promise = require("./fs_readdir_promise.js")
    let fs_readfile_promise = require("./fs_readfile_promise.js")
    let fs_writefile_promise = require("./fs_writeFile_promise.js")
    fs_readdir_promise(dir).then((filenames)=>{
        Promise.all(
            filenames.map(function(filename){
                return new Promise((resolve,reject)=>{
                    fs_readfile_promise(dir,filename,encoding).then((file_content)=>{
                        //replace value in string first, replace with value second
                        file_content.ReplaceAll(replace_str,replace_with_str).then((new_file_content)=>{
                            fs_writefile_promise(dir,filename,new_file_content,encoding).then((response)=>{
                                resolve(response)
                            }).catch((err)=>{
                                reject(err)
                            })
                        })
                    })
                })

            })
        )
        .then((responses)=>{
            resolve(responses)
        })
        .catch((err)=>{
            reject(err)
        })
    })
})

}
//HOW TO USE
// replace_all_in_dir(
//     "c:/query files/", //dont forget to make it end in with '/'
//     "replace string",//string that you wish to replace in all the files
//     "with this string",//string that you wish to replace the previous string with
//     "utf-8"//encoding 
// ).then((responses)=>{
//     //returns an array of dir+filename that were saved
//     console.log(responses)
// }).catch((err)=>{
//     //what to do if something goes wrong
//     console.log(err)
// })
