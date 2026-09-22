const accountId = 144553
let accountEmail = "ayan@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;  // if  you create and let as it is the variable then output is undefined 


// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
use const , let
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])