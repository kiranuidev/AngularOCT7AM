

function bookTicket(transportMode){
    var discount;
    if(transportMode=="train"){
        discount=50;
    }
    else if(transportMode=="flight"){
        discount=500;
    }
    else if(transportMode=="bus"){
        discount=100;
    }
    else{
        discount=0;
    }
   
    return function (source,destination){
        
        console.log("Dear Customer");
        console.log("Your Ticket from:"+source);
        console.log("To: "+destination);
        console.log("Mode: "+transportMode);
        console.log("Discount: "+discount);
    }
}
var flightTicket = bookTicket("flight");
var trainTicket = bookTicket("train");
var busTicket = bookTicket("bus");
flightTicket("Hyderabad","Banglore");
busTicket("Hyderabad","Banglore");
trainTicket("Hyderabad","Banglore");
console.log(flightTicket);






