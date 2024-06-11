/* 
1. Use the inquirer npm package to get user input.(done)
2. Use the qr-image npm package to turn the user entered URL into a QR code image.(done)
3. Create a txt file to save the user input using the native fs node module.(done)
*/

// Importing necessary modules
import inquirer from "inquirer";
import qr from 'qr-image';
import fs from "fs";

// Questions for user input
const questions = [
  {
    type: "input",
    name: "url",
    message: "What's your URL:",
    validate(value) {
      const pass = value.match(
        /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w.-]*)*\/?$/i
      );
      if (pass) {
        return true;
      }
      return "Please enter a valid url";
    },
  },
];

// Prompting user for input
inquirer.prompt(questions).then((answers) => {
  // Generating QR code image
  const qr_svg = qr.image(answers.url, { type: 'png' });
  // Writing QR code image to file
  qr_svg.pipe(fs.createWriteStream('userInput.png'));
  // Writing user input to a text file
  fs.writeFile("output.txt",answers.url,(err)=>{
    if (err) 
        throw err
    console.log("The file has been saved!");
  })
});
