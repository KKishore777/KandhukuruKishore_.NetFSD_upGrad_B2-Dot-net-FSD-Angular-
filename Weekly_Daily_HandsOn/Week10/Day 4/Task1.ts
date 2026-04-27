const userName: string = "John";
let age: number = 25;
const email: string = "john@example.com";
const isSubscribed: boolean = true;

let city = "Hyderabad";
let loginCount = 5;

let userProfileMessage = `Hello ${userName}, you are ${age} years old and your email is ${email}.`;

console.log("User Profile:");
console.log(userProfileMessage);

age++;

console.log("Updated Age after Increment:");
console.log(age);

let isEligibleForPremium: boolean = age > 18 && isSubscribed;

console.log("Eligible for Premium Plan:");
console.log(isEligibleForPremium);

console.log("Is age greater than 21?");
console.log(age > 21);

console.log("Is user subscribed?");
console.log(isSubscribed);

console.log("City:");
console.log(city);

console.log("Login Count:");
console.log(loginCount);

userProfileMessage = `Hello ${userName}, you are now ${age} years old and your email is ${email}.`;

console.log("Updated User Profile:");
console.log(userProfileMessage);