#! /usr/bin/env node
/* Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */
function make_shirt(size, text) {
    console.log("The size of shirt is " + size + " and the text is " + text);
}
make_shirt('Medium', 'We Are The Best');
make_shirt('Large', 'I Love Black');
export {};
