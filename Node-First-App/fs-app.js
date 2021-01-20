const fs= require('fs');
const files= fs.readdirSync('./');//returns all the files and directories in this folder

console.log(files);

//Asynchronously
fs.readdir('./', function(err, files){
    if(err){
        console.log('Error', err);
    }else{
        console.log(files);
    }
});