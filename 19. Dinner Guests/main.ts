#! /usr/bin/env node
/*  Working with one of the programs from Exercises 14 through 18, print a 
message indicating the number of people you are inviting to dinner. */

import { guest } from "../15. Changing Guest List";

console.log("\nPrinting a message indicating the number of guests:");
console.log(`We had invited ${guest.length} guests in Exercise 15.`);
