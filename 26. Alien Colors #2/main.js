#! /usr/bin/env node
/* Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block. */
import inquirer from "inquirer";
import chalk from "chalk";
const Alien_color = await inquirer.prompt([
    {
        message: "Choose One Operation",
        type: "list",
        name: "operator",
        choices: ["red", "green"]
    },
]);
if (Alien_color.operation == "green") {
    console.log(chalk.green("\t Player Just Earned 5 Points"));
}
else if (Alien_color.operator !== "green") {
    console.log(chalk.red("\t Player Just Earned 10 Points"));
}
else {
    console.log("\t Invalid Color");
}
