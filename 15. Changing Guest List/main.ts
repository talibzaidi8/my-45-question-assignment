#! /usr/bin/env node
/*You just heard that one of your guests can’t
make the dinner, so you need to send out a new set of
invitations. You’ll have to think of someone else to invite. */


let guest: string[] = ["talib" , "asghar" , "raza" , "muhammad" , "ali"]

console.log("Tomomorrow i held a dinner at my home for some of my friends the list of guests Invitations are: " )


// for(let i=0 ; i<guest.length ; i++)
// {
//     console.log( `HEY ${guest[i]} You Are Invited on Dinner At my Place` )
//     console.log("\n\n\t Thank You")
// }


console.log(` \n !!!   Unfortunaely ${guest[0]} would not come to dinner `)
console.log(" \n After His Replacement The New Guests invitations are : ")

let new_guest: string = "talib"
guest[0] = new_guest


for(let guests of guest)
{
    console.log( `\n\nHEY ${guests} You Are Invited on Dinner At my Place` )
    console.log("\t Thank You")
}

export{guest}