#! /usr/bin/env node
/*  Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */

function make_shirt
(
    size: string = "Small", 
    text: string = "i love typescript"
): 
void 
{
    console.log(`The Shirt You Order Is ${size} and text is ${text} `);
}

make_shirt();
make_shirt("Medium");
