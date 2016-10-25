var person ={};

(
    function(context){
        context.phone="1234567890";
      
        var result=validators.phoneValidation(context.phone);
        console.log(result);
        var second = validators.phoneValidation("abcd");
        console.log(result);
        
    }
)(person);