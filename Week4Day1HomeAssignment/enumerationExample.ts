enum Environment {
  LOCAL,
  DEVELOPMENT,
  STAGING,
  PRODUCTION
}

function runTests(env : Environment) : void {
  
        console.log(`Tests are running in ${Environment[env]}`)        
    }

    runTests(Environment.LOCAL)
    runTests(Environment.DEVELOPMENT)
    runTests(Environment.STAGING)
    runTests(Environment.PRODUCTION)


