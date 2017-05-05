module.exports = function(){
    String.prototype.ReplaceAll = function(replace_str, with_str){
        return new Promise((resolve,reject)=>{
            let currStr = this
            function replace_str_with(){
                return new Promise((resolve,reject)=>{
                    currStr = currStr.replace(replace_str, with_str)
                    let ind = currStr.indexOf(replace_str)
                    if(ind !== -1){ 
                        resolve(currStr)
                    }else{
                        reject(currStr)
                    } 
                })
            }
            function p_catch(dat){
                resolve(dat)
            }
            function p_then(dat){
                replace_str_with().then(p_then).catch(p_catch)        
            }
            replace_str_with().then(p_then).catch(p_catch)     
        })
    
    }
}
