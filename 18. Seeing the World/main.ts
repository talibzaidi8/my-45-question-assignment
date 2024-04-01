#! /usr/bin/env node
/* Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

let place: string[] = [ "Tokyo" , "Makkah" , "Medina" , "Time Square" , "Eiffel Tower" ]

console.log( "Places I want to visit Are" )
console.log( place )

console.log( "\n Places I want to visit Are In Temporary Alphabetical Order" )
console.log( [...place].sort() )

console.log( "\n Places I want to visit Are Still In Original Condition" )
console.log( place )

console.log( "\n Places I want to visit Are In Temporary Reverse Alphabetical Order" )
console.log( [...place].sort().reverse() )

console.log( "\n Places I want to visit Are Still In Original Condition" )
console.log( place )

console.log("\n Places I want to visit Are In Permenant Reverse Order" )
place.reverse()
console.log( place )

console.log( "\n Places I want to visit Are Back To Original Condition" )
place.reverse()
console.log( place )

console.log( "\n Places I want to visit Are In Permenant Alphabetical Order" )
place.sort()
console.log( place )

console.log( "\n Places I want to visit Are In Permenant Reverse Alphabetical Order" )
place.sort().reverse()
console.log( place )