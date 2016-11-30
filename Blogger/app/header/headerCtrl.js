(
    function () {
        /*controller syntax
        1. controller function will take two params
          controller Name
          callbackFunction
        */
        function headerCtrlFn($scope){
            $scope.brandName="Blogger.io";
            $scope.navItems=["Home","Product","Register","Login"];
        }
        
        angular.module("header")
        .controller("headerCtrl",["$scope",headerCtrlFn]);
        
        
    })();
