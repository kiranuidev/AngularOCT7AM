function bookTicket(source, destination) {
    var discount;

    function calculateDiscount(transportMode) {
        if (transportMode == "train") {
            discount = 50;
        } else if (transportMode == "flight") {
            discount = 500;
        } else if (transportMode == "bus") {
            discount = 100;
        } else {
            discount = 0;
        }
    }
    return {
        getFlightTicket: function (transportMode) {
            calculateDiscount(transportMode);
            console.log("Dear Customer");
            console.log("Your Ticket from:" + source);
            console.log("To: " + destination);
            console.log("Mode: " + transportMode);
            console.log("Discount: " + discount);
        },
        getBusTicket: function (transportMode) {
            calculateDiscount(transportMode);
            console.log("Dear Customer");
            console.log("Your Ticket from:" + source);
            console.log("To: " + destination);
            console.log("Mode: " + transportMode);
            console.log("Discount: " + discount);
        },
        getTrainTicket: function (transportMode) {
            calculateDiscount(transportMode);
            console.log("Dear Customer");
            console.log("Your Ticket from:" + source);
            console.log("To: " + destination);
            console.log("Mode: " + transportMode);
            console.log("Discount: " + discount);
        }
    };
}

var tickets = bookTicket("Hyderabad","Banglore");
tickets.getBusTicket("bus");
tickets.getTrainTicket("train");
tickets.getFlightTicket("flight");