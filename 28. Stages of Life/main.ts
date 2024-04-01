#! /usr/bin/env node
/* Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder. */

// Import the required modules
import inquirer from "inquirer";
import chalk from "chalk";

// Define an async function to prompt the user for input
async function main() {
    try {
        const age = await inquirer.prompt([
            {
                message: "Enter Your Age",
                type: "number",
                name: "age",
            },
        ]);

        if (age.age < 2) {
            console.log(chalk.green("You Are A Baby"));
        } else if (age.age < 4) {
            console.log(chalk.green("You Are A Toddler"));
        } else if (age.age < 13) {
            console.log(chalk.green("You Are A Kid"));
        } else if (age.age < 20) {
            console.log(chalk.green("You Are A Teenager"));
        } else if (age.age < 65) {
            console.log(chalk.green("You Are An Adult"));
        } else {
            console.log(chalk.green("You Are An Elder"));
        }
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
}


main();
