const accountId = 144553
let accountEmail = 'jigar@google.com'
var accountPassword = 'xyz@123'
accountCity = 'Mumbai'
let accountState;
// declared but not initialized then it will known as undefined.

// accountId = 2  // not allowed // TypeError: Assignment to constant variable.
console.log(accountId);

accountEmail = 'padhiyar@google.com'
accountPassword = 'abc@123'
accountCity = 'Chennai'
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
    Prefer not to use var bcoz issue in functional scope aur block scope
*/