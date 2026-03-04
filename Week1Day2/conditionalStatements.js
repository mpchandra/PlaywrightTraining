launchBrowser("Chrome")
launchBrowser("Edge")
runTests("sanity") 
runTests("regression")
runTests() //default is selected when no values passed

function launchBrowser(browserName)
{
    if (browserName == "Chrome")
        console.log("Chrome browser Launched")
    else
        console.log("Not Chrome browser Launched")
}

function runTests(testType)
{
    switch(testType)
    {
        case "sanity":
            console.log("Sanity Test Selected")
            break
        case "regression":
            console.log("Regression Test Selected")
            break
        default:
            console.log("Smoke Test Selected")    
            
    }
}