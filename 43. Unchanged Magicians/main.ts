#! /usr/bin/env node

/* Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */

const magicians: string[] = ['muhammad', 'asghar', 'talib'];

function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (const magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}

console.log("Original magicians:", magicians);

const great_magicians = make_great(magicians);
console.log("Great magicians:", great_magicians);
