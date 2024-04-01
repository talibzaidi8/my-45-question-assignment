#! /usr/bin/env node
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */

let guest: string[] = ["talib", "ali", "asghar", "muhammad", "raza"];

console.log(
  "Tomomorrow i held a dinner at my home for some of my friends the list of guests Invitations are: "
);

/* for(let i=0 ; i<guest.length ; i++)
{
    console.log( `HEY ${guest[i]} You Are Invited on Dinner At my Place` )
    console.log("\n\n\t Thank You")
} 


console.log( `\n !!!   Unfortunaely ${guest[0]} would not come to dinner` )
console.log( "\nAfter His Replacement The New Guests invitations are :" )

let new_guest: string = "Hadeed"
guest[0] = new_guest

for(let i=0 ; i<guest.length ; i++)
{
    console.log( `HEY ${guest[i]} You Are Invited on Dinner At my Place` )
    console.log( "\n\t Thank You" )
}
*/

console.log("\n Good News! , I found A Bigger Table");
console.log("More Guests Are Invited Now");

guest.unshift("sikandar");
guest.splice(2, 0, "babar");
guest.push("hassan");

for (let guests of guest) 
{
    console.log(`\n HEY ${guests} You Are Invited on Dinner At my Place`);
    console.log("\t Thank You");
}