var profiles = [{
        name: "Kiran",
        gender: "M",
        age: 28,
        salary: 20000,
        location: "India"
    },
    {
        name: "Ravi",
        gender: "M",
        age: 27,
        salary: 300000,
        location: "US"
    },
    {
        name: "Rahul",
        gender: "M",
        age: 28,
        salary: 20000,
        location: "India"
    },
                {
        name: "Siri",
        gender: "F",
        age: 24,
        salary: 20000,
        location: "India"
    },
                
                {
        name: "Shruti",
        gender: "F",
        age: 26,
        salary: 20000,
        location: "US"
    },
                
                {
        name: "priya",
        gender: "F",
        age: 25,
        salary: 200000,
        location: "US"
    },
               ];
//salary >=30000
//locaition india

function getProfiles(){
    for(var i=0;i<profiles.length;i++){
        if(profiles[i].gender=="M" &&      profiles[i].salary>=30000 && profiles[i].location=="India"
          &&
        (profiles[i].age>24 && profiles[i].age<28)
            ){
          console.log(profiles[i]);
      }
        else{
            console.log("this profile doesn't match");
        }
    }
    // ternary operators
    
     var username="kiranN";
    if(username=="kiran"){
        console.log("I know this user");
    }
    else{
        console.log("I don't know this user");
    }
    
    var data = username=="kiran"?"Kiran paturi":"I DON'T KNOW";
}







