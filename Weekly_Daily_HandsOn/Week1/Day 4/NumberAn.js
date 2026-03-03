function numberAnalysis(n){
    let numb = (n >= 0) ? "POSITIVE" : "NEGATIVE";
    console.log(`${n} is ${numb}`);
    if(n%2==0){
        console.log(n," Is EVEN NUMBER");
    }
    else{
        console.log(n," IS ODD NUMBER");
    }
    
}
numberAnalysis(-4);
numberAnalysis(3);
numberAnalysis(1);
numberAnalysis(19);
numberAnalysis(8);
