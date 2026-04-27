

function GetWelcomeMessage(name: string): string{
    return `Hello ${name}`;
}
console.log(GetWelcomeMessage("vasu"));

function getUserInfo(name: string, age?: number): string{
    return `Hello ${name} and age is  ${age || 0}`;
}
console.log(getUserInfo("vasu",25));
console.log(getUserInfo("vasu"));

function getSubscriptionStatus(name: string, isSubscribed: boolean = false): string  {
    if(isSubscribed == true){
        return `${name} is subscribed`;
    }
    else
    {
        return `${name} is not subscribed`;
    }
}
console.log(getSubscriptionStatus("vasu",true));
console.log(getSubscriptionStatus("vasu"));

function isEligibleForPremium(age: number): boolean  {
    if(age>18){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEligibleForPremium(25));


const NotificationService={
    appName:"MyAppname",
    showNotification: ()=>{
        console.log(NotificationService.appName);
    }
}
NotificationService.showNotification();

const add=(a:number,b:number)=>a+b;
console.log(add(3,5));


