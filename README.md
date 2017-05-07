# replace_all_strings_in_directory_promise
Iterate all files in a directory async
Replace all occurrences of a string with another string.
## How it works
It reads the directory with filestream and returns array of filenames
for each filename a promise made inside a promise_all function is generated.
The replacements all happen in a promise loop, this should prevent callstack errors.
Once it is done it returns ana array of all modified directory+file. 
No report of replacements is given. But it would be easy to modify it to do so. 
## How to use
```javascript
let replace_all_in_dir = require("./app.js")
replace_all_in_dir(
    "c:/queries/", //dont forget to make it end with '/'
    "replace string",//string that you wish to replace in all the files
    "with this tring",//string that you wish to replace the previous string with
    "utf-8"//encoding 
).then((responses)=>{
    //returns an array of dir+filename that were saved
    console.log(responses)
}).catch((err)=>{
    //what to do if something goes wrong
    console.log(err)
})
```
