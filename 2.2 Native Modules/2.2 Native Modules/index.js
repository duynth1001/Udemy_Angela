const { isUtf8 } = require("buffer");
const fs = require("fs")

// fs.writeFile("message.txt","Hello from Hoang Duy!",(err)=>{
//     if (err) 
//         throw err
//     console.log("The file has been saved!");
// })

fs.readFile("message.txt",'utf-8',(err,data)=>{
    if (err)
        throw err
    console.log(data);
})