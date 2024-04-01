#! /usr/bin/env node
/*Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */
import inquirer from "inquirer";
const Alien_color = await inquirer.prompt([
    {
        message: "Choose One Operation",
        type: "list",
        name: "operator",
        choices: ["red", "green", "yellow"]
    },
]);
if (Alien_color == "green") {
    console.log("\t Player Just Earned 5 points");
}
else if (Alien_color == "yellow") {
    console.log("\t Player Just Earned 10 points");
}
else
    (Alien_color == "red");
{
    console.log("\t Player Just Earned 15 points");
}
