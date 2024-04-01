#! /usr/bin/env node
/*  Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */
const magicians = ['muhammad', 'asghar', 'talib'];
function show_magician(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let magician of magicians) {
        console.log(`${magician} is a great magician`);
    }
}
// Call the functions
show_magician(magicians);
make_great(magicians);
export {};
