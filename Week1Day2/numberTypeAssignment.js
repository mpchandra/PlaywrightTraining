let i=-1
let j=3
let k=0

findnumbertype(i)
findnumbertype(j)
findnumbertype(k)

function findnumbertype(num)
{
    if (num>0)
        console.log("Number  " + num + "  is Positive")
    else if (num<0)
        console.log("Number " + num + " is Negative")
        else
        console.log("Number " + num + " is Neutral")    
}