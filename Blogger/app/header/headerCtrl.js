(
    function () {
        /*controller syntax
        1. controller function will take two params
          controller Name
          callbackFunction
        */
        function headerCtrlFn($scope,$rootScope){
            $scope.brandName="Blogger.io";
            $scope.navItems=["Home","Product","Register","Login","Users"];
       
            $scope.productCount=0;
            $rootScope.$on("PROUDCT-ADDED",function(evet,args){
                 $scope.productCount++;
            });
 }
        
        angular.module("header")
        .controller("headerCtrl",["$scope","$rootScope",headerCtrlFn]);
        
        
    })();
