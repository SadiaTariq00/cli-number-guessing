#! /usr/bin/env node
import inquirer from  "inquirer";
 // 1) computer will generate a random number -Done

 // 2) user input for guessing number -Done

 // 3) compure user input with computer generated number and show result -Done

 const randomNumber = Math.floor(Math.random() * 6 + 1);
   console.log ("Welcome to number guessing game");

   const answers = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message : "Please guess a number betweeen 1-6:",
    },

   ]);

   if (answers.userGuessedNumber === randomNumber) {
    console.log("congtratulations! you guessed right number.");
   } else {
    console.log("you guessed wrong number");
   } 