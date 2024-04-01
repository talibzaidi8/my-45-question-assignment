#! /usr/bin/env node
/*something you could store in a array. For example, you could make a list of
 mountains, rivers, countries, cities, languages, or anything else you’d like.
 Write a program that creates a list containing these items. */


 let countries: string[] = ["UAE" , "Türkiye" , "UK" , "US" , "Pakistan"]

 console.log( "The List Of Countries Are:" )
 
 for (let country of countries)
 {
     console.log(country)
 }