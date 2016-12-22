(function(){
    function loginCtrl($scope){
        
       $scope.loginDetails ={};
        $scope.emailRegex =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        $scope.login= function(){
            console.log($scope.loginDetails);
        };

        $scope.$watch("loginDetails.email",function(newValue,oldValue){
            
            console.log("NEW VALUE: "+newValue);
            console.log("OLD VALUE: "+oldValue);
        });

        setTimeout(function(){
            $scope.loginDetails.email="Kiran@gmail.com";
            $scope.$apply();
        },2000)
    }
    angular.module("login")
    .controller("loginCtrl",["$scope",loginCtrl])
    
})();