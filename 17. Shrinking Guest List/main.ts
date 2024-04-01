#! /usr/bin/env node
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */


let guest: string[] = ["talib" , "asghar" , "ali" , "muhammad" , "ali"]

/*
console.log( "Tomomorrow i held a dinner at my home for some of my friends the list of guests Invitations are: " )

for(let i=0 ; i<guest.length ; i++)
{
    console.log( `HEY ${guest[i]} You Are Invited on Dinner At my Place` )
    console.log("\n\n\t Thank You")
} 


console.log( `\n !!!   Unfortunaely ${guest[0]} would not come to dinner` )
console.log( "\nAfter His Replacement The New Guests invitations are :" )

let new_guest: string = "Hadeed"
guest[0] = new_guest


console.log( "\n Good News! , I found A Bigger Table" )
*/
guest.unshift( "babar" )
guest.splice( 2 , 0 , "hassan" )
guest.push("shaheen")

/*
for(let i=0 ; i<guest.length ; i++)
{
    console.log( `\n HEY ${guest[i]} \n You Are Invited on Dinner At my Place \n Thankyou` )
}
*/
console.log( "\n\n\t Sorry Unfortunately We can not Arrange Biger Table so Onky 2 guests Are Invited" )

while(guest.length > 2)
{
    let remove_guest = guest.pop()
    console.log(`Sorry Mr. ${remove_guest} you Are Not Invited On Dinner`)
}

for(let i=0 ; i<guest.length ; i++)
{
    console.log( `\n HEY ${guest[i]} , \n You Are Still Invited on Dinner At my Place \n Thankyou` )
}

guest.splice(0 , 2)

console.log(guest)