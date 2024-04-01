#! /usr/bin/env node
/* Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza! */
let fav_pizza = ["Pepperoni Pizza", "Margherita Pizza", "Hawaiian Pizza", "Vegetarian Pizza",];
for (let pizza of fav_pizza) {
    console.log(` I really LIKE ${pizza} `);
}
console.log("\n Pizzas hold a special place in my heart, for they bring immense joy and satisfaction with every bite, my affection for pizzas grows, and I cherish the moments shared with this beloved dish that has captured my heart.");
export {};
