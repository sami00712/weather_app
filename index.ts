#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyan.green.bold("\t Welcome to the App. \n"));

let ans = await inquirer.prompt([
    {
        name:"name",
        type:"list",
        message:chalk.bold.greenBright("How is day today?"),
        choices:["Cloudy","Rainy","Sunny","Check your Weather"]

    }
]);
switch(ans.name){
    case "Cloudy":
        console.log(chalk.blueBright("Nice Day!!"));
        break;
    case "Rainy":
        console.log(chalk.cyanBright.bold("Enjoy a Rainy Day!!"));
        break;
    case "Sunny":
        console.log(chalk.redBright.bold("Wear a Sunglasses!!"));
        break;
    case "Check your Weather":
        console.log(chalk.gray.bold("Check from Weather Forcast!!"));
        break;
    default:
        console.log(chalk.bgCyanBright.bold("Try Again!"));                
};


