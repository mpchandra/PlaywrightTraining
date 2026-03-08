// let sentence = "You are beautiful"
// let splitStr = sentence.split(" ").pop().length //pop retruns the last word
// console.log(splitStr)

// Example:1
// 1. Split the string into an array of words.
// 2. Find the last word in the array.
// 3. Calculate the length of this word.

let sentence = "Hello World"
let wordsArr = sentence.split(" ")
console.log(wordsArr)
let lastWord = wordsArr[wordsArr.length-1]
console.log("Last Word is  "+ lastWord)
console.log("Length of Last Word is  "+ lastWord.length)

// Example:2
// 1. Trim the String
// 2. Split the String into Words
// 3. Identify the Last Word
// 4. Calculate the Length of the Last Word
// 5. Return the length

let sentence1 = "fly me to the moon".trim()
let wordsArr1 = sentence1.split(" ")
console.log(wordsArr1)
let lastWord1 = wordsArr1[wordsArr1.length-1]
console.log("Last Word is  "+ lastWord1)
console.log("Length of Last Word is  "+ lastWord1.length)

function IsAnagram(Str1, Str2)
{
    
    let firstStr = Str1.trim().toLowerCase().split("").sort().join("")
    console.log(firstStr)
    let secondStr = Str2.trim().toLowerCase().split("").sort().join("")
    console.log(secondStr)
    if (firstStr === secondStr)
    {
        console.log("It is Anagram")
    }
    else
    {
         console.log("It is Not Anagram")
    }
}
IsAnagram("Hello", "WORLD")
IsAnagram("LISTEN", "eilnst")

