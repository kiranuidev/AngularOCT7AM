var validators = {};
(
    function (context) {
        /*      
              validators.phoneValidation = function(data){
                  //it should be 10 digit
                  // it should be number
                  var isNumber = parseInt(data);
               /*   if( isNumber !=NaN && data.length==10){
                      return true;
                  }
                  else{
                      return false;
                  }
        return isNumber != NaN && data.length == 10;
    }; */

    context.numberValidate = function (type, data) {
        var dataLength;
        if (type == "Phone") {
            dataLength = 10;
        } else if (type == "Pincode") {
            dataLength = 6;
        }
        return isNumber != NaN && data.length == dataLength;
    };

}
)(validators);
