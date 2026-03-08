let str = "TestLeaf"
let reverseStr = str.split("").reverse().join("")

console.log("Original String:", str)
console.log("Reversed String:", reverseStr)

// Check whether it is palindrome
if (str === reverseStr) {
    console.log("The string is a Palindrome")
} else {
    console.log("The string is NOT a Palindrome")
}
