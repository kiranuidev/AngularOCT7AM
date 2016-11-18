(function(){
    /*Module Creation*/
    angular.module("BlogFace",["header"]);
    
    /*consuming the module*/
    angular.module("BlogFace")
    .config([function(){
       console.log("Blog Face Module");  
    }])
    .run([function(){
        console.log("Blog Face run function");
    }]);
    
    
})();

/*
 config
 run
 controller
 service
 factory
 filter
 directive
 provider
 constant
 value
 component.
 

*/