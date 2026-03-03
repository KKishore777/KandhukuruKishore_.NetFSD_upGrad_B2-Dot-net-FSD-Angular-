function trafficSim(name){
    switch(name){
        case "red":
            console.log("STOP");
            break
        case "yellow":
            console.log("GET READY");
            break
        case "green":
            console.log("GO");
            break
        default :
            console.log("INVALID");
        
    }
}
trafficSim("red");
trafficSim("green");
trafficSim("");
trafficSim("yellow");