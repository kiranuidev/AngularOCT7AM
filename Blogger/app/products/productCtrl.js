(
    function () {

        function productCtrl($scope, productSvc) {
            $scope.search=function(){
                  productSvc.searchProducts($scope.searchProduct)
                .then(function (response) {
                    $scope.products = response;
                })
                .catch(function (response) {
                    console.log(response);
                });
            };
          
        }
        angular.module("product")
            .controller("productCtrl", ["$scope", "productSvc", productCtrl]);
    }

)();