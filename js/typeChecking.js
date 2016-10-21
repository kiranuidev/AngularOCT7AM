
var name ="kiran";
var count =100;
var users =["kiran","Ravi"];
var user={firstName:"Vijaysri"};
var functionType = function(){
    
};

function checkDataTypes(input){
    if(typeof input =="string"){
        console.log("data type is String");
    }
    else if(typeof input=="number"){
        console.log("data type is :"+typeof input);
    }
    else{
        console.log("I don't know:"+typeof input);
    }
}

checkDataTypes("kiran");
checkDataTypes(count);
checkDataTypes(functionType);
checkDataTypes(user);
checkDataTypes(users);
checkDataTypes();
checkDataTypes(null);
