function studentGrdEva(marks){
    if(marks >= 40 && marks <= 59){
        console.log("Your Grade Is :C");
    }
    else if(marks >= 60 && marks <= 74){
        console.log("Your Grade Is :B");
    }
      else if(marks >= 75 && marks <= 100){
        console.log("Your Grade Is :A");
    }
    else{
        console.log("Your Failed")
    }
}
studentGrdEva(99)