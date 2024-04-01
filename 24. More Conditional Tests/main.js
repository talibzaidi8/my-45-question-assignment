#! /usr/bin/env node
/* You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

 Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
let name_1 = "talib";
let name_2 = "talib raza";
let name_3 = "talib raza zaidi";
if (name_1 == name_3) {
    console.log(" Name 1 is Equals to Name 2 ");
}
else {
    console.log(" Name 1 is Not Equal to Name 2");
}
if (name_3 == name_1) {
    console.log(" Name 1 is Equals to Name 2 ");
}
else {
    console.log(" Name 1 is Not Equal to Name 2");
}
if (name_1 != name_2) {
    console.log(" Names Are Not Equal ");
}
else {
    console.log(" Names Are Equal ");
}
let age_1 = 15;
let age_2 = 19;
let age_3 = 32;
if (age_1 >= 16 && age_1 <= 30) {
    console.log(` ${name_1} is Eligible For Admission In College `);
}
else {
    console.log("Not Eligible");
}
if (age_2 >= 18 && age_1 <= 30) {
    console.log(` ${name_2} is Eligible For Admission In College `);
}
else {
    console.log("Not Eligible");
}
if (age_3 >= 18 && age_1 <= 30) {
    console.log(` ${name_3} is Eligible For Admission In College `);
}
else {
    console.log("Not Eligible");
}
if (age_1 >= 18 || age_2 == age_1) {
    console.log(` ${name_3} is Eligible `);
}
else {
    console.log("Not Eligible");
}
let pak = ["Karachi", "Lahore", "Islamabad", "Moro", "Hyderabad"];
if (pak.includes("Karachi")) {
    console.log(" Karachi is in Pakistan ");
}
else {
    console.log("not found");
}
if (pak.includes("New York")) {
    console.log("New York Is In Pakistan");
}
else {
    console.log("New York Is Not In Pakistan");
}
export {};
